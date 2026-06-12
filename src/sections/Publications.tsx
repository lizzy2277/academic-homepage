import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FileText, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'Bottom-up Growth of Convex Sphere with Adjustable Cu(0)/Cu(I) Interfaces for Effective C₂ Production from CO₂ Electroreduction',
    authors: 'Huan Liu, Huijun Yu*, Yiwei Zhang*, et al.',
    venue: 'Angewandte Chemie International Edition, 2024, e202404123',
    details: 'Q1 Top, IF=16.6, 高被引论文',
    paperLink: '#',
    highlight: true,
    firstAuthor: true,
  },
  {
    title: 'Adjustable Selectivity for CO₂ Electroreduction to Ethylene or Ethanol by Regulating Interphases between Copper and Tin Oxides',
    authors: 'Huan Liu, Huijun Yu*, Yiwei Zhang*, Li Sun*, et al.',
    venue: 'Advanced Energy Materials, 2025, 2405658',
    details: 'Q1 Top, IF=25.8',
    paperLink: '#',
    highlight: true,
    firstAuthor: true,
  },
  {
    title: 'Surface Phosphorus-induced CoO Nanoparticles Coupling to Monolithic Carbon for Efficient Air Electrode of Quasi-solid-state Zn-air Batteries',
    authors: 'Huan Liu, et al.',
    venue: 'Advanced Science, 2021, 8(19), 2101314',
    details: 'Q1 Top, IF=17.8',
    paperLink: '#',
    highlight: false,
    firstAuthor: true,
  },
  {
    title: 'Confined CuS Based Nanoreactors to Steer Product Redistribution from Formate to Ethanol via Regulating *CO/*H Balance in CO₂ Electroreduction',
    authors: 'Huan Liu, Huijun Yu*, Yiwei Zhang*, Li Sun*, et al.',
    venue: 'ACS Catalysis, 2026, in revision',
    details: 'Q1 Top, IF=15.6',
    paperLink: '#',
    highlight: true,
    firstAuthor: true,
  },
  {
    title: 'Atomic Gallium Enables Programmable Proton Switch for Selective Ethylene Production from CO₂ Electroreduction',
    authors: 'Huan Liu, Huijun Yu*, et al.',
    venue: 'Advanced Energy Materials, 2026, in revision',
    details: 'Q1 Top, IF=15.6',
    paperLink: '#',
    highlight: true,
    firstAuthor: true,
  },
  {
    title: 'Mg-engineered CuO/CuxMg₁₋ₓAl₂O₄ Catalysts for High Ethylene Selectivity in CO₂ Electroreduction',
    authors: 'Jingxin Tantai, Huan Liu (co-first), et al.',
    venue: 'Applied Surface Science, 2026, 728, 166153',
    details: 'Q1, IF=6.3, 共同一作',
    paperLink: '#',
    highlight: false,
    firstAuthor: false,
  },
  {
    title: 'In(OH)₃-modified CuO Nanosheets for CO₂ Electroreduction to Promote C₂ Products and Inhibit H₂',
    authors: 'Jiaxin Fei, Huan Liu (co-first), et al.',
    venue: 'Applied Surface Science, 2025, 703, 143621',
    details: 'Q1, IF=6.3, 共同一作',
    paperLink: '#',
    highlight: false,
    firstAuthor: false,
  },
  {
    title: 'Synergy of Electron-Deficient and Photosensitive Groups in 3D Covalent Organic Frameworks for Metal-Free Photo-Coupled Electrocatalytic CO₂ Reduction',
    authors: 'Chenghan Yang, Huan Liu, et al.',
    venue: 'CCS Chemistry, 2025, 8, 1495-1505',
    details: 'Q1 Top, IF=9.9',
    paperLink: '#',
    highlight: false,
    firstAuthor: false,
  },
  {
    title: 'Surface Nitrided CuBi₂O₄ Electrocatalysts with Excellent Selectivity for CO₂ Reduction to Methanol',
    authors: 'Lin Ma, Huan Liu, et al.',
    venue: 'Applied Surface Science, 2024, 663, 160215',
    details: 'Q1, IF=6.3',
    paperLink: '#',
    highlight: false,
    firstAuthor: false,
  },
];

export default function Publications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(true);

  const displayedPubs = showAll
    ? publications
    : publications.filter((p) => p.highlight);

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
  }, [showAll]);

  return (
    <div id="publications" ref={sectionRef} className="scroll-mt-16 mt-10">
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#e5e7eb]">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[#222]">
          <FileText size={18} className="text-[var(--section-icon)]" />
          Publications
        </h2>
        <div className="flex items-center gap-2 text-[13px]">
          <button
            onClick={() => setShowAll(false)}
            className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
              !showAll
                ? 'bg-[var(--link-blue)] text-white'
                : 'bg-[#f0f0f0] text-[#555] hover:bg-[#e5e5e5]'
            }`}
          >
            Representative
          </button>
          <button
            onClick={() => setShowAll(true)}
            className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
              showAll
                ? 'bg-[var(--link-blue)] text-white'
                : 'bg-[#f0f0f0] text-[#555] hover:bg-[#e5e5e5]'
            }`}
          >
            All ({publications.length})
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {displayedPubs.map((pub) => (
          <div
            key={pub.title}
            className="animate-in p-4 rounded-lg border border-[#e5e7eb] hover:shadow-sm transition-shadow duration-200"
            style={{ background: pub.firstAuthor ? '#fafbfc' : '#f5f6f8' }}
          >
            <h3 className="text-[14px] font-medium text-[#222] leading-snug mb-1.5">
              {pub.firstAuthor && (
                <span className="inline-block px-1.5 py-0.5 text-[10px] font-semibold text-white bg-[#e74c3c] rounded mr-2 align-middle">
                  1st
                </span>
              )}
              {!pub.firstAuthor && pub.authors.includes('co-first') && (
                <span className="inline-block px-1.5 py-0.5 text-[10px] font-semibold text-white bg-[#f39c12] rounded mr-2 align-middle">
                  Co-1st
                </span>
              )}
              {pub.title}
            </h3>
            <p className="text-[13px] text-[#666] leading-relaxed mb-1.5">
              {pub.authors}
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[12px] text-[#888] italic">{pub.venue}</span>
              <span
                className="text-[11px] px-2 py-0.5 rounded-full"
                style={{
                  background: pub.details.includes('Top')
                    ? '#e8f5e9'
                    : '#e3f2fd',
                  color: pub.details.includes('Top')
                    ? '#2e7d32'
                    : '#1565c0',
                }}
              >
                {pub.details}
              </span>
              <a
                href={pub.paperLink}
                className="flex items-center gap-1 text-[12px] text-[var(--link-blue)] hover:underline"
              >
                <ExternalLink size={11} />
                Paper
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
