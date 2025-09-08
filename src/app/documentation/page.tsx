import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Layers, FileText, GitBranch, Clipboard } from "lucide-react";

export default function DocumentationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-sky-600 rounded-full">
                            <BookOpen className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Documentation</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Comprehensive resources for researching and implementing AI Agents and the Model Context Protocol (MCP).
                        Guides, reference material, tutorials, and recommended experiments to help you evaluate designs and reproduce results.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-3 mb-12">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Layers className="h-6 w-6 text-indigo-600" />
                                <CardTitle className="text-lg">Architecture Guides</CardTitle>
                            </div>
                            <CardDescription className="mt-2 text-sm">Design patterns and reference architectures for agents and MCP-based systems.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Learn recommended topologies, deployment patterns, and operational considerations for latency, security, and observability.</p>
                            <div className="flex gap-3">
                                <Button size="sm">Agent-first Guide</Button>
                                <Button variant="outline" size="sm">MCP Architecture</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <FileText className="h-6 w-6 text-emerald-600" />
                                <CardTitle className="text-lg">Specification & API</CardTitle>
                            </div>
                            <CardDescription className="mt-2 text-sm">MCP spec, message formats, and runtime API references.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Reference the protocol schema, message lifecycle, scoping rules, and examples of capability negotiation and discovery.</p>
                            <div className="flex gap-3">
                                <Button size="sm">Read Spec</Button>
                                <Button variant="outline" size="sm">API Reference</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <GitBranch className="h-6 w-6 text-purple-600" />
                                <CardTitle className="text-lg">Tutorials & Examples</CardTitle>
                            </div>
                            <CardDescription className="mt-2 text-sm">Hands-on walkthroughs and sample projects demonstrating best practices.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Step-by-step tutorials: build an agent, connect models via MCP, and compose hybrid systems with reproducible code.</p>
                            <div className="flex gap-3">
                                <Button size="sm">Quickstart</Button>
                                <Button variant="outline" size="sm">Sample Apps</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Deep-dive: Comparing Agents & MCP</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Conceptual differences</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">AI Agents encapsulate control, planning, and adaptive behavior. MCP focuses on standardized context exchange, discoverability, and scoped interactions between components.</p>

                            <h4 className="font-medium mt-4">Key considerations</h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-2">
                                <li>Ownership: agents own workflows; MCP defines how models expose and consume context.</li>
                                <li>Composability: MCP provides clearer contracts for composition; agents are more flexible at runtime.</li>
                                <li>Security: MCP includes scoping and auth primitives; agents rely on the runtime and integrations.</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Practical evaluation</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Use reproducible benchmarks to measure utility, latency, privacy leakage, and robustness across multi-model workflows. The documentation includes recommended datasets and scripts.</p>

                            <h4 className="font-medium mt-4">Suggested experiments</h4>
                            <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 mt-2 space-y-2">
                                <li>Compare end-to-end task accuracy for an agent vs. MCP pipeline on a compositional reasoning task.</li>
                                <li>Measure latency and throughput for single-hop and multi-hop MCP messages.</li>
                                <li>Evaluate privacy leakage when sharing progressively more context between models.</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Reference Material</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-emerald-600" />
                                    <CardTitle className="text-lg">Papers & Reports</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Curated list of academic and technical reports exploring multi-model composition, agent architectures, and context protocols.</p>
                                <Button size="sm">View Bibliography</Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Clipboard className="h-5 w-5 text-indigo-600" />
                                    <CardTitle className="text-lg">Glossary</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Definitions for common terms: context, capability, scope, agent, runtime, negotiation, and more.</p>
                                <Button size="sm">Open Glossary</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Getting Started</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Quickstart</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Follow the quickstart to run a minimal MCP runtime, register a model, and send/receive context messages.</p>
                            <pre className="p-4 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`# Install
npm install

# Start reference runtime
npm run dev:runtime

# Run sample agent
npm run dev:agent`}</pre>
                            <div className="mt-4 flex gap-3">
                                <Button size="sm">Quickstart</Button>
                                <Button variant="outline" size="sm">Reference Runtime</Button>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Tutorial Series</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Progressive tutorials covering: building agents, authoring MCP adapters, running benchmarks, and deploying hybrid systems.</p>
                            <div className="flex gap-3">
                                <Button size="sm">Start Tutorials</Button>
                                <Button variant="outline" size="sm">See Roadmap</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contribute</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Documentation is community-maintained. Open issues, propose edits, or add new tutorials and benchmarks.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Edit Docs on GitHub</Button>
                        <Button variant="outline" size="lg">Propose Tutorial</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
