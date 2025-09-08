import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { MapPin, BookOpen, Award, Users } from "lucide-react";

export default function CareersPage() {
    const positions = [
        {
            title: "Student Research Intern (MCP)",
            location: "Phnom Penh, Cambodia (Remote-friendly)",
            summary:
                "Work with the research team on benchmarks, datasets, and reproducible experiments related to the Model Context Protocol.",
        },
        {
            title: "Junior Engineer (Agent Tooling)",
            location: "Phnom Penh, Cambodia (Hybrid)",
            summary:
                "Build integrations, SDKs, and tooling for agent runtimes and MCP adapters — ideal for early-career developers.",
        },
        {
            title: "Community & Outreach Assistant",
            location: "Remote (Cambodia preferred)",
            summary:
                "Help run workshops, translate materials, and onboard Cambodian students into projects and internships.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-600 rounded-full">
                            <Users className="h-10 w-10 text-white" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Careers & Student Opportunities</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We welcome Cambodian IT students and early-career technologists to join our efforts to improve AI systems through research, tooling, and community programs.
                    </p>
                </section>

                <section className="mb-10 grid gap-6 md:grid-cols-3">
                    {positions.map((p) => (
                        <Card key={p.title} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-md">
                                        <BookOpen className="h-5 w-5 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg">{p.title}</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm">{p.location}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{p.summary}</p>
                                <div className="flex gap-3">
                                    <Button size="sm">Apply</Button>
                                    <Button variant="outline" size="sm">Learn More</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why join us</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="h-6 w-6 text-amber-500" />
                                <h3 className="font-semibold">Hands-on learning</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Work on real protocols, implement experiments, and learn best practices for reproducible research.</p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="h-6 w-6 text-green-600" />
                                <h3 className="font-semibold">Local impact</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Support Cambodian students to build skills and participate in global AI research and open-source projects.</p>
                        </div>

                        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <BookOpen className="h-6 w-6 text-indigo-600" />
                                <h3 className="font-semibold">Mentorship & Stipends</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Mentorship from researchers and engineers, and small stipends for selected interns.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to apply</h2>
                    <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 dark:text-gray-300">
                        <li>Prepare a short CV and a one-paragraph statement of interest (English or Khmer).</li>
                        <li>Include links to projects, GitHub, or school coursework if available.</li>
                        <li>Send your application to <a className="underline" href="mailto:hello@ai-vs-mcp.org">hello@ai-vs-mcp.org</a> with subject "Careers - &lt;Role&gt;".</li>
                        <li>Selected applicants will be invited to an interview and a short technical assignment.</li>
                    </ol>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Questions?</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Email us or join the community channels to ask about internships, projects, or curriculum mentorships.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Email hello@ai-vs-mcp.org</Button>
                        <Button variant="outline" size="lg">Join Community</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
