import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Privacy Policy</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">This privacy policy describes how we collect, use, and share personal information in relation to the AI vs MCP project.</p>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Information We Collect</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                        <li>Contact info submitted through forms (name, email, message).</li>
                        <li>Usage data including IP address, browser user-agent, and analytics.</li>
                        <li>Optional content you upload when contributing to the project.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">How We Use Data</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                        <li>To respond to inquiries and provide support.</li>
                        <li>To run benchmarks and research with de-identified data where possible.</li>
                        <li>To maintain and secure the service.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Data Sharing & Third Parties</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">We may share aggregated or anonymized data with research partners. We use third-party services for analytics and hosting; see their privacy policies for details.</p>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Your Rights</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">You may request deletion of your personal data or updates to contact details by emailing hello@ai-vs-mcp.org.</p>
                </section>

                <section className="mb-12">
                    <h2 className="font-semibold mb-2">Security</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">We follow standard security practices to protect data, including encrypted storage for sensitive information and access controls. However, no internet transmission is 100% secure.</p>
                </section>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Questions?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Contact us at <a className="underline" href="mailto:privacy@ai-vs-mcp.org">privacy@ai-vs-mcp.org</a>.</p>
                    <Button size="lg">Contact Privacy Team</Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
