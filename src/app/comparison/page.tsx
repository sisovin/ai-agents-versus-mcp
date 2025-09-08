import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Bot, Brain, Shield, Layers, Scale } from "lucide-react";

export default function ComparisonPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                {/* Hero */}
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <Scale className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        AI Agents vs Model Context Protocol
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A practical comparison to help you choose between autonomous agent-driven
                        architectures and MCP-based model interoperability for your projects.
                    </p>
                </section>

                {/* Side-by-side comparison */}
                <section className="mb-12">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="p-0">
                            <CardHeader className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-100 rounded-md">
                                        <Bot className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl">AI Agents</CardTitle>
                                </div>
                                <CardDescription className="mt-2">
                                    Autonomous systems that plan, act, and iterate to solve tasks.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                    <li><strong>Strengths:</strong> Goal-driven automation, flexible planning, end-to-end task ownership.</li>
                                    <li><strong>When to use:</strong> Workflows requiring decision-making, orchestration, and adaptive policies.</li>
                                    <li><strong>Examples:</strong> Personal assistants, automated customer workflows, robotic control loops.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="p-0">
                            <CardHeader className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-md">
                                        <Layers className="h-6 w-6 text-green-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Model Context Protocol (MCP)</CardTitle>
                                </div>
                                <CardDescription className="mt-2">
                                    Standardized protocol for sharing context and capabilities between models.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                                    <li><strong>Strengths:</strong> Interoperability, composability, strong scoping & security primitives.</li>
                                    <li><strong>When to use:</strong> Multi-model systems that need predictable context exchange and auditability.</li>
                                    <li><strong>Examples:</strong> Multi-model pipelines, model marketplaces, plugin-based model networks.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Comparison table */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Quick Comparison</h2>
                    <div className="overflow-x-auto rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700">
                        <table className="w-full table-auto text-left">
                            <thead className="bg-gray-100 dark:bg-gray-900">
                                <tr>
                                    <th className="p-4 w-1/4">Aspect</th>
                                    <th className="p-4">AI Agents</th>
                                    <th className="p-4">MCP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t dark:border-gray-700">
                                    <td className="p-4 align-top font-medium">Primary focus</td>
                                    <td className="p-4">Autonomous decision-making and action.</td>
                                    <td className="p-4">Reliable context exchange and capability discovery.</td>
                                </tr>
                                <tr className="border-t dark:border-gray-700">
                                    <td className="p-4 align-top font-medium">Control flow</td>
                                    <td className="p-4">Agent-driven planning loops.</td>
                                    <td className="p-4">Protocol-driven messaging between components.</td>
                                </tr>
                                <tr className="border-t dark:border-gray-700">
                                    <td className="p-4 align-top font-medium">Security & privacy</td>
                                    <td className="p-4">Depends on runtime; often coarse-grained.</td>
                                    <td className="p-4">Designed with scoping, auth, and audit in mind.</td>
                                </tr>
                                <tr className="border-t dark:border-gray-700">
                                    <td className="p-4 align-top font-medium">Composability</td>
                                    <td className="p-4">Challenging across heterogeneous agents without adapters.</td>
                                    <td className="p-4">Native: models and tools can be composed via well-defined contracts.</td>
                                </tr>
                                <tr className="border-t dark:border-gray-700">
                                    <td className="p-4 align-top font-medium">Latency</td>
                                    <td className="p-4">Varies — agents may add planning overhead.</td>
                                    <td className="p-4">Optimized for minimal protocol overhead.</td>
                                </tr>
                                <tr className="border-t dark:border-gray-700">
                                    <td className="p-4 align-top font-medium">Best fit</td>
                                    <td className="p-4">Task automation, exploration, and adaptive user-facing agents.</td>
                                    <td className="p-4">Systems needing predictable model integration, audits, or marketplaces.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Tradeoffs and recommendations */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tradeoffs & Recommendations</h2>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Brain className="h-5 w-5 text-indigo-600" />
                                    <CardTitle className="text-lg">Flexibility</CardTitle>
                                </div>
                                <CardDescription className="mt-2">Agents win where end-to-end flexibility is required.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-700 dark:text-gray-300">If your product requires iterative planning and autonomous choices, an agent-first approach gives developers more expressive control.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Shield className="h-5 w-5 text-green-600" />
                                    <CardTitle className="text-lg">Predictability</CardTitle>
                                </div>
                                <CardDescription className="mt-2">MCP favors predictable integrations and auditability.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-700 dark:text-gray-300">Choose MCP when you need clear contracts, scoped access to sensitive data, and reproducible behavior across environments.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Scale className="h-5 w-5 text-yellow-600" />
                                    <CardTitle className="text-lg">Scale</CardTitle>
                                </div>
                                <CardDescription className="mt-2">Both approaches can scale — tradeoff is operational complexity.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-700 dark:text-gray-300">MCP simplifies cross-team scaling by enforcing contracts; agents simplify vertical scaling by embedding logic close to the task.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Decision checklist */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Decision Checklist</h2>
                    <ul className="grid gap-3 md:grid-cols-2 text-sm text-gray-700 dark:text-gray-300">
                        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">Does the system need autonomous planning? — Prefer agents.</li>
                        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">Do you need strict access controls and audits? — Prefer MCP.</li>
                        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">Will multiple providers/models need to interoperate? — Prefer MCP.</li>
                        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">Are low-latency, user-facing interactions required? — Consider MCP or hybrid.</li>
                        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">Do you want a single system to own the workflow? — Prefer agents.</li>
                        <li className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">Is reproducibility across environments critical? — Prefer MCP.</li>
                    </ul>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Not sure? Try a hybrid</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Many production systems combine agents for orchestration while using MCP to connect specialized models and services.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Explore Designs</Button>
                        <Button variant="outline" size="lg">Read MCP Spec</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
