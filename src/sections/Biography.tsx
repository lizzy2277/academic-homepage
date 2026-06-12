import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { User, Star, GraduationCap } from 'lucide-react';

const interests = [
  {
    field: 'CO₂ 电催化还原',
    papers: [
      { title: '[Angew.Chem]', link: '#' },
      { title: '[Adv.Energy Mater]', link: '#' },
      { title: '[ACS Catal]', link: '#' },
    ],
  },
  {
    field: '电化学界面调控',
    papers: [
      { title: '[Adv.Energy Mater-2]', link: '#' },
      { title: '[Adv.Sci]', link: '#' },
    ],
  },
  {
    field: '第一性原理计算',
    papers: [
      { title: '[DFT-Calcs]', link: '#' },
      { title: '[AIMD]', link: '#' },
    ],
  },
  {
    field: '锌空气电池',
    papers: [
      { title: '[Zn-Air]', link: '#' },
      { title: '[Battery]', link: '#' },
    ],
  },
];

const education = [
  {
    school: '东南大学',
    degree: '材料与化工 博士',
    period: '2023.03 - 至今',
    mentor: '化学化工学院',
  },
  {
    school: '郑州大学',
    degree: '物理化学 硕士',
    period: '2018.09 - 2021.06',
    mentor: '化学学院',
  },
  {
    school: '河南大学',
    degree: '材料科学与工程 学士',
    period: '2014.09 - 2018.06',
    mentor: '',
  },
];

export default function Biography() {
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
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="biography" ref={sectionRef} className="scroll-mt-16">
      {/* About */}
      <div className="animate-in mb-8">
        <SectionTitle icon={<User size={18} />} title="About" />
        <p className="text-[15px] text-[#444] leading-[1.8]">
          我是东南大学化学化工学院材料与化工专业的博士研究生，师从
          <a href="#">余慧军教授</a>和
          <a href="#">张一伟教授</a>，
          研究方向为<strong>电化学界面动态调控与第一性原理模拟计算</strong>。
          近五年以第一作者/共一作者身份在
          <em>Angewandte Chemie</em>、<em>Advanced Energy Materials</em>、<em>ACS Catalysis</em>
          等国际顶级期刊发表论文 5 篇，累计影响因子 &gt;100。
          主持江苏省研究生科研与实践计划和东南大学博士研究生创新能力提升计划两项科研项目。
          我一直对电催化、能源材料与计算化学的交叉领域保持高度热情，如果你对这些方向感兴趣，欢迎随时
          <a href="mailto:lhchem97@163.com">与我联系</a>。
        </p>
      </div>

      {/* Interests & Education - two columns */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Interests */}
        <div className="animate-in md:w-1/2">
          <SectionTitle icon={<Star size={18} />} title="Interests" />
          <ul className="space-y-3">
            {interests.map((item) => (
              <li key={item.field}>
                <span className="text-[15px] text-[#333] font-medium">{item.field}</span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                  {item.papers.map((paper) => (
                    <a
                      key={paper.title}
                      href={paper.link}
                      className="text-[13px] text-[var(--link-blue)] hover:underline"
                    >
                      {paper.title}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="animate-in md:w-1/2">
          <SectionTitle icon={<GraduationCap size={18} />} title="Education" />
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.school}>
                <p className="text-[15px] font-medium text-[#333]">{edu.school}</p>
                <p className="text-[14px] text-[#555]">
                  {edu.degree}，{edu.period}
                </p>
                {edu.mentor && (
                  <p className="text-[13px] text-[#888]">{edu.mentor}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-semibold text-[#222] mb-4 pb-2 border-b border-[#e5e7eb]">
      <span className="text-[var(--section-icon)]">{icon}</span>
      {title}
    </h2>
  );
}
