
export default function Education() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content text-center space-y-8">
        <p className="font-mono text-gray-600 dark:text-terminal-text/70">
          [user@localhost ~]$ ls -la education/
        </p>
        <div className="space-y-12 text-left max-w-2xl mx-auto text-sm">
          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">University of the South Pacific • Feb 2025 - Feb 2029</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Focused on web development, algorithms, and database systems.</p>
              <p className="terminal-prefix">Completed capstone project on AI-driven task automation.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">Diploma of Information Technology & Networking</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">Fiji National University • April 2017 - May 2018</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Participated in coding club and won regional hackathon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
