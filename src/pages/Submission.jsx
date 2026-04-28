import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Download, FileText, CheckCircle, AlertCircle, Layout, BookOpen } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import icabcrLogo from '../assets/icabcr-logo.jpg';

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
            delayChildren: 0.2
        }
    }
};

const Submission = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
            {/* Navigation - Glassmorphism Light */}
            <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
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
                        <Link
                            to="/community"
                            className="hidden md:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Committee
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/editors"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Editors
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/advisory"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Advisory
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 transition-colors"
                        >
                            <ArrowLeft size={16} /> <span className="hidden md:inline">Back to Home</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-200 rounded-full blur-[150px]"
                    />
                    <motion.div
                        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px]"
                    />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-emerald-500"></span>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-600">Portal Migration</p>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-sans font-bold text-slate-900 mb-8 tracking-tight">
                            Submission <span className="text-slate-400 font-light">Portal</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-500 pl-6">
                            Review the guidelines and standards for submitting your research to ICABCR 2026. Submissions will be processed securely via CMT.
                        </motion.p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pb-32 relative z-10">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Submission Status (CMT Link) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 bg-white backdrop-blur-xl border border-emerald-200 p-8 md:p-12 rounded-2xl shadow-lg shadow-emerald-900/5 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px]"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                    <AlertCircle size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-serif text-slate-900 mb-2">Submission Link</h2>
                                    <p className="text-slate-600 text-lg">
                                        Submission Must be via CMT: <span className="text-emerald-600 font-semibold">Link will be active soon.</span>
                                    </p>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-slate-100 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full cursor-not-allowed">
                                Coming Soon
                            </button>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-12">
                        {/* Top Row: Key Guidelines and Resources */}
                        <div className="flex flex-col gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200">
                                    <CheckCircle className="text-blue-600" size={24} />
                                    <h3 className="text-2xl font-serif text-slate-900">Key Guidelines</h3>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {[
                                        { label: "Format", value: "MS Word only." },
                                        { label: "Length", value: "4–8 pages (Strictly enforced)." },
                                        { label: "Integrity", value: "Must include a Turnitin Report." },
                                        { label: "Plagiarism", value: "< 10%" },
                                        { label: "AI Similarity", value: "< 20%" },
                                        { label: "Eligibility", value: "First author must be an M.D., Ph.D., or equivalent." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                            <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">{item.label}</h4>
                                            <p className="text-slate-900 font-medium">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Downloads */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                                            <FileText className="text-emerald-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-bold text-lg">Chapter Format / Template</h4>
                                            <p className="text-slate-600 text-sm">Download the official formatting template for your submission.</p>
                                        </div>
                                    </div>
                                    <a href="#" className="flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 rounded-lg transition-all text-sm font-bold shadow-sm whitespace-nowrap">
                                        <Download size={18} /> Download Template
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Manuscript Guidelines: Full Width */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white backdrop-blur-md border border-slate-200 p-8 md:p-12 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                                    <Layout className="text-purple-600" size={28} />
                                    <h3 className="text-2xl md:text-3xl font-serif text-slate-900">Manuscript Guidelines <span className="text-slate-500 text-lg italic inline-block ml-2">(Mandatory)</span></h3>
                                </div>

                                <div className="space-y-8 text-slate-700 font-light leading-relaxed max-w-4xl">
                                    <p className="text-base font-medium text-slate-900 p-4 bg-red-50 text-red-900 rounded-lg border border-red-100">
                                        <strong className="font-bold">Strict adherence</strong> to Nova Science Publishers' formatting guidelines is required to avoid delays and additional fees. Please follow these instructions carefully.
                                    </p>

                                    <section>
                                        <h4 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">A. General Formatting</h4>
                                        <ul className="list-disc pl-6 space-y-2 text-base">
                                            <li><strong className="text-slate-900 font-semibold">File Format:</strong> MS Word (.docx) is preferred. LaTeX is acceptable if the Nova macro is used.</li>
                                            <li><strong className="text-slate-900 font-semibold">Page Size:</strong> US Letter (not A4).</li>
                                            <li><strong className="text-slate-900 font-semibold">Font:</strong> Times New Roman, 10.5 point.</li>
                                            <li><strong className="text-slate-900 font-semibold">Line Spacing:</strong> 1.1.</li>
                                            <li><strong className="text-slate-900 font-semibold">Language:</strong> English (either US or UK spelling, but must be consistent throughout).</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h4 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">B. Chapter Structure</h4>
                                        <p className="text-base mb-4 text-slate-600">Each chapter must include the following elements in order:</p>
                                        <ul className="list-disc pl-6 space-y-3 text-base">
                                            <li><strong className="text-slate-900 font-semibold">Abstract:</strong> A descriptive summary of 100-400 words, headed "Abstract".</li>
                                            <li><strong className="text-slate-900 font-semibold">Author Information:</strong> Full first name, middle initial, last name. Affiliations including Department, University/Institution, City, and Country (no postal codes or street addresses). The corresponding author's email address must be clearly marked with an asterisk (*).</li>
                                            <li><strong className="text-slate-900 font-semibold">Keywords:</strong> A list of 4-6 noun-based keywords.</li>
                                            <li><strong className="text-slate-900 font-semibold">Introduction:</strong> Headed "Introduction".</li>
                                            <li><strong className="text-slate-900 font-semibold">Main Text:</strong> Use clear, hierarchical headings (e.g., Heading 2, 12 pt., Heading 3, 11 pt.).</li>
                                            <li><strong className="text-slate-900 font-semibold">Conclusion:</strong> Headed "Conclusion" (not "Conclusions").</li>
                                            <li><strong className="text-slate-900 font-semibold">References:</strong> Headed "References". See section below for detailed reference style.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h4 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">C. Reference Style</h4>
                                        <ul className="list-disc pl-6 space-y-2 text-base">
                                            <li>The preferred reference style is the Chicago Manual Style.</li>
                                            <li>All references listed must be cited in the text, and vice-versa.</li>
                                            <li>List all authors; do not use "et al." in the reference list.</li>
                                            <li>Format references in Times New Roman, 10 point.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h4 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">D. Figures and Tables</h4>
                                        <ul className="list-disc pl-6 space-y-6 text-base">
                                            <li><strong className="text-slate-900 font-semibold">Numbering:</strong> For this edited book, figures and tables should be numbered consecutively starting from "1" in each chapter (e.g., Figure 1, Table 1).</li>
                                            <li>
                                                <strong className="text-slate-900 font-semibold text-lg block mb-2">Figures (Images, Charts, Graphs):</strong>
                                                <ul className="list-[circle] pl-6 space-y-2 text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                    <li>Must be submitted as separate, high-resolution electronic files (e.g., .pptx, .ai, .psd for graphics; .jpeg, .tiff, .png for photos).</li>
                                                    <li>Minimum resolution: 350 DPI. Print your figures to verify clarity before submission.</li>
                                                    <li>Figures must be clear, legible, and in black & white unless the color fee is pre-paid ($60 per figure).</li>
                                                    <li>Each figure requires a full, descriptive caption placed after the figure in the text (e.g., "Figure 1. Schematic diagram of the novel electrochemical biosensor.").</li>
                                                    <li className="text-red-700 bg-red-50 p-2 rounded mt-2 border border-red-100"><strong className="font-bold">Copyright:</strong> Images from the internet (including Wikipedia) or scanned from books are STRICTLY PROHIBITED. For any previously published figure, you MUST obtain and submit written permission from the copyright holder using the Nova Permission Request Form.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong className="text-slate-900 font-semibold text-lg block mb-2">Tables:</strong>
                                                <ul className="list-[circle] pl-6 space-y-2 text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                                    <li>Must be created in Word (not as images).</li>
                                                    <li>Each table requires a full, descriptive caption placed before the table.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </section>
                                </div>

                                {/* External Links */}
                                <div className="mt-12 flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-8">
                                    <a href="https://novapublishers.com/wp-content/uploads/2025/11/Book-Guidelines.pdf" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-3 px-6 py-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg transition-all text-sm font-bold tracking-wider">
                                        <BookOpen size={18} /> Book Guidelines PDF
                                    </a>
                                    <a href="https://novapublishers.com/authors-central/" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-3 px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-all text-sm font-bold tracking-wider">
                                        Nova Authors Central <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <p className="text-slate-400 text-sm font-light">© 2026 IILM University. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Submission;
