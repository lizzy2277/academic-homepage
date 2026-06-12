import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Biography', id: 'biography' },
    { label: 'Experiences', id: 'experiences' },
    { label: 'Publications', id: 'publications' },
    { label: 'Skills', id: 'skills' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-center transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
        borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-[14px] font-medium text-[#333] hover:text-[var(--link-blue)] transition-colors duration-200 cursor-pointer bg-transparent border-none"
            style={{ textDecoration: 'none' }}
          >
            {item.label}
          </button>
        ))}
        <a
          href="mailto:lhchem97@163.com"
          className="text-[14px] font-medium text-[#333] hover:text-[var(--link-blue)] transition-colors duration-200"
          style={{ textDecoration: 'none' }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
