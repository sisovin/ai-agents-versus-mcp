import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Globe, Shield, Users, Rocket, BookOpen } from "lucide-react";

export default function UseCasesPage() {
    const useCases = [
        {
            icon: <Briefcase className="h-8 w-8 text-blue-600" />,
            title: "Business Automation",
            desc: "Automate end-to-end workflows: scheduling, invoicing, and customer lifecycle management.",
            highlight: "Reduce manual work and speed operations",
        },
        {
            icon: <Users className="h-8 w-8 text-purple-600" />,
            title: "Customer Service",
            desc: "Hybrid agents and MCP-connected models provide 24/7 personalized support with safe context sharing.",
            highlight: "Improve response quality and routing",
        },
        {
            icon: <Globe className="h-8 w-8 text-green-600" />,
            title: "Knowledge & Search",
            desc: "Composable retrieval, synthesis, and context grounding across distributed knowledge bases.",
            highlight: "Deliver accurate, auditable answers",
        },
        {
            icon: <Shield className="h-8 w-8 text-amber-600" />,
            title: "Privacy-Sensitive Workflows",
            desc: "Scoped context sharing, access control, and audit trails for regulated domains.",
            highlight: "Protect user data while enabling collaboration",
        },
        {
            icon: <Rocket className="h-8 w-8 text-red-600" />,
            title: "Realtime Assistance",
            desc: "Low-latency MCP messaging and lightweight agents for live applications and tools.",
            highlight: "Responsive, contextual user experiences",
        },
        {
            icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
            title: "Research & Benchmarking",
            desc: "Structured experiments that measure multi-model composition, robustness, and utility.",
            highlight: "Reproducible evaluations and open datasets",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <BookOpen className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Use Cases</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Concrete examples showing how AI Agents and the Model Context Protocol (MCP) are applied in production systems.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3 mb-12">
                    {useCases.map((u) => (
                        <Card key={u.title} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-md">{u.icon}</div>
                                    <CardTitle className="text-lg">{u.title}</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm">{u.highlight}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{u.desc}</p>
                                <div className="mt-4 flex gap-3">
                                    <Button size="sm">Learn More</Button>
                                    <Button variant="outline" size="sm">See Examples</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Patterns & Architectures</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Agent-first</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">A single agent coordinates tasks, invoking models and tools as needed. Best when a system needs centralized planning and adaptive decision-making.</p>
                            <ul className="text-sm list-disc list-inside text-gray-600 dark:text-gray-300">
                                <li>Central planner owns the workflow</li>
                                <li>Agents handle retries and error recovery</li>
                                <li>Good for exploratory or open-ended tasks</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Protocol-first (MCP)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Components communicate via MCP, sharing only scoped context. Best when you need predictable integrations, multi-provider composition, and strong audits.</p>
                            <ul className="text-sm list-disc list-inside text-gray-600 dark:text-gray-300">
                                <li>Clear contracts between components</li>
                                <li>Easy to swap providers and models</li>
                                <li>Enables cross-team and cross-tenant scaling</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Start building</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Explore starter kits, example deployments, and recommended benchmarks to validate your design.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Get Starter Kits</Button>
                        <Button variant="outline" size="lg">View Benchmarks</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
