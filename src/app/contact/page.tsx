"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

// Contact page with client-side validation, optional email verification step (server-side),
// honeypot anti-spam, and an optional 3D Google Map embed.
//
// Notes for deployment:
// - To enable server-side email verification, implement an API route at POST /api/verify-email
//   that accepts { email } and returns { verified: boolean } after doing an MX/SMTP check.
// - To accept form submissions, implement an API route at POST /api/contact that accepts
//   the form payload and sends email (or stores it) securely server-side.
// - To enable the interactive 3D Google Map, set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in env.

export default function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
    const [emailVerified, setEmailVerified] = useState<boolean | null>(null);
    const honeypotRef = useRef<HTMLInputElement | null>(null);
    const mapRef = useRef<HTMLDivElement | null>(null);

    const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    useEffect(() => {
        // Optionally load Google Maps JS for a 3D map view (tilt) if API key present
        if (!GOOGLE_MAPS_KEY || typeof window === "undefined") return;

        if ((window as any).google && mapRef.current) {
            initMap();
            return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => initMap();
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [GOOGLE_MAPS_KEY]);

    function initMap() {
        if (!mapRef.current) return;
        try {
            const google = (window as any).google;
            const center = { lat: 11.5564, lng: 104.9282 }; // Phnom Penh
            const map = new google.maps.Map(mapRef.current, {
                center,
                zoom: 16,
                tilt: 45,
                heading: 90,
                mapTypeId: "hybrid",
                disableDefaultUI: true,
            });

            new google.maps.Marker({ position: center, map });

            // Try to enable 45-degree imagery where available
            if (google.maps.MaxZoomService) {
                const maxZoomService = new google.maps.MaxZoomService();
                maxZoomService.getMaxZoomAtLatLng(center, (resp: any) => {
                    if (resp.status === "OK") {
                        map.setZoom(Math.min(map.getZoom(), resp.zoom));
                    }
                });
            }
        } catch (err) {
            // fail silently if maps can't initialize
            // console.warn(err)
        }
    }

    function validateEmailFormat(email: string) {
        // Strict-ish RFC5322-lite regex for client-side validation
        return /^[a-zA-Z0-9.!#$%&'*+\/= ?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }

    async function handleVerifyEmail(emailToCheck: string) {
        // Optional server-side verification hook. Implement /api/verify-email to perform MX/SMTP checks.
        if (!emailToCheck) return null;
        if (!validateEmailFormat(emailToCheck)) return false;

        try {
            const res = await fetch("/api/verify-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailToCheck }),
            });
            if (!res.ok) return null;
            const json = await res.json();
            return Boolean(json?.verified);
        } catch (e) {
            return null;
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus(null);

        // Basic client-side validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ ok: false, message: "Please fill name, email, and message." });
            return;
        }
        if (!validateEmailFormat(email)) {
            setStatus({ ok: false, message: "Please enter a valid email address." });
            return;
        }

        // Honeypot: if filled, treat as spam
        if (honeypotRef.current && honeypotRef.current.value) {
            setStatus({ ok: false, message: "Spam detected." });
            return;
        }

        setLoading(true);

        // Optionally verify email via server; if server says unverified, block submission.
        try {
            const verified = await handleVerifyEmail(email);
            setEmailVerified(verified);
            if (verified === false) {
                setStatus({ ok: false, message: "Email could not be verified. Please use a different address." });
                setLoading(false);
                return;
            }
        } catch (err) {
            // proceed if verification not available
        }

        // Submit to server-side contact handler
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message, ts: Date.now() }),
            });

            if (!res.ok) {
                const text = await res.text();
                setStatus({ ok: false, message: `Submission failed: ${text || res.statusText}` });
            } else {
                setStatus({ ok: true, message: "Message sent — we'll reply soon." });
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            }
        } catch (err) {
            setStatus({ ok: false, message: "Network error while submitting. Please try again later." });
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Use this form to reach the team. We validate inputs client-side and optionally verify email ownership if a server-side verifier is configured.</p>

                        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                            {/* honeypot field - hidden from users. Keep aria-hidden for screen-readers, add aria-label and title to satisfy accessibility lint. */}
                            <input
                                ref={honeypotRef}
                                name="hp_field"
                                type="text"
                                autoComplete="off"
                                className="hidden"
                                aria-hidden="true"
                                aria-label="Leave this field empty"
                                title="Leave this field empty"
                                tabIndex={-1}
                            />

                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="flex flex-col">
                                    <span className="text-sm font-medium mb-1">Name</span>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Your name" />
                                </label>

                                <label className="flex flex-col">
                                    <span className="text-sm font-medium mb-1">Email</span>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="you@example.com" />
                                </label>
                            </div>

                            <label className="flex flex-col">
                                <span className="text-sm font-medium mb-1">Subject</span>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} className="input" placeholder="Brief subject" />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-sm font-medium mb-1">Message</span>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="input" placeholder="How can we help?" />
                            </label>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    {emailVerified === true && <span className="text-green-600">Email verified</span>}
                                    {emailVerified === false && <span className="text-red-600">Email could not be verified</span>}
                                </div>
                                <div className="flex gap-3">
                                    <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
                                    <Button variant="outline" type="button" onClick={() => { setName(""); setEmail(""); setSubject(""); setMessage(""); }}>Reset</Button>
                                </div>
                            </div>

                            {status && (
                                <div className={`p-3 rounded ${status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Contact Info</h2>
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex items-start gap-3">
                                    <Mail className="h-5 w-5 text-indigo-600 mt-1" />
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">hello@ai-vs-mcp.org</div>
                                    </div>
                                </div>

                                <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-green-600 mt-1" />
                                    <div>
                                        <div className="font-semibold">Phone</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">+855 23 000 000</div>
                                    </div>
                                </div>

                                <div className="p-4 bg-white dark:bg-gray-800 rounded shadow flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                                    <div>
                                        <div className="font-semibold">Location</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">Phnom Penh, Cambodia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Map</h2>
                        <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">Interactive 3D map (Google Maps JS). Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable.</div>
                        <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-900" />
                        {!GOOGLE_MAPS_KEY && (
                            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900 rounded text-sm text-yellow-800">Google Maps API key not configured. The map preview is disabled.</div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
