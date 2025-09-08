import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, MapPin, Flag } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-20">
                <section className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About AI vs MCP</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        We explore the frontier where autonomous AI agents meet interoperable model
                        protocols. Our mission is to build open standards, reference implementations,
                        and reproducible research to make multi-model systems reliable and secure.
                    </p>
                </section>

                <section className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="h-6 w-6 text-indigo-600" />
                            <h3 className="font-semibold">Who We Are</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Collaborative researchers, engineers, and practitioners building tools,
                            specifications, and best practices for safe multi-model AI.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="h-6 w-6 text-green-600" />
                            <h3 className="font-semibold">Where We Work</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Distributed across the globe — we collaborate remotely and with local
                            partners to run experiments and deploy reference systems.
                        </p>
                    </div>

                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <div className="flex items-center gap-3 mb-4">
                            <Flag className="h-6 w-6 text-amber-600" />
                            <h3 className="font-semibold">Our Mission</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Make multi-model AI approachable, auditable, and safe for developers
                            and organizations of all sizes.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Core Initiatives</h2>
                    <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                        <li>
                            <strong>MCP Spec:</strong> Maintain and evolve the Model Context Protocol specification with community input.
                        </li>
                        <li>
                            <strong>Reference Runtime:</strong> Provide an open-source implementation to demonstrate secure, composable model interactions.
                        </li>
                        <li>
                            <strong>Benchmarks & Tools:</strong> Build reproducible datasets, evaluation suites, and developer tools.
                        </li>
                        <li>
                            <strong>Education & Outreach:</strong> Workshops, tutorials, and documentation to help teams adopt MCP.
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Team & Contributors</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">We welcome contributions from researchers, engineers, and students. Our contributors include folks from academia and industry.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h4 className="font-semibold">Lead Maintainer</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Sisovin — project lead and core spec author</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h4 className="font-semibold">Research Leads</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Open roles — reach out if interested</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h4 className="font-semibold">Community</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Working groups, forum, and mailing lists.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get Involved</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Join the community, contribute to the spec, or sponsor infrastructure for reproducible research.</p>
                    <div className="flex gap-4">
                        <Button size="lg">Contribute</Button>
                        <Button variant="outline" size="lg">Contact Us</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
