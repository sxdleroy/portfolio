
export default function Skills() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content text-center space-y-8">
        <p className="font-mono text-gray-600 dark:text-terminal-text/70">
          [user@localhost ~]$ ls -la skills/
        </p>
        <div className="space-y-8 text-left max-w-2xl mx-auto text-sm">
          <div className="space-y-2">
            <p className="terminal-prefix">
              Frontend: <span className="text-terminal-accent">React - Next.js - Tailwind - JavaScript</span>
            </p>
            <p className="terminal-prefix">
              Backend: <span className="text-terminal-accent">Node.js - Python - Supabase - Express</span>
            </p>
            <p className="terminal-prefix">
              Tools: <span className="text-terminal-accent">Git - Docker - Linux - VS Code</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
