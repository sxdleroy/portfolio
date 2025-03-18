
import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content text-center space-y-8">
        <p className="font-mono text-gray-600 dark:text-terminal-text/70">
          [user@localhost ~]$ contact --help
        </p>
        <Card className="max-w-md mx-auto bg-white dark:bg-terminal-bg border-gray-200 dark:border-terminal-text/10">
          <CardContent className="pt-6">
            <div className="space-y-4 text-sm">
              <p className="terminal-prefix flex items-center justify-left gap-2">
                <Mail className="w-4 h-4 text-terminal-accent" />
                <a href="mailto:leroy.hing@gmail.com" className="hover:text-terminal-accent transition-colors">
                 leroy.hing@gmail.com
                </a>
              </p>
              <p className="terminal-prefix flex items-center justify-left gap-2">
                <Github className="w-4 h-4 text-terminal-accent" />
                <a href="https://github.com/sxdleroy" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent transition-colors">
                  github.com/sxdleroy
                </a>
              </p>
              <p className="terminal-prefix flex items-center justify-left gap-2">
                <Linkedin className="w-4 h-4 text-terminal-accent" />
                <a href="https://linkedin.com/in/leroyhing" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent transition-colors">
                  linkedin.com/in/leroyhing
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
