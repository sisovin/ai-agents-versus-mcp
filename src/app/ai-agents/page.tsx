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
import { Bot, Brain, Zap, Shield, Users, Cpu } from "lucide-react";

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Bot className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the power of autonomous AI systems that can think, learn,
            and act independently to solve complex problems and automate
            workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Capabilities
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Examples
            </Button>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">
                  Autonomous Decision Making
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Independent reasoning and problem-solving
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                AI agents can analyze situations, make decisions, and take
                actions without constant human supervision, using advanced
                reasoning capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-yellow-600" />
                <CardTitle className="text-2xl">Real-time Adaptation</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Dynamic learning and adjustment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously learn from interactions and adapt their behavior to
                improve performance and handle new scenarios effectively.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-600" />
                <CardTitle className="text-2xl">Safe & Reliable</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Built-in safety mechanisms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Designed with robust safety protocols and ethical guidelines to
                ensure responsible AI behavior in all interactions.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl">
                  Multi-Agent Collaboration
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Coordinated team intelligence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Multiple AI agents can work together, sharing knowledge and
                coordinating actions to solve complex, multi-faceted problems.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Cpu className="h-8 w-8 text-red-600" />
                <CardTitle className="text-2xl">
                  Scalable Architecture
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Enterprise-ready deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Built to scale from individual tasks to enterprise-wide
                automation with robust infrastructure and monitoring
                capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-indigo-600" />
                <CardTitle className="text-2xl">Natural Interaction</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Human-like communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Communicate naturally through text, voice, or other interfaces,
                making AI agents accessible to users of all technical levels.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Real-World Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold mb-2">Business Automation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Streamline workflows, manage schedules, and automate routine
                tasks
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="font-semibold mb-2">Customer Service</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                24/7 support, intelligent routing, and personalized assistance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Data Analysis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Intelligent insights, pattern recognition, and predictive
                analytics
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Personal Assistant</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Task management, scheduling, and intelligent recommendations
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose AI Agents?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-2 mt-1">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Increased Efficiency
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automate repetitive tasks and focus human effort on
                    high-value activities that require creativity and strategic
                    thinking.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-2 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reduced Errors</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Minimize human error through consistent, rule-based
                    processing and intelligent decision-making algorithms.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-full p-2 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Provide continuous service without breaks, ensuring your
                    business operations never stop.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 rounded-full p-2 mt-1">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Intelligent Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Continuously improve performance through machine learning
                    and adaptation to new scenarios and requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 rounded-full p-2 mt-1">
                  <Cpu className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cost Effective</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reduce operational costs while increasing output and
                    maintaining high quality standards across all processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 rounded-full p-2 mt-1">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Scalable Solutions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Easily scale from handling individual tasks to managing
                    enterprise-wide operations as your needs grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Deploy AI Agents?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your business with intelligent automation and autonomous
            AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
