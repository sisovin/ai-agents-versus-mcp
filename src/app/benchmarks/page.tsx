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
import { BarChart2, Database, DownloadCloud, Award } from "lucide-react";

export default function BenchmarksPage() {
    const benchmarks = [
        {
            name: "Compositional Reasoning Suite",
            desc: "Evaluates multi-model reasoning across chained tasks.",
            metrics: ["Accuracy", "Latency", "Context Fidelity"],
            updated: "Aug 2025",
        },
        {
            name: "Low-latency Messaging",
            desc: "Measures round-trip times and throughput for model exchanges.",
            metrics: ["P99 Latency", "Throughput"],
            updated: "Jul 2025",
        },
        {
            name: "Privacy-preserving Sharing",
            desc: "Benchmarks data minimization and leakage across context scopes.",
            metrics: ["Leakage Rate", "Utility"],
            updated: "Jun 2025",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <BarChart2 className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Benchmarks</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Reproducible evaluations and datasets for multi-model systems, agents, and MCP-enabled integrations.
                    </p>
                </section>

                <section className="mb-12">
                    <div className="grid md:grid-cols-3 gap-6">
                        {benchmarks.map((b) => (
                            <Card key={b.name} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-indigo-100 rounded-md">
                                            <Database className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <CardTitle className="text-lg">{b.name}</CardTitle>
                                    </div>
                                    <CardDescription className="mt-2 text-sm">{b.desc}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Metrics: {b.metrics.join(', ')}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-muted-foreground">Updated {b.updated}</div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm">View Results</Button>
                                            <Button size="sm">
                                                <DownloadCloud className="h-4 w-4 mr-2" />
                                                Download
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Evaluation Guidance</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2 flex items-center gap-2"><Award className="h-5 w-5 text-amber-500" /> Best Practices</h3>
                            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
                                <li>Use representative, domain-specific datasets that reflect real composition patterns.</li>
                                <li>Measure both utility and privacy leakage when sharing context.</li>
                                <li>Report latency percentiles (P50, P95, P99) for multi-hop interactions.</li>
                                <li>Provide reproducible scripts and seeds for experiments.</li>
                            </ul>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <h3 className="font-semibold mb-2 flex items-center gap-2"><BarChart2 className="h-5 w-5 text-indigo-600" /> Common Metrics</h3>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                <p className="mb-2"><strong>Accuracy & Utility:</strong> Task-specific scoring for end-to-end workflows.</p>
                                <p className="mb-2"><strong>Latency:</strong> End-to-end response times and per-hop overhead.</p>
                                <p className="mb-2"><strong>Privacy Leakage:</strong> Rate of sensitive attribute inference from shared context.</p>
                                <p className="mb-2"><strong>Robustness:</strong> Degradation under noisy or partial context.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get the Data</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Download benchmark datasets, baseline models, and evaluation scripts to reproduce results.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Download All</Button>
                        <Button variant="outline" size="lg">View On GitHub</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
