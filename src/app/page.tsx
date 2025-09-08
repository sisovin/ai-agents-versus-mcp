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

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            AI Agents
            <span className="text-blue-600 dark:text-blue-400"> vs </span>
            MCP
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Exploring the battle between traditional AI agents and the Model
            Context Protocol. Discover which approach will shape the future of
            AI interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Comparison
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                🤖 AI Agents
              </CardTitle>
              <CardDescription className="text-lg">
                Traditional autonomous AI systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Explore how traditional AI agents work, their capabilities,
                limitations, and current implementations in the market.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">
                🔗 MCP Protocol
              </CardTitle>
              <CardDescription className="text-lg">
                Model Context Protocol approach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Discover the innovative Model Context Protocol and how it's
                revolutionizing AI model interactions and context management.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 dark:text-green-400">
                ⚡ Comparison
              </CardTitle>
              <CardDescription className="text-lg">
                Head-to-head analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Deep dive into performance metrics, use cases, and real-world
                applications of both approaches.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Why This Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                85%
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                of enterprises are adopting AI agents
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                2024
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Year MCP protocol was introduced
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                Future
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                The next evolution of AI interactions
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join the conversation and help shape the future of AI technology.
          </p>
          <Button size="lg" className="text-lg px-12 py-4">
            Get Started
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
