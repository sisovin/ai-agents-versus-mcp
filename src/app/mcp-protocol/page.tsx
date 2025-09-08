import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Brain, Cpu, Shield, Users, Zap } from "lucide-react";

export default function MCPProtocolPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
            <Header />

            {/* Hero */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-600 rounded-full">
                            <Bot className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Model Context Protocol (MCP)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        MCP standardizes how models exchange context and capabilities, enabling
                        secure, composable, and interoperable model integrations across
                        systems and teams.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-3">
                            Learn the Protocol
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                            Read Spec
                        </Button>
                    </div>
                </div>

                {/* Core Principles */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <Brain className="h-8 w-8 text-green-600" />
                                <CardTitle className="text-2xl">Context First</CardTitle>
                            </div>
                            <CardDescription className="text-lg">Shared model context</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                MCP defines a consistent way to represent and share contextual
                                information so models can collaborate reliably and safely.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <Cpu className="h-8 w-8 text-amber-600" />
                                <CardTitle className="text-2xl">Composable</CardTitle>
                            </div>
                            <CardDescription className="text-lg">Modular integrations</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Build pipelines of models and tools that interoperate via a
                                common protocol without brittle, custom glue code.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <Shield className="h-8 w-8 text-green-600" />
                                <CardTitle className="text-2xl">Secure by Design</CardTitle>
                            </div>
                            <CardDescription className="text-lg">Privacy & safety</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                MCP includes conventions for scoping, authorization, and the
                                safe handling of sensitive context data.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <Users className="h-8 w-8 text-purple-600" />
                                <CardTitle className="text-2xl">Interoperable</CardTitle>
                            </div>
                            <CardDescription className="text-lg">Cross-model collaboration</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Different model types and providers can exchange context and
                                work together inside MCP-compliant systems.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <Zap className="h-8 w-8 text-yellow-600" />
                                <CardTitle className="text-2xl">Low Latency</CardTitle>
                            </div>
                            <CardDescription className="text-lg">Efficient messaging</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Designed to minimize overhead so multi-model workflows remain
                                responsive at scale.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <Bot className="h-8 w-8 text-indigo-600" />
                                <CardTitle className="text-2xl">Extensible</CardTitle>
                            </div>
                            <CardDescription className="text-lg">Pluggable features</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Extend the protocol with custom capabilities while remaining
                                compatible with the core specification.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Use Cases */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        Use Cases
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="font-semibold mb-2">Multi-Model Orchestration</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Coordinate specialized models to solve complex tasks together.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="font-semibold mb-2">Secure Context Sharing</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Share only the necessary context between models with audit
                                trails and access controls.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">⚙️</span>
                            </div>
                            <h3 className="font-semibold mb-2">Composable Pipelines</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Connect models and tooling into reusable, auditable flows.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="font-semibold mb-2">Real-time Assistance</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Deliver contextualized, low-latency model responses for live
                                applications.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Adopt MCP Today</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Start building interoperable model systems that share context
                        securely and efficiently.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                            Read the Spec
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                            Join the Community
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
