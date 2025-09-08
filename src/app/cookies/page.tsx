import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Cookie Policy</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">This page explains how we use cookies and similar technologies on the AI vs MCP site.</p>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">What are cookies?</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Cookies are small text files stored on your device by your browser. They help websites remember preferences, enable core functionality, and measure site usage.</p>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Types of cookies we use</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>Essential:</strong> Required for site security and core features (e.g. session management).</li>
                        <li><strong>Preferences:</strong> Remember UI choices such as theme, language, and layout preferences.</li>
                        <li><strong>Analytics:</strong> Aggregate usage data to improve performance and content. We use anonymized analytics where possible.</li>
                        <li><strong>Advertising/Third-party:</strong> Cookies set by external services for marketing or embedded content. These are governed by the third parties' policies.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">How we use cookies</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">We use cookies to keep the site secure, remember your preferences, analyze traffic patterns, and to serve embedded content such as videos. We do not store sensitive personal data in cookies.</p>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Managing cookies</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Most browsers allow you to manage cookies in settings (block, delete, or prompt). Note that disabling essential cookies may break site functionality.</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">For commonly used browsers:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                        <li>Firefox: Preferences → Privacy & Security → Cookies and Site Data</li>
                        <li>Edge: Settings → Cookies and site permissions</li>
                        <li>Safari: Preferences → Privacy → Manage Website Data</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Third-party cookies</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">We may embed content (videos, analytics, widgets) served by third parties who may set cookies. We recommend reviewing the privacy policies of those providers to understand their cookie practices.</p>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Consent and updates</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Where required by law, we request consent prior to setting non-essential cookies. We may update this cookie policy; we will post changes on this page with an updated date.</p>
                </section>

                <section className="mb-12">
                    <h2 className="font-semibold mb-2">Contact</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">If you have questions about our cookie practices or wish to make a request regarding cookies, contact us at <a className="underline" href="mailto:privacy@ai-vs-mcp.org">privacy@ai-vs-mcp.org</a>.</p>
                    <div className="flex gap-4">
                        <Button size="sm">Cookie Settings</Button>
                        <Button variant="outline" size="sm">Privacy Policy</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
