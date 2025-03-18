
export default function About() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content text-center space-y-8">
        <div className="space-y-4">
          <p className="font-mono text-gray-600 dark:text-terminal-text/70">
            [user@localhost ~]$ cat about.txt
          </p>
          <div className="space-y-4 text-left max-w-2xl mx-auto text-sm">
            <p className="terminal-prefix">
              Full-stack developer with a passion for creating clean, efficient, and user-friendly applications.
            </p>
            <p className="terminal-prefix">
              I specialize in building modern web applications using <span className="text-terminal-accent">JavaScript/TypeScript</span>, <span className="text-terminal-accent">React</span>, and <span className="text-terminal-accent">Node.js</span>.
            </p>
            <p className="terminal-prefix">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
