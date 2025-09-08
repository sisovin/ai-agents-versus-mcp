import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg">AI vs MCP</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Exploring the future of AI interactions through comprehensive
              analysis of traditional agents and the Model Context Protocol.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Icons.twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Icons.gitHub className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Compare Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Compare</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ai-agents"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Agents Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/mcp-protocol"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  MCP Protocol
                </Link>
              </li>
              <li>
                <Link
                  href="/comparison"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Head-to-Head
                </Link>
              </li>
              <li>
                <Link
                  href="/benchmarks"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Performance Benchmarks
                </Link>
              </li>
              <li>
                <Link
                  href="/use-cases"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/research"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Research Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <p>&copy; 2024 AI vs MCP. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Icons.react className="h-4 w-4" />
            <span>&</span>
            <Icons.tailwind className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
