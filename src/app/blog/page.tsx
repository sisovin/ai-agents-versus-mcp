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
import { Pencil, Clock, Tags } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Header />

            <div className="container mx-auto px-4 py-16">
                {/* Hero */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <Pencil className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Updates, deep dives, and announcements about AI Agents, the Model
                        Context Protocol, and our research efforts.
                    </p>
                </div>

                {/* Featured Post */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured</h2>
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Pencil className="h-6 w-6 text-indigo-600" />
                                    <CardTitle className="text-xl">Introducing MCP: A Protocol for Model Context</CardTitle>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center space-x-3">
                                    <Clock className="h-4 w-4" />
                                    <span>Aug 12, 2025</span>
                                </div>
                            </div>
                            <CardDescription className="text-sm">
                                A concise overview of the design goals and practical use cases for the Model Context Protocol.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-300">
                                Learn how MCP standardizes context exchange, enabling secure,
                                composable interactions between heterogenous models and services.
                            </p>
                            <div className="mt-6 flex gap-3">
                                <Button size="sm">Read More</Button>
                                <Button variant="outline" size="sm">View Spec</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Recent Posts */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recent Posts</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[{
                            title: 'Evaluating Multi-Model Pipelines',
                            excerpt: 'Benchmarks and metrics to measure collaboration across specialized models.',
                            date: 'Jul 29, 2025',
                            tags: ['benchmarks', 'evaluation']
                        }, {
                            title: 'Safe Context Sharing Patterns',
                            excerpt: 'Design patterns for minimizing sensitive data exposure in shared context.',
                            date: 'Jun 18, 2025',
                            tags: ['security', 'privacy']
                        }, {
                            title: 'Composable Tooling for Agents',
                            excerpt: 'Libraries and patterns to make agent tooling pluggable and testable.',
                            date: 'May 05, 2025',
                            tags: ['tooling', 'agents']
                        }, {
                            title: 'Low-latency Model Messaging',
                            excerpt: 'Techniques to keep multi-model interactions responsive at scale.',
                            date: 'Apr 10, 2025',
                            tags: ['performance']
                        }].map((post) => (
                            <Card key={post.title} className="hover:shadow transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Pencil className="h-5 w-5 text-indigo-600" />
                                            <CardTitle className="text-lg">{post.title}</CardTitle>
                                        </div>
                                        <div className="text-sm text-muted-foreground flex items-center space-x-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Tags className="h-4 w-4" />
                                            <span>{post.tags.join(', ')}</span>
                                        </div>
                                        <Button size="sm">Read</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Explore */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Explore</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Topics</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Browse posts by topic: agents, mcp, benchmarks, tooling, and more.</p>
                            <Button variant="outline" size="sm">View Topics</Button>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Newsletter</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Subscribe for updates about new posts, research, and releases.</p>
                            <Button variant="outline" size="sm">Subscribe</Button>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2">Archive</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Explore older posts and historic releases.</p>
                            <Button variant="outline" size="sm">View Archive</Button>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </div>
    );
}
