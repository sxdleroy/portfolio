
import { Home, User, Code, Terminal, Briefcase, GraduationCap, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, path: "/", label: "Home" },
  { icon: User, path: "/about", label: "About" },
  { icon: Code, path: "/projects", label: "Projects" },
  { icon: Terminal, path: "/skills", label: "Skills" },
  { icon: Briefcase, path: "/experience", label: "Experience" },
  { icon: GraduationCap, path: "/education", label: "Education" },
  { icon: Mail, path: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const location = useLocation();
  
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center py-8 bg-gray-50 dark:bg-terminal-bg border-r border-gray-200 dark:border-terminal-text/10">
      <nav className="flex flex-col items-center space-y-8">
        {navItems.map(({ icon: Icon, path, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`relative p-2 rounded-lg transition-all duration-200 group ${
                isActive ? "bg-terminal-accent/10" : ""
              }`}
              title={label}
            >
              <Icon className={`nav-icon ${
                isActive ? "text-terminal-accent" : ""
              }`} />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
