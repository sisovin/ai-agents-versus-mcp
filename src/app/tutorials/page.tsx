import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";

const tutorials = [
    {
        title: "MCP Overview: Concepts & Goals",
        youtubeId: "eur8dUO9mvE?si=s6kGWricxN3xEyLm",
        description: "High-level introduction to the Model Context Protocol and design motivations.",
        length: "12:34",
    },
    {
        title: "Building an Agent that Uses MCP",
        youtubeId: "OhI005_aJkA?si=OHEGr6E3rdc7TelG",
        description: "Step-by-step: create an agent, register models, and exchange context via MCP.",
        length: "18:10",
    },
    {
        title: "Benchmarks & Evaluation Walkthrough",
        youtubeId: "aOjgPJ94-aM?si=7A1ULcu_ijaINlOw",
        description: "Reproducing benchmark experiments and interpreting results for multi-model systems.",
        length: "20:45",
    },
];

export default function TutorialsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <Play className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Video Tutorials</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Embedded video tutorials covering MCP, agent design, benchmarks, and hands-on walkthroughs.
                    </p>
                </section>

                <section className="grid gap-8 md:grid-cols-3 mb-16">
                    {tutorials.map((t) => (
                        <Card key={t.youtubeId} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-lg">{t.title}</CardTitle>
                                        <CardDescription className="text-sm">{t.description}</CardDescription>
                                    </div>
                                    <div className="text-sm text-muted-foreground">{t.length}</div>
                                </div>
                            </CardHeader>

                            <CardContent>
                                <AspectRatio ratio={16 / 9}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${t.youtubeId}`}
                                        title={t.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded"
                                    />
                                </AspectRatio>

                                <div className="mt-4 flex gap-3">
                                    <Button size="sm">Open on YouTube</Button>
                                    <Button variant="outline" size="sm">Show Notes</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Want More?</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Provide additional video IDs and descriptions and they'll appear here. We recommend hosting videos on your YouTube channel and embedding by ID.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Request New Tutorial</Button>
                        <Button variant="outline" size="lg">Contribute a Video</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
