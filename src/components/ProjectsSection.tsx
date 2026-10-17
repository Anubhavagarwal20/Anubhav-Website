import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Search, ShoppingBag, Megaphone, Globe, X, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { projects } from '../data';
import type { Project } from '../types';

// ─── Abstract project visuals (CSS/SVG, labelled conceptual) ──────────────────
const ProjectVisuals: Record<number, () => React.ReactElement> = {
  1: () => (
    <div className="relative w-full h-full min-h-[180px] rounded-xl overflow-hidden bg-[#0A0E1A] flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(79,140,255,0.12) 0%, transparent 70%)' }} />
      {/* Search bar mockup */}
      <div className="relative z-10 flex flex-col gap-3 w-full px-6">
        <div className="flex items-center gap-2 rounded-lg border border-[#4F8CFF]/30 bg-[#4F8CFF]/5 px-3 py-2">
          <Search size={12} className="text-[#4F8CFF] flex-shrink-0" />
          <div className="h-1.5 bg-[#4F8CFF]/30 rounded flex-1" />
        </div>
        {[80, 60, 70, 50].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1 bg-[#4DE2FF]/20 rounded" style={{ width: `${w}%` }} />
          </div>
        ))}
        <div className="flex gap-2 mt-1">
          {['SEO', 'GEO', 'AI Search'].map((t) => (
            <span key={t} className="text-[9px] px-2 py-0.5 rounded border border-[#4F8CFF]/25 text-[#4F8CFF]">{t}</span>
          ))}
        </div>
      </div>
      <p className="absolute bottom-2 right-3 text-[8px] text-white/20 italic">Conceptual visual</p>
    </div>
  ),
  2: () => (
    <div className="relative w-full h-full min-h-[180px] rounded-xl overflow-hidden bg-[#0A0E1A] flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 60%, rgba(155,123,255,0.12) 0%, transparent 70%)' }} />
      <div className="relative z-10 flex flex-col gap-3 w-full px-6">
        <div className="flex items-center gap-3">
          <ShoppingBag size={18} className="text-[#9B7BFF]" />
          <span className="text-xs font-medium text-[#A7B1C2]">Marketplace Optimization</span>
        </div>
        {/* Product listing mockup */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-square rounded border border-white/[0.08] bg-white/[0.03] flex items-center justify-center">
              <div className="w-6 h-6 rounded bg-[#9B7BFF]/20" />
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 bg-[#9B7BFF]/25 rounded w-3/4" />
          <div className="h-1 bg-white/10 rounded w-1/2" />
          <div className="h-1 bg-white/10 rounded w-2/3" />
        </div>
      </div>
      <p className="absolute bottom-2 right-3 text-[8px] text-white/20 italic">Conceptual visual</p>
    </div>
  ),
  3: () => (
    <div className="relative w-full h-full min-h-[180px] rounded-xl overflow-hidden bg-[#0A0E1A] flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(77,226,255,0.10) 0%, transparent 70%)' }} />
      <div className="relative z-10 flex flex-col gap-3 w-full px-6">
        <div className="flex items-center gap-3">
          <Megaphone size={18} className="text-[#4DE2FF]" />
          <span className="text-xs font-medium text-[#A7B1C2]">Campaign & Social</span>
        </div>
        <div className="flex gap-2">
          {['Meta Ads', 'Social'].map((l) => (
            <div key={l} className="flex-1 rounded border border-[#4DE2FF]/20 bg-[#4DE2FF]/5 p-2">
              <p className="text-[9px] text-[#4DE2FF]">{l}</p>
              <div className="mt-1.5 h-8 bg-[#4DE2FF]/10 rounded" />
            </div>
          ))}
        </div>
        <div className="h-1 bg-[#4DE2FF]/15 rounded w-full" />
      </div>
      <p className="absolute bottom-2 right-3 text-[8px] text-white/20 italic">Conceptual visual</p>
    </div>
  ),
  4: () => (
    <div className="relative w-full h-full min-h-[180px] rounded-xl overflow-hidden bg-[#0A0E1A] flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(79,140,255,0.10) 0%, transparent 70%)' }} />
      <div className="relative z-10 flex flex-col gap-3 w-full px-6">
        <div className="flex items-center gap-3">
          <Globe size={18} className="text-[#4F8CFF]" />
          <span className="text-xs font-medium text-[#A7B1C2]">Website & Marketing</span>
        </div>
        {/* Browser mockup */}
        <div className="rounded-lg border border-white/[0.08] overflow-hidden">
          <div className="bg-white/[0.04] px-2 py-1.5 flex items-center gap-1">
            {['#FF6B6B', '#FFD93D', '#6BCB77'].map((c) => (
              <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c + '80' }} />
            ))}
          </div>
          <div className="p-2 space-y-1.5">
            <div className="h-3 bg-white/[0.06] rounded w-full" />
            <div className="h-1.5 bg-white/[0.04] rounded w-3/4" />
            <div className="h-1.5 bg-white/[0.04] rounded w-1/2" />
          </div>
        </div>
      </div>
      <p className="absolute bottom-2 right-3 text-[8px] text-white/20 italic">Conceptual visual</p>
    </div>
  ),
};

// ─── Project Card ─────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const shouldReduce = useReducedMotion();
  const Visual = ProjectVisuals[project.id] ?? ProjectVisuals[1];
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
      className={`group relative flex flex-col rounded-2xl border border-white/[0.09] bg-[#0D1220]/70 overflow-hidden
        hover:border-[#4F8CFF]/35 transition-all duration-500
        ${isFeatured ? 'md:col-span-1' : ''}
      `}
    >
      {/* Visual */}
      <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
        <Visual />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Number + category */}
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-4xl text-white/[0.06]">
            {project.number}
          </span>
          <span className="text-[10px] tracking-[0.12em] uppercase text-[#4F8CFF] font-medium">
            {project.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-display font-bold text-xl text-[#F4F7FB] group-hover:text-[#4F8CFF] transition-colors duration-300">
          {project.name}
        </h3>

        {/* Summary */}
        <p className="text-[#A7B1C2] text-sm leading-relaxed flex-1">
          {project.summary}
        </p>

        {/* Tags */}
        <ul className="flex flex-wrap gap-1.5" aria-label="Project skills">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-2.5 py-1 text-[10px] font-medium rounded-full border border-white/[0.08] text-[#A7B1C2]"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#4F8CFF] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              View Project <ArrowUpRight size={13} />
            </a>
          ) : (
            <button
              onClick={() => onSelect(project)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#4F8CFF] hover:text-[#4DE2FF] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF] rounded"
            >
              View Details <ArrowUpRight size={13} />
            </button>
          )}

          <button
            onClick={() => onSelect(project)}
            aria-label={`View details for ${project.name}`}
            className="p-1 rounded-full text-[#A7B1C2]/40 group-hover:text-[#4F8CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF]"
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Project Details Modal ────────────────────────────────────────────────────
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onInquire: () => void;
}

function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <motion.div
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#080B12]/80 backdrop-blur-md"
        aria-hidden="true"
      />

      {/* Modal Card */}
      <motion.div
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-xl rounded-2xl border border-white/[0.12] bg-[#0D1220] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-white/[0.08] text-[#A7B1C2] hover:text-[#F4F7FB] hover:border-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF]"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#4F8CFF] font-semibold">
              Project {project.number}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] text-[#A7B1C2]">{project.category}</span>
          </div>
          <h2 id="modal-title" className="font-display font-bold text-2xl sm:text-3xl text-[#F4F7FB]">
            {project.name}
          </h2>
          {project.role && (
            <p className="text-xs text-[#4DE2FF] font-medium mt-1">
              Role: {project.role}
            </p>
          )}
        </div>

        {/* Overview */}
        <div className="mt-5 pt-5 border-t border-white/[0.08]">
          <p className="text-xs uppercase tracking-wider text-[#A7B1C2]/60 font-semibold mb-2">
            Overview
          </p>
          <p className="text-sm text-[#A7B1C2] leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Verified Scope */}
        {project.details && project.details.length > 0 && (
          <div className="mt-5 pt-5 border-t border-white/[0.08]">
            <p className="text-xs uppercase tracking-wider text-[#A7B1C2]/60 font-semibold mb-3">
              Confirmed Scope & Execution
            </p>
            <ul className="flex flex-col gap-2.5">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F4F7FB]/90 leading-relaxed">
                  <CheckCircle2 size={15} className="text-[#4F8CFF] flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mt-6 pt-5 border-t border-white/[0.08]">
          <p className="text-xs uppercase tracking-wider text-[#A7B1C2]/60 font-semibold mb-2.5">
            Key Focus Areas
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full border border-[#4F8CFF]/20 text-[#4F8CFF] bg-[#4F8CFF]/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-[#A7B1C2]/50 italic">
            Factual project scope based on verified work.
          </p>
          <button
            onClick={onInquire}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[#4F8CFF] to-[#4DE2FF] text-[#080B12] hover:shadow-[0_0_20px_rgba(79,140,255,0.4)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#4F8CFF]"
          >
            Inquire About This Work
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleInquire = () => {
    setSelectedProject(null);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="projects"
        className="py-24 md:py-32 bg-[#080B12]"
        aria-labelledby="projects-heading"
      >
        <div className="container-padded">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <FadeIn>
                <p className="section-label mb-4">Portfolio</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2
                  id="projects-heading"
                  className="font-display font-bold leading-tight gradient-text"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                >
                  Selected Work
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <p className="text-[#A7B1C2] text-sm max-w-sm">
                Strategy, search, content, and e-commerce execution.
              </p>
            </FadeIn>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onInquire={handleInquire}
          />
        )}
      </AnimatePresence>
    </>
  );
}
