
export default function Experience() {
  return (
    <div className="min-h-screen pl-16 flex items-center justify-center">
      <div className="section-content text-center space-y-8">
        <p className="font-mono text-gray-600 dark:text-terminal-text/70">
          [user@localhost ~]$ ls -la experience/
        </p>
        <div className="space-y-12 text-left max-w-2xl mx-auto text-sm">
          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">ICT Support Officer @ Ministry of Health & Medical Services</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">Jan 2025 - Present</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Provided technical support for computers and laptops.</p>
              <p className="terminal-prefix">Administered SQL Server Management Studio (SSMS) for database tasks (PATIS+).</p>
              <p className="terminal-prefix">Supported ASP.NET Core and C# systems by troubleshooting errors.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">ICT Support Officer (Divisional) @ Tetra Tech</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">Apr 2024 - Dec 2024</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Evaluated and implemented upgrades for hardware and software.</p>
              <p className="terminal-prefix">Provided technical reports, conducted Board of Survey for ICT hardware.</p>
              <p className="terminal-prefix">Coordinated and prioritized ICT support tasks to ensure efficient resolution.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">ICT Support Engineer @ Kastel Technologies</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">Jan 2023 - Dec 2023</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Maintained and updated systems/applications, developed security policies.</p>
              <p className="terminal-prefix">Configured routers and switches (via Packet Tracer and PuTTY).</p>
              <p className="terminal-prefix">Designed websites and login pages using HTML/CSS.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">Access Network Technician @ Telecom Fiji</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">Apr 2022 - Nov 2022</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Diagnosed and resolved technical faults, performed temporary fixes</p>
              <p className="terminal-prefix">Configured telecom equipment (e.g., ETX Fibre Routers, PBX systems)</p>
              <p className="terminal-prefix">Performed splicing of fiber optic cables, installed access terminal boxes</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-terminal-accent">IT Support Officer @ Fiji Revenue and Customs Service</h3>
            <p className="text-gray-600 dark:text-terminal-text/70">Dec 2018 - Jun 2019</p>
            <div className="space-y-2">
              <p className="terminal-prefix">Provided technical support to end-users, resolving issues efficiently.</p>
              <p className="terminal-prefix">Optimized system performance, reducing downtime by 30%.</p>
              <p className="terminal-prefix">Monitored and updated IT security protocols to protect company systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
