import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Terms of Use</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Please read these terms carefully before using the AI vs MCP site or contributing to the project.</p>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Acceptance</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">By accessing this site or contributing, you agree to these terms and any policies referenced herein.</p>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Contributions</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Contributions may be licensed under the project's open-source license. Do not submit content you do not have rights to share.</p>
                </section>

                <section className="mb-6">
                    <h2 className="font-semibold mb-2">Liability</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">The project and maintainers are not liable for damages arising from use of the site or software. Use at your own risk.</p>
                </section>

                <section className="mb-12">
                    <h2 className="font-semibold mb-2">Changes</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-300">We may update these terms. Continued use indicates acceptance of revised terms.</p>
                </section>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Questions?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Contact legal@ai-vs-mcp.org for questions about these terms.</p>
                    <Button size="lg">Contact Legal</Button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
