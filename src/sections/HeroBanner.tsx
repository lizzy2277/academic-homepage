import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GraduationCap, Mail, BookOpen } from 'lucide-react';

export default function HeroBanner() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out', delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full" style={{ height: '380px' }}>
      {/* Background banner image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/book4.jpg)`,
          filter: 'brightness(0.75)',
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Profile card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={cardRef}
          className="flex items-center gap-6 px-8 py-6 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            border: '1px solid rgba(255,255,255,0.6)',
          }}
        >
          {/* Avatar */}
          <div className="shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/avatar.jpg`}
              alt="刘欢"
              className="w-28 h-28 rounded-full object-cover border-3 border-white shadow-md"
              style={{ borderWidth: '3px' }}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-semibold text-[#222]">刘欢 | 博士</h1>
            <p className="text-[14px] text-[#555] flex items-center gap-1.5">
              <GraduationCap size={15} className="text-[#888]" />
              东南大学 化学化工学院
            </p>
            <p className="text-[13px] text-[#888]">
              材料与化工专业 | 博士研究生
            </p>
            <p className="text-[13px] text-[#888] flex items-center gap-1.5">
              <Mail size={13} className="text-[#888]" />
              lhchem97 [at] 163.com
            </p>
            <p className="text-[12px] text-[#999] mt-0.5">
              研究方向：电化学界面动态调控与第一性原理模拟计算
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#555] hover:bg-[var(--link-blue)] hover:text-white transition-all duration-200"
                title="Google Scholar"
              >
                <BookOpen size={15} />
              </a>
              <a
                href="mailto:lhchem97@163.com"
                className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#555] hover:bg-[#ea4335] hover:text-white transition-all duration-200"
                title="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
