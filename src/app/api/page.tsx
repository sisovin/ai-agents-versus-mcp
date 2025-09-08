import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Code, Server, Key, Database } from "lucide-react";

export default function APIPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Header />

            <main className="container mx-auto px-4 py-16">
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-indigo-600 rounded-full">
                            <Server className="h-10 w-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        HTTP API endpoints, examples, and SDK references for interacting with the MCP runtime, agents, and benchmark services.
                    </p>
                </section>

                <section className="grid gap-6 md:grid-cols-2 mb-12">
                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Code className="h-5 w-5 text-indigo-600" />
                                <CardTitle className="text-lg">Authentication</CardTitle>
                            </div>
                            <CardDescription className="mt-2 text-sm">API keys and scoped tokens for secure access.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">All API requests require an Authorization header with a bearer token. Tokens can be scoped to specific resources and limited by lifetime.</p>
                            <pre className="p-4 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`curl -H "Authorization: Bearer $API_KEY" https://api.example.com/v1/models`}</pre>
                            <div className="mt-4">
                                <Button size="sm">Manage API Keys</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <Database className="h-5 w-5 text-green-600" />
                                <CardTitle className="text-lg">Rate Limits & Quotas</CardTitle>
                            </div>
                            <CardDescription className="mt-2 text-sm">Per-key request limits and usage reporting.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Standard rate limits are applied per API key. Contact us to increase quotas for production workloads. Usage endpoints return current consumption and billing-relevant metrics.</p>
                            <div className="flex gap-3">
                                <Button size="sm">View Usage</Button>
                                <Button variant="outline" size="sm">Request Higher Quota</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Core Endpoints</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Server className="h-5 w-5 text-indigo-600" />
                                    <CardTitle className="text-lg">GET /v1/models</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm">List available models and capabilities.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Response includes model id, provider, supported capabilities, and metadata tags.</p>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`GET https://api.example.com/v1/models
Authorization: Bearer $API_KEY`}</pre>
                                <p className="mt-3 text-sm">Example (fetch):</p>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`const res = await fetch('/api/models', { headers: { Authorization: 'Bearer ' + API_KEY } });
const models = await res.json();`}</pre>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Code className="h-5 w-5 text-amber-600" />
                                    <CardTitle className="text-lg">POST /v1/context/send</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm">Send context to a target model or runtime channel.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Request body contains a context envelope, scope, and optional attachments. The response returns an acknowledgement and message id.</p>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`POST https://api.example.com/v1/context/send
Content-Type: application/json
Authorization: Bearer $API_KEY

{ "target": "model:summary:v1", "scope": "project:123", "context": { ... } }`}</pre>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Key className="h-5 w-5 text-red-600" />
                                    <CardTitle className="text-lg">POST /v1/auth/token</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm">Exchange credentials for scoped tokens.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Use this endpoint for short-lived tokens, service-to-service auth, or delegated scopes.</p>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`POST https://api.example.com/v1/auth/token
Content-Type: application/json

{ "grant_type": "client_credentials", "client_id": "...", "client_secret": "..." }`}</pre>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Database className="h-5 w-5 text-teal-600" />
                                    <CardTitle className="text-lg">GET /v1/usage</CardTitle>
                                </div>
                                <CardDescription className="mt-2 text-sm">Retrieve usage and billing metrics for your API key.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Returns daily usage, request counts, and cost estimates in JSON.</p>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`GET https://api.example.com/v1/usage
Authorization: Bearer $API_KEY`}</pre>
                            </CardContent>
                        </Card>

                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">SDKs & Examples</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Code className="h-5 w-5 text-indigo-600" />
                                    <CardTitle className="text-lg">JavaScript</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`import fetch from 'node-fetch';

const res = await fetch('https://api.example.com/v1/context/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + API_KEY },
  body: JSON.stringify({ target: 'model:summary:v1', scope: 'project:123', context: {} })
});
`}</pre>
                                <div className="mt-3">
                                    <Button size="sm">View JS SDK</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Code className="h-5 w-5 text-green-600" />
                                    <CardTitle className="text-lg">Python</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`import requests

resp = requests.post('https://api.example.com/v1/context/send', json={...}, headers={ 'Authorization': f'Bearer {API_KEY}' })
`}</pre>
                                <div className="mt-3">
                                    <Button size="sm">View Python SDK</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Code className="h-5 w-5 text-teal-600" />
                                    <CardTitle className="text-lg">Go</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <pre className="p-3 bg-gray-100 dark:bg-gray-900 rounded text-sm overflow-auto">{`// example using net/http
req, _ := http.NewRequest("POST", "https://api.example.com/v1/context/send", bytes.NewBuffer(jsonBytes))
req.Header.Set("Authorization", "Bearer "+API_KEY)
`}</pre>
                                <div className="mt-3">
                                    <Button size="sm">View Go SDK</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Support & Feedback</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Report issues, request new endpoints, or ask for expanded examples. API documentation is community-driven and updated alongside the runtime.</p>
                    <div className="flex gap-4 justify-center">
                        <Button size="lg">Open an Issue</Button>
                        <Button variant="outline" size="lg">Request Feature</Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
