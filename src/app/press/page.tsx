import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileText, Users, Camera } from "lucide-react";

const pressReleases = [
    { title: "MCP Reference Runtime Released", date: "Aug 2025", summary: "Open-source runtime for secure context exchange and plugin-based integrations." },
    { title: "Benchmarks for Multi-Model Systems", date: "Jul 2025", summary: "Published benchmark suites for compositional reasoning and latency." },
];

export default function PressPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <FileText className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">Press & Media</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Announcements, press releases, and media assets for journalists and partners.</p>
                </section>

                <section className="grid gap-6 md:grid-cols-2 mb-12">
                    {pressReleases.map((p) => (
                        <Card key={p.title} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-indigo-600" />
                                    <CardTitle className="text-lg">{p.title}</CardTitle>
                                </div>
                                <div className="text-sm text-muted-foreground">{p.date}</div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{p.summary}</p>
                                <div className="flex gap-3">
                                    <Button size="sm">Read</Button>
                                    <Button variant="outline" size="sm">Download Assets</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Media Assets</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Camera className="h-5 w-5 text-indigo-600" />
                                <h3 className="font-semibold">Logos</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Download high-resolution logos and brand guidelines.</p>
                            <Button variant="outline" size="sm">Download</Button>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="h-5 w-5 text-indigo-600" />
                                <h3 className="font-semibold">Team Photos</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Pack of portraits and group photos for press use.</p>
                            <Button variant="outline" size="sm">Download</Button>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <FileText className="h-5 w-5 text-indigo-600" />
                                <h3 className="font-semibold">Press Kit</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">One-page summary, factsheet, and contact information for journalists.</p>
                            <Button variant="outline" size="sm">Download</Button>
                        </div>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact for Press</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">For media inquiries, please contact our communications lead at <a className="underline" href="mailto:press@ai-vs-mcp.org">press@ai-vs-mcp.org</a>.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Request Interview</Button>
                        <Button variant="outline" size="lg">Media Assets</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
