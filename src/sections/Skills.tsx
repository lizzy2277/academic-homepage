import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FlaskConical, Cpu, Languages, Award, ScrollText } from 'lucide-react';

const skills = [
  {
    icon: <FlaskConical size={18} />,
    title: 'Experimental Skills',
    items: [
      '物理化学、电化学、电池器件、有机合成',
      '原位 FTIR、原位 Raman、SEM/TEM、AFM',
      '气相色谱、电化学工作站、质谱仪',
      '原位装置改装、锌电池组装、高分子合成',
      '光刻芯片技术、实验室平台搭建管理',
    ],
  },
  {
    icon: <Cpu size={18} />,
    title: 'Computational Skills',
    items: [
      '密度泛函理论 (DFT)',
      '从头计算分子动力学 (AIMD)',
      '机器学习与 AI 驱动方法',
      'Materials Studio、VASP、CP2k',
      'deepmd-kit、自旋电荷密度分析',
      '态密度、分子轨道、过渡态搜索',
    ],
  },
  {
    icon: <Languages size={18} />,
    title: 'Languages',
    items: [
      'CET-6',
      '精读英文学术文章、著作',
      '独立完成英文文章的查阅及撰写',
    ],
  },
];

const honors = [
  '三好研究生',
  '吴健雄女学人奖',
  '优秀实习生',
  '国家创新项目金奖',
  '英语演讲竞赛一等奖',
  '一等学业奖学金',
  '国家级志愿者',
  '优秀毕业生',
];

const patents = [
  '一种含有噻吩衍生物的液晶组合物及其应用 (CN2022109275235)',
  '一种改进 MiniLED 巨量转移的工艺 (CN115206247B)',
  '一种含四氟化茚衍生物的液晶组合物及其应用 (CN115185123B)',
  '一种含二苯并呋喃衍生物的液晶组合物及其应用 (CN218122416U)',
  '一种含苯并噻吩衍生物的液晶组合物及其应用 (CN115305096B)',
  '一种含四氢呋喃衍生物的液晶组合物及其应用 (CN115287083B)',
];

export default function Skills() {
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
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="skills" ref={sectionRef} className="scroll-mt-16 mt-10">
      {/* Skills */}
      <div className="animate-in mb-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[#222] mb-5 pb-2 border-b border-[#e5e7eb]">
          <FlaskConical size={18} className="text-[var(--section-icon)]" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-4 rounded-lg border border-[#e5e7eb]"
              style={{ background: '#fafbfc' }}
            >
              <h3 className="flex items-center gap-2 text-[14px] font-semibold text-[#333] mb-3">
                <span className="text-[var(--link-blue)]">{skill.icon}</span>
                {skill.title}
              </h3>
              <ul className="space-y-1.5">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-[13px] text-[#555] leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Honors & Awards */}
      <div className="animate-in mb-8">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[#222] mb-4 pb-2 border-b border-[#e5e7eb]">
          <Award size={18} className="text-[var(--section-icon)]" />
          Honors & Awards
        </h2>
        <div className="flex flex-wrap gap-2">
          {honors.map((honor) => (
            <span
              key={honor}
              className="px-3 py-1.5 text-[13px] text-[#444] rounded-full border border-[#e5e7eb]"
              style={{ background: '#f8f9fa' }}
            >
              {honor}
            </span>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div className="animate-in">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[#222] mb-4 pb-2 border-b border-[#e5e7eb]">
          <ScrollText size={18} className="text-[var(--section-icon)]" />
          Patents
        </h2>
        <ol className="space-y-2">
          {patents.map((patent, idx) => (
            <li key={idx} className="text-[13px] text-[#555] leading-relaxed">
              <span className="text-[#888] mr-2">{idx + 1}.</span>
              {patent}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
