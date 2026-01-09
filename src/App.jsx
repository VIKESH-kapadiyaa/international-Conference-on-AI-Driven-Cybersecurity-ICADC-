import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar, MapPin, ArrowRight, Users, Clock, Download, ShieldCheck, Mail, Globe, Menu, X, ChevronRight, BookOpen, Award, Search, ExternalLink, Plus, Linkedin, Twitter, FileText, Briefcase, GraduationCap, Microscope, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Assets
import logoImg from './assets/iilm-logo.png';
import heroImg from './assets/iilm-hero.png';
import campusImg from './assets/iilm-campus.png';
import workshopImg from './assets/iilm-workshop.png';

const ICADC_CONTENT = {
  deadlines: [
    { label: "Submission Deadline", date: "30 May 2026", status: "Open", color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Notification", date: "30 July 2026", status: "Upcoming", color: "text-slate-500", bg: "bg-slate-50" },
    { label: "Camera Ready", date: "30 Aug 2026", status: "Pending", color: "text-slate-500", bg: "bg-slate-50" },
    { label: "Registration Closes", date: "15 Sep 2026", status: "Pending", color: "text-slate-500", bg: "bg-slate-50" }
  ],
  tracks: [
    { id: 1, category: "Intelligence", title: "Advanced Threat Detection", topics: ["Real-Time Anomaly Detection", "Reinforcement Learning for Behavioral Classification", "Graph Neural Networks for APT Attribution"] },
    { id: 2, category: "Intelligence", title: "Secure & Trustworthy AI", topics: ["Defending Against Adversarial Attacks", "Federated Learning for Privacy", "Explainable AI (XAI) for SOC"] },
    { id: 3, category: "Generative AI", title: "Generative AI in Cyber", topics: ["LLMs for Vulnerability Exploitation", "Diffusion Models for Attack Generation", "GAN-Based Synthetic Data Augmentation"] },
    { id: 4, category: "Infrastructure", title: "Zero-Trust Architectures", topics: ["Behavioral Biometrics", "AI-Orchestrated Micro-Segmentation", "Dynamic Risk-Based Access Control"] },
    { id: 5, category: "Infrastructure", title: "IoT & Edge Security", topics: ["Edge AI for DDoS Mitigation", "Lightweight Deep Learning for IoT", "AI-Driven Anomaly Detection in ICS"] },
    { id: 6, category: "Governance", title: "Ethics & Policy", topics: ["Bias Mitigation Strategies", "GDPR & NIST Perspectives", "Ethical Frameworks for Autonomous Defense"] },
    { id: 7, category: "Industry", title: "Industry Case Studies", topics: ["Deploying AI-Augmented SOCs", "Generative AI for Zero-Day Detection", "Public-Private Partnerships"] },
    { id: 8, category: "Foundations", title: "Modern Cryptography", topics: ["Lightweight Cryptography", "Homomorphic Encryption", "Protocols for Secure Communication"] },
    { id: 9, category: "Foundations", title: "Quantum Computing", topics: ["Quantum-Resistant Security", "Quantum Key Distribution", "Quantum Random Number Generation"] },
    { id: 10, category: "Governance", title: "GRC & Auditing", topics: ["Auditing & Compliance", "Risk Analysis Measures", "Standards for Security & Privacy"] }
  ],
  workshops: [
    { title: "Hands-on TensorFlow for Building AI Intrusion Detection Systems", desc: "A practical deep dive into building production-ready IDS using the latest TensorFlow frameworks.", seats: 24 },
    { title: "PyTorch Implementation of Adversarial Robustness Training", desc: "Learn to defend your models against sophisticated adversarial attacks using PyTorch.", seats: 18 },
    { title: "Practical Federated Learning for Collaborative Threat Detection", desc: "Collaboratively train models without sharing sensitive raw data.", seats: 30 }
  ],
  careers: [
    { role: "AI Security Analyst", icon: <ShieldCheck size={20} /> },
    { role: "Network Security Engineer", icon: <Globe size={20} /> },
    { role: "Cybersecurity Consultant", icon: <Briefcase size={20} /> },
    { role: "AI Threat Intelligence", icon: <Microscope size={20} /> }
  ]
};

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const SectionHeader = ({ title, subtitle, kicker, align = "left", light = false }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className={`mb-24 ${align === "center" ? "text-center mx-auto" : ""} max-w-4xl relative z-10`}
  >
    {kicker && (
      <div className={`flex items-center gap-4 mb-6 ${align === "center" ? "justify-center" : ""}`}>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 1, ease: 'circOut' }}
          className={`h-[1px] ${light ? "bg-white/30" : "bg-slate-300"}`}
        ></motion.span>
        <p className={`text-xs uppercase tracking-[0.3em] font-bold ${light ? "text-slate-300" : "text-slate-500"}`}>{kicker}</p>
      </div>
    )}
    <h2 className={`text-4xl md:text-6xl font-serif font-medium mb-8 tracking-tight leading-[1.1] ${light ? "text-white" : "text-slate-900"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl font-light leading-relaxed ${light ? "text-slate-300" : "text-slate-500"} ${align === "center" ? "mx-auto" : ""}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

const NavItem = ({ href, label, active }) => (
  <a
    href={href}
    className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group
      ${active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
  >
    {label}
    <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
  </a>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollY } = useScroll();

  // Parallax effects
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTracks = useMemo(() => {
    return (ICADC_CONTENT.tracks || []).filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.topics.some(tp => tp.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-slate-900 selection:text-white overflow-x-hidden">

      {/* --- NAVIGATION --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-8'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-4 group">
              {/* IMAGE 1: LOGO IN NAVBAR */}
              <img src={logoImg} alt="IILM Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tighter text-slate-950 flex items-center gap-2">
                  ICADC <span className="font-light italic text-slate-400 group-hover:text-slate-600 transition-colors">2026</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-slate-500 mt-1">International Forum</span>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            <NavItem href="#about" label="Overview" />
            <NavItem href="#expectations" label="Tracks" />
            <NavItem href="#milestones" label="Dates" />
            <NavItem href="#workshops" label="Workshops" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-950 text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] transition-all shadow-lg shadow-slate-900/10"
            >
              Register Now
            </motion.button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
          >
            {['Overview', 'Tracks', 'Dates', 'Workshops'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-3xl font-serif text-slate-900 hover:italic transition-all">
                {item}
              </a>
            ))}
            <button className="mt-8 bg-slate-950 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest">
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-white">
        {/* IMAGE 2: HERO BACKGROUND IMAGE */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={heroImg} alt="IILM Campus" className="w-full h-full object-cover opacity-[0.15] scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50"></div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          style={{ y: yHero }}
          className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-12 translate-x-32 z-0 hidden lg:block backdrop-blur-sm"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40 z-0"
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              style={{ opacity: opacityHero }}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-8 space-y-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Submissions Open until May 30</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-medium text-slate-950 leading-[0.95] tracking-tight text-balance"
              >
                Global Forum on <br />
                <span className="italic text-slate-400 font-light origin-left inline-block">AI-Cyber Resilience</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
                Redefining digital trust at the intersection of artificial intelligence and cybersecurity. Hosted by IILM University.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-slate-950 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] shadow-xl shadow-slate-900/20 flex items-center justify-center gap-4"
                >
                  Submit Paper <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-white border border-slate-200 text-slate-900 px-10 py-5 text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-4"
                >
                  Download CFP <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="lg:col-span-4 hidden lg:flex flex-col gap-6"
            >
              {[
                { label: "Host Institution", val: "IILM University", sub: "Greater Noida, India" },
                { label: "Proceedings", val: "Scopus Indexed", sub: "Springer Lecture Notes" },
                { label: "Date", val: "Oct 12-14, 2026", sub: "Hybrid Format" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  className="p-8 bg-white/80 backdrop-blur border border-slate-100 shadow-sm rounded-sm relative overflow-hidden group cursor-default"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-950 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">{stat.label}</p>
                  <p className="font-serif text-2xl text-slate-900">{stat.val}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- STATS TICKER --- */}
      <div className="border-y border-slate-200 bg-white py-8 overflow-hidden relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <React.Fragment key={i}>
              <span className="text-4xl font-serif text-slate-300 mx-8">✦</span>
              <span className="text-xl font-bold tracking-widest uppercase text-slate-900">Advancing Secure Intelligence</span>
              <span className="text-4xl font-serif text-slate-300 mx-8">✦</span>
              <span className="text-xl font-bold tracking-widest uppercase text-slate-500">NIST Framework Compliant</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* --- ABOUT --- */}
      <section id="about" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            kicker="The Mission"
            title="Bridging Theory & Practice"
            subtitle="As digitalization accelerates, sophisticated threats require intelligent, adaptive defense mechanisms."
          />

          <div className="grid lg:grid-cols-12 gap-12 mt-20">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="lg:col-span-8 grid md:grid-cols-2 gap-12 text-slate-600 leading-relaxed font-light text-lg"
            >
              <div className="col-span-2 relative mb-8 rounded-sm overflow-hidden h-64 md:h-80">
                {/* IMAGE 3: CAMPUS IMAGE IN ABOUT SECTION */}
                <img src={campusImg} alt="IILM Campus Life" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur px-6 py-3">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-900">Life at IILM</p>
                </div>
              </div>

              <motion.p variants={fadeInUp}>
                <strong className="text-slate-950 font-medium">The International Conference on AI-Driven Cybersecurity (ICADC)</strong> facilitates a critical dialogue between research and industrial practice. We focus on predicting and mitigating sophisticated cyberattacks across critical infrastructure, IoT, and edge environments.
              </motion.p>
              <motion.p variants={fadeInUp}>
                By harnessing machine learning, deep neural networks, and generative AI, we aim to build a future where AI not only combats adversaries but strengthens global digital trust, enabling secure innovation in smart cities.
              </motion.p>

              <div className="md:col-span-2 pt-12 border-t border-slate-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {(ICADC_CONTENT.careers || []).map((c, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex flex-col gap-4 group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "#020617", color: "#fff" }}
                        className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 transition-colors shadow-sm"
                      >
                        {c.icon}
                      </motion.div>
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500 group-hover:text-slate-900 transition-colors max-w-[100px]">{c.role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4 relative"
            >
              <div className="bg-slate-950 text-white p-12 h-full flex flex-col justify-between relative overflow-hidden rounded-sm shadow-2xl group">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50"
                />

                <div className="relative z-10">
                  <BookOpen className="mb-6 opacity-80" size={32} />
                  <h3 className="text-2xl font-serif mb-4">Indexing & Publication</h3>
                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">
                    All accepted and registered papers will be published in the Conference Proceedings, indexed in Scopus and Web of Science.
                  </p>
                </div>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="#"
                  className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors relative z-10"
                >
                  View Guidelines <ArrowRight size={14} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MILESTONES --- */}
      <section id="milestones" className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                kicker="Important Dates"
                title="Timeline to Excellence"
                subtitle="Strict adherence to these deadlines is required for inclusion in the 2026 proceedings."
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {(ICADC_CONTENT.deadlines || []).map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -5, borderColor: "#cbd5e1" }}
                    className={`p-10 border border-slate-100 rounded-sm hover:shadow-lg transition-all group bg-white`}
                  >
                    <div className="flex justify-between items-start mb-8">
                      <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${item.status === 'Open' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {item.status}
                      </span>
                      <Calendar className="text-slate-300 group-hover:text-slate-900 transition-colors" size={20} />
                    </div>
                    <h4 className="text-3xl font-serif text-slate-900 mb-2">{item.date}</h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TRACKS --- */}
      <section id="expectations" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Abstract bg elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[150px]"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <SectionHeader
              light
              kicker="Call for Papers"
              title="Research Tracks"
              subtitle="Exploration at the frontier of secure intelligence."
            />

            <div className="w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Find your topic..."
                  className="w-full lg:w-80 bg-slate-900/50 border border-slate-800 rounded-full pl-6 pr-12 py-4 text-sm text-white focus:border-white/40 outline-none transition-all placeholder:text-slate-600 focus:bg-slate-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              </div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredTracks.map(track => (
              <motion.div
                key={track.id}
                variants={fadeInUp}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="group p-8 border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm rounded-sm transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 border border-blue-900/50 px-2 py-1 rounded bg-blue-900/20">{track.category}</span>
                  <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-blue-200 transition-colors">{track.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {track.topics.map((t, i) => (
                    <span key={i} className="text-xs font-light text-slate-400 bg-black/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- WORKSHOPS --- */}
      <section id="workshops" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeader
            kicker="Practical Learning"
            title="Workshops & Masterclasses"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            {(ICADC_CONTENT.workshops || []).map((ws, i) => (
              // IMAGE 4: WORKSHOP CARD IMAGE
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                className="group bg-white border border-slate-200 shadow-sm transition-all rounded-sm flex flex-col md:flex-row overflow-hidden"
              >
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <img src={workshopImg} alt="Workshop Session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-12 p-8 md:p-12 flex-1 relative bg-white">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-8 h-[1px] bg-slate-400"></span>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Workshop 0{i + 1}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{ws.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed max-w-2xl">{ws.desc}</p>
                  </div>

                  <div className="flex flex-col items-center gap-4 shrink-0">
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-slate-900">{ws.seats}</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400">Seats Left</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-slate-900 text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors rounded-sm"
                    >
                      Reserve Seat
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white pt-32 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-4 gap-16 mb-24 border-b border-white/10 pb-16">
            <div className="lg:col-span-2">
              <span className="font-serif font-bold text-3xl text-white mb-8 block">ICADC 2026</span>
              <p className="text-slate-400 font-light leading-relaxed max-w-sm mb-8">
                Bridging the gap between AI innovation and cybersecurity resilience. Organized by IILM University for the global academic community.
              </p>
              <div className="flex gap-6">
                {[Twitter, Linkedin, Globe].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 10, backgroundColor: "#fff", color: "#000" }}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-all"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Tracks', 'Workshops', 'Contact'].map(item => (
                  <li key={item}><a href="#" className="text-sm text-slate-300 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Contact</h4>
              <p className="text-sm text-slate-300 mb-2">conference@icadc2026.org</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Plot No. 16, Knowledge Park II, <br />
                Greater Noida, UP 201306, India
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-slate-600">
            <p>© 2026 IILM University. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
