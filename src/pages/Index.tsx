
import { Download } from "lucide-react";
import TypingEffect from "../components/TypingEffect";

export default function Index() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content text-left space-y-8">
        <div className="space-y-4">
          <p className="font-mono text-gray-600 dark:text-terminal-text/70">
            [user@localhost ~]$
          </p>
          <h1 className="text-2xl font-semibold terminal-prefix">
            <TypingEffect text="Hi, I'm Leroy Hing" />
          </h1>
          <p className="text-lg text-gray-600 dark:text-terminal-text/90">
            A Full-Stack Developer building elegance through code.
          </p> </div>
        
        <a
          href="/resume.pdf"
          className="inline-flex items-center px-4 py-2 space-x-2 border-2 border-terminal-accent rounded hover:bg-terminal-accent/10 transition-colors duration-200"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}
