import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Briefcase, Mic, FileText, Award } from 'lucide-react';

const projects = [
  {
    period: '2024.06 - 2026.06',
    title: '江苏省研究生科研与实践计划',
    org: 'SJCX24_0073',
    orgLink: '#',
    description: '主持，负责项目申请、方案设计及实施、结题汇报，成功获得项目资助。',
    icon: <FileText size={16} />,
  },
  {
    period: '2024.06 - 2026.06',
    title: '东南大学博士研究生创新能力提升计划',
    org: 'CXJH_SEU 24171',
    orgLink: '#',
    description: '主持，负责项目申请、方案设计及实施、结题汇报，成功获得项目资助。',
    icon: <Award size={16} />,
  },
];

const conferences = [
  {
    period: '2025.08.01 - 08.03',
    title: '中国化学会第四届能源化学青年论坛',
    org: '特邀报告',
    orgLink: '#',
    description: '报告题目：动态调控铜催化剂界面价态促进 CO₂ 电还原',
    icon: <Mic size={16} />,
  },
  {
    period: '2025.05.09 - 05.13',
    title: '中国化学会第一届全国表界面科学会议',
    org: '墙报展示',
    orgLink: '#',
    description: '表界面催化专题墙报（06-P-007）',
    icon: <Mic size={16} />,
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.animate-in'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="experiences" ref={sectionRef} className="scroll-mt-16 mt-10">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-[#222] mb-6 pb-2 border-b border-[#e5e7eb]">
        <Briefcase size={18} className="text-[var(--section-icon)]" />
        Experiences
      </h2>

      {/* Research Projects */}
      <div className="animate-in mb-8">
        <h3 className="text-[14px] font-semibold text-[#555] mb-3 uppercase tracking-wide">
          Research Projects
        </h3>
        <div className="space-y-0">
          {projects.map((proj, index) => (
            <div key={proj.period + proj.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[#555]"
                  style={{ background: '#f0f0f0' }}
                >
                  {proj.icon}
                </div>
                {index < projects.length - 1 && (
                  <div className="w-px flex-1 bg-[#e5e7eb] my-1" />
                )}
              </div>
              <div className="pb-5">
                <p className="text-[13px] text-[#888] font-medium mb-0.5">{proj.period}</p>
                <p className="text-[15px] font-medium text-[#222]">
                  {proj.title}
                  <span className="text-[var(--link-blue)] font-normal">
                    {' '}(@ {proj.org})
                  </span>
                </p>
                <p className="text-[14px] text-[#555] mt-1 leading-relaxed">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conference Presentations */}
      <div className="animate-in">
        <h3 className="text-[14px] font-semibold text-[#555] mb-3 uppercase tracking-wide">
          Conference Presentations
        </h3>
        <div className="space-y-0">
          {conferences.map((conf, index) => (
            <div key={conf.period + conf.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[#555]"
                  style={{ background: '#f0f0f0' }}
                >
                  {conf.icon}
                </div>
                {index < conferences.length - 1 && (
                  <div className="w-px flex-1 bg-[#e5e7eb] my-1" />
                )}
              </div>
              <div className="pb-5">
                <p className="text-[13px] text-[#888] font-medium mb-0.5">{conf.period}</p>
                <p className="text-[15px] font-medium text-[#222]">
                  {conf.title}
                  <span className="text-[var(--link-blue)] font-normal">
                    {' '}({conf.org})
                  </span>
                </p>
                <p className="text-[14px] text-[#555] mt-1 leading-relaxed">{conf.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
