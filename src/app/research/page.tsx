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
import { BookOpen, Search, Lightbulb, Layers } from "lucide-react";

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <div className="container mx-auto px-4 py-16">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-sky-600 rounded-full">
                            <BookOpen className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Research
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Exploring advances in autonomous systems, model interoperability,
                        and the Model Context Protocol — papers, projects, and resources
                        from our team and collaborators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-3">
                            View Publications
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                            Browse Projects
                        </Button>
                    </div>
                </div>

                {/* Featured Publications */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Featured Publications
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <Lightbulb className="h-6 w-6 text-amber-500" />
                                    <CardTitle className="text-lg">Contextual Systems</CardTitle>
                                </div>
                                <CardDescription className="text-sm">
                                    Novel techniques for sharing model context across heterogeneous
                                    models.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    A deep dive into representation formats, privacy-preserving
                                    sharing, and evaluation metrics for composable model systems.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <Layers className="h-6 w-6 text-purple-600" />
                                    <CardTitle className="text-lg">Multi-Model Orchestration</CardTitle>
                                </div>
                                <CardDescription className="text-sm">
                                    Scheduling, routing, and reliability strategies for model
                                    pipelines.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Techniques and benchmarks for orchestrating specialized models
                                    into robust workflows with low latency and high throughput.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <Search className="h-6 w-6 text-green-600" />
                                    <CardTitle className="text-lg">Evaluation & Metrics</CardTitle>
                                </div>
                                <CardDescription className="text-sm">
                                    Practical benchmarks for compositional reasoning and
                                    collaboration-aware evaluation.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Proposals for scoring multi-model solutions and measuring the
                                    value of shared context in downstream tasks.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Ongoing Projects */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Ongoing Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">MCP Reference Implementation</CardTitle>
                                <CardDescription className="text-sm">Open-source core runtime</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    A reference runtime demonstrating secure context exchange,
                                    plugin support, and monitoring tools for deployed systems.
                                </p>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm">View Repo</Button>
                                    <Button size="sm">Join Alpha</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-lg">Benchmarks & Tooling</CardTitle>
                                <CardDescription className="text-sm">Reproducible evaluations</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    Building datasets, baseline model suites, and tooling to make
                                    reproducible multi-model research easier for the community.
                                </p>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm">Explore Datasets</Button>
                                    <Button size="sm">Contribute</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Resources */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Datasets</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Curated benchmarks for compositional tasks and context-rich evaluations.</p>
                            <Button variant="outline" size="sm">Browse</Button>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Tools</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Libraries, monitors, and adapters for integrating MCP into your stack.</p>
                            <Button variant="outline" size="sm">Get Tools</Button>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Community</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Mailing lists, discussion forums, and working groups for researchers.</p>
                            <Button variant="outline" size="sm">Join</Button>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
                    <p className="text-lg mb-8 opacity-90">Collaborate on research, contribute to the spec, or sponsor reproducible benchmarks.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-3">Contribute</Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-3">Contact Us</Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
