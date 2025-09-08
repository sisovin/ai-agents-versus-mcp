import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Users, Mail, Github, Linkedin } from "lucide-react";

const team = [
    {
        name: "Sisovin",
        role: "Project Lead",
        bio: "Maintains the MCP spec and leads the reference runtime and research efforts.",
        tags: ["Spec", "Runtime"],
    },
    {
        name: "A. Researcher",
        role: "Research Lead",
        bio: "Designs benchmarks and evaluation methodology for multi-model composition.",
        tags: ["Benchmarks", "Evaluation"],
    },
    {
        name: "B. Engineer",
        role: "Core Engineer",
        bio: "Builds runtimes, SDKs, and integrations for MCP and agent systems.",
        tags: ["SDKs", "Infrastructure"],
    },
    {
        name: "C. Community",
        role: "Community Manager",
        bio: "Runs working groups, onboarding, and contributor programs.",
        tags: ["Community", "Outreach"],
    },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <Users className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Team & Contributors</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Core maintainers, researchers, and community contributors driving the MCP and AI Agents work.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    {team.map((m) => (
                        <Card key={m.name} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-semibold text-lg">{m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</div>
                                    <div>
                                        <CardTitle className="text-lg">{m.name}</CardTitle>
                                        <CardDescription className="text-sm">{m.role}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{m.bio}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {m.tags.map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{t}</span>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm">Profile</Button>
                                    <Button variant="outline" size="sm">Contact</Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contributors & Community</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">We welcome contributions from researchers, practitioners, and students. Contributions include spec proposals, code, benchmarks, tutorials, and docs.</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>How to contribute</CardTitle>
                                <CardDescription className="text-sm">Guides for opening issues, submitting PRs, and joining working groups.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-2">
                                    <li>File an issue describing the proposal or bug.</li>
                                    <li>Open a pull request with tests and documentation.</li>
                                    <li>Join weekly community syncs or working groups.</li>
                                </ul>
                                <div className="mt-4 flex gap-3">
                                    <Button size="sm">Open Issues</Button>
                                    <Button variant="outline" size="sm">Join Working Group</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact</CardTitle>
                                <CardDescription className="text-sm">Get in touch with the team and community leads.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">General inquiries and press: <a className="underline" href="mailto:hello@ai-vs-mcp.org">hello@ai-vs-mcp.org</a></p>
                                <div className="flex gap-3">
                                    <Button size="sm">
                                        <Mail className="mr-2 h-4 w-4" /> Email
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Github className="mr-2 h-4 w-4" /> GitHub
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Join Us</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Interested in contributing? We have mentorship programs, small bounties, and onboarding guides to get you productive quickly.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Apply to Contribute</Button>
                        <Button variant="outline" size="lg">Sponsor</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
