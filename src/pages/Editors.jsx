import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import icabcrLogo from '../assets/icabcr-logo.jpg';

const EDITORS_DATA = [
    { name: "Dr. Ajay Prasad", affiliation: "IILM University Greater Noida, India" },
    { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
    { name: "Dr. Jagdish Chandra Patni", affiliation: "Chandigarh University, Mohali, India" },
    { name: "Dr. Suneet Kumar Gupta", affiliation: "Chandigarh University, Mohali, India" },
    { name: "Dr. Babusena Paul", affiliation: "Director, Institute For Intelligent Systems, University Of Johannesburg, South Africa" },
];

const Editors = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logoImg} alt="IILM Logo" className="h-10 xl:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                        <span className="w-[1px] h-6 xl:h-8 bg-slate-200"></span>
                        <img
                            src={icabcrLogo}
                            alt="ICABCR 2026"
                            className="h-8 xl:h-10 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all"
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/editors" className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-950">
                            Editors
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link to="/advisory" className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950">
                            Advisory
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link to="/submission" className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950">
                            Submissions
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 transition-colors">
                            <ArrowLeft size={16} /> <span className="hidden md:inline">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="pt-40 pb-20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <motion.div animate={{ x: [0, -50, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Conference Proceedings Editors</h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                            The distinguished editorial board reviewing and managing the proceedings for ICABCR 2026.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Content */}
            <main className="py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-4">
                            <BookOpen className="text-emerald-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-900">Editors</h2>
                        </div>
                        <div className="p-8">
                            <ul className="space-y-6">
                                {EDITORS_DATA.map((editor, idx) => (
                                    <motion.li 
                                        initial={{ opacity: 0, x: -20 }} 
                                        animate={{ opacity: 1, x: 0 }} 
                                        transition={{ delay: idx * 0.1 }}
                                        key={idx} 
                                        className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0"
                                    >
                                        <span className="text-slate-900 font-bold text-lg">{editor.name}</span>
                                        <span className="hidden md:inline text-slate-300">|</span>
                                        <span className="text-slate-600 text-sm font-light">{editor.affiliation}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Editors;
