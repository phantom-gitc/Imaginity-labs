import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Clock } from 'lucide-react';

export function ContactModal({ isOpen, onClose, selectedProject = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedProject ? selectedProject.title : 'Digital Products',
    budget: '$50k - $100k',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0A0A0F]/65 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-2xl bg-white rounded-[28px] p-8 sm:p-11 border border-[#E6E8EE] shadow-[0_30px_70px_rgba(10,10,15,0.2)] z-10 my-8 overflow-hidden"
        >
          {/* Top Ambient Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(227,235,255,0.8) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] flex items-center justify-center text-[#4A4F5C] hover:text-[#0A0A0F] hover:border-[#2F5BFF] transition-all cursor-pointer shadow-xs z-20"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left py-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E3EBFF] text-[#2F5BFF] font-mono text-[11px] mb-6 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>INQUIRY TRANSMITTED</span>
              </div>

              <h3 className="font-display text-[36px] sm:text-[44px] text-[#0A0A0F] mb-4 leading-tight">
                Project brief <span className="italic font-serif text-gradient-brand">received.</span>
              </h3>

              <p className="text-[16px] leading-[1.65] text-[#4A4F5C] mb-8 max-w-lg">
                Thank you for reaching out to NEXORA LABS. A technical lead will review your project requirements and respond within 24 business hours with architectural feedback.
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EE] mb-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E3EBFF] flex items-center justify-center text-[#2F5BFF]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#0A0A0F]">Average Initial Turnaround</p>
                  <p className="font-mono text-[11px] text-[#2F5BFF] font-semibold">Under 4 Hours (Mon–Fri)</p>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="h-12 px-7 bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[14px] font-semibold rounded-full shadow-md transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          ) : (
            <div>
              {/* Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8FA] border border-[#E6E8EE] text-[#2F5BFF] font-mono text-[11px] mb-4 font-bold">
                <Sparkles className="w-3 h-3 text-[#FFD43B]" />
                <span>START A PROJECT</span>
              </div>

              <h2 className="font-display text-[32px] sm:text-[42px] leading-[1.05] tracking-tight text-[#0A0A0F] mb-3">
                Build with <span className="italic font-serif text-gradient-brand">Nexora.</span>
              </h2>

              <p className="text-[15px] leading-[1.6] text-[#4A4F5C] mb-8 max-w-lg">
                Tell us about your objectives. We collaborate with founders, product leaders, and enterprise engineering teams.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] text-[#4A4F5C] uppercase tracking-wider mb-1.5 font-bold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#E6E8EE] bg-white text-[14px] text-[#0A0A0F] focus:outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/15 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#4A4F5C] uppercase tracking-wider mb-1.5 font-bold">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#E6E8EE] bg-white text-[14px] text-[#0A0A0F] focus:outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/15 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] text-[#4A4F5C] uppercase tracking-wider mb-1.5 font-bold">
                      Primary Capability
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E6E8EE] bg-white text-[14px] text-[#0A0A0F] focus:outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/15 transition-all"
                    >
                      <option value="Digital Products">Digital Products (Web & SaaS)</option>
                      <option value="AI & Intelligent Systems">AI & Intelligent Systems</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Enterprise Platform">Enterprise Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-[#4A4F5C] uppercase tracking-wider mb-1.5 font-bold">
                      Target Investment
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-11 px-3.5 rounded-xl border border-[#E6E8EE] bg-white text-[14px] text-[#0A0A0F] focus:outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/15 transition-all"
                    >
                      <option value="$25k - $50k">$25,000 – $50,000 (Sprint MVP)</option>
                      <option value="$50k - $100k">$50,000 – $100,000 (Full Production)</option>
                      <option value="$100k+">$100,000+ (Multi-System Architecture)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#4A4F5C] uppercase tracking-wider mb-1.5 font-bold">
                    Project Vision & Timeline *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your timeline, stack, and core objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-[#E6E8EE] bg-white text-[14px] text-[#0A0A0F] focus:outline-none focus:border-[#2F5BFF] focus:ring-2 focus:ring-[#2F5BFF]/15 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#0A0A0F] hover:bg-[#2F5BFF] text-white text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 rounded-full shadow-md transition-all duration-300 btn-primary-sheen cursor-pointer"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowUpRight className="w-4 h-4 text-[#FFD43B]" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
