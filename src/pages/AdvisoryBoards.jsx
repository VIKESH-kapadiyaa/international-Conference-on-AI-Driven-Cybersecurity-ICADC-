import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe } from 'lucide-react';
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
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

const internationalAdvisory = [
    { name: "Dr. Sher Afghan Khan", affiliation: "International Islamic University, Malaysia" },
    { name: "Ms. Nandita Gupta", affiliation: "Principal Data Scientist, Walmart Labs, California, USA" },
    { name: "Dr. Saad Aldosary", affiliation: "Dept. of Computer Science, King Saud University, Saudi Arabia" },
    { name: "Mr. Arup Kumar Laha", affiliation: "Executive Architect, Country Delivery Lead, IBM, Thailand" },
    { name: "Mr. Dmitry (Soxoj) Danilov", affiliation: "Head of OSINT, Amsterdam, North Holland, Netherlands" },
    { name: "Ms. Marcie Sonderson", affiliation: "Criminal Investigator, McAfee, Missouri, USA" },
    { name: "Dr. Moustafa Hussien Aly", affiliation: "Arab Academy for Science, Technology and Maritime Transport, Egypt" },
    { name: "Dr. Walid El-Shafai", affiliation: "Menoufia University, Egypt" },
    { name: "Dr. Alexander Kuiper", affiliation: "Computer Scientist at Kuiper Forensics, Maintal, Hesse, Germany" },
    { name: "Dr. Xiao-Zhi Gao", affiliation: "Eastern Finland University, Finland" },
    { name: "Mr. Rajat Goel", affiliation: "Principal Engineer, DropBox, California, USA" },
    { name: "Dr. Fahri Özsungur", affiliation: "Mersin University, Turkey" },
    { name: "Dr. Karl McCreadie", affiliation: "School of Computing, Eng & Intel. Sys, Ulster University, UK" },
    { name: "Mr. Baris Dincer", affiliation: "CIO, Threat Intelligence Advisor, RedTeam Lead, LEX Program, Turkiye" },
    { name: "Dr. Ahmed Elnger", affiliation: "Beni-Suef University, Egypt" },
];

const nationalAdvisory = [
    { name: "Dr. Raja Datta", affiliation: "IIT Kharagpur, India" },
    { name: "Dr. Manish Prateek", affiliation: "Professor and Pro Vice-Chancellor, DBS Global University" },
    { name: "Dr. Niranjan Prasad", affiliation: "Director-II (Scientist-F) (Retd), DRDO, India" },
    { name: "Dr. M. P. Jain", affiliation: "Pro Chancellor, IMS Unison University, India" },
    { name: "Dr. Sipra das Bit", affiliation: "Professor (HAG), IIEST, Shibpur, India" },
    { name: "Dr. Arindom Biswas", affiliation: "Kazi Nazrul University, India" },
    { name: "Dr. Talwar Yoginder", affiliation: "Scientist at National Informatics Centre, Min. of Communications & IT, Delhi, India" },
    { name: "Dr. Aditya Raj", affiliation: "Scientist, National Informatics Centre, MeitY, India" },
    { name: "Dr. Vijay Nath", affiliation: "BIT Mesra Ranchi & Executive Member of IETE & ISVE Ranchi Jharkhand India" },
    { name: "Dr. Amit Agarwal", affiliation: "Director, Institute of Technology, Gopeshwar, Uttarakhand, India" },
    { name: "Dr. Sanghamitra Bandyopadhyay", affiliation: "Indian Statistical Institute (ISI), Kolkata" },
    { name: "Dr. Jamuna Kanta Sing", affiliation: "Professor, Jadavpur University, India" },
];

const AdvisoryList = ({ title, members }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mb-20"
    >
        <motion.h2 variants={fadeInUp} className="text-3xl font-serif text-slate-900 mb-10 border-b border-slate-200 pb-4 flex items-center gap-4">
            <Globe className="text-emerald-600" size={28} />
            {title}
        </motion.h2>
        <ul className="space-y-6">
            {members.map((member, idx) => (
                <motion.li key={idx} variants={fadeInUp} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 group">
                    <span className="text-lg font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">{member.name}</span>
                    <span className="hidden md:inline text-slate-300">—</span>
                    <span className="text-sm text-slate-500 font-light">{member.affiliation}</span>
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

const AdvisoryBoards = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-4 group">
                        <img src={logoImg} alt="IILM Logo" className="h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                        <span className="w-[1px] h-7 bg-slate-200"></span>
                        <img
                            src={icabcrLogo}
                            alt="ICABCR 2026"
                            className="h-12 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all"
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/editors" className="hidden md:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950">
                            Editors
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link to="/advisory" className="hidden md:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-950">
                            Advisory Boards
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/community"
                            className="hidden md:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Committee
                            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-slate-950 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </Link>
                        <Link
                            to="/submission"
                            className="hidden md:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Submission Guidelines
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
            <header className="pt-32 pb-16 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[150px]"
                    />
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-[1px] w-12 bg-emerald-400"></span>
                            <p className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400">ICABCR 2026</p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Advisory Boards</h1>
                        <p className="text-lg text-slate-400 max-w-2xl font-light">
                            Our esteemed advisory members bringing global expertise and vision to the conference.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <AdvisoryList title="International Advisory Board" members={internationalAdvisory} />
                    <AdvisoryList title="National Advisory Board" members={nationalAdvisory} />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
                <div className="container mx-auto px-6 md:px-12 text-center">
                    <p className="text-slate-400 text-sm">© 2026 IILM University. All rights reserved.</p>
                    <Link to="/" className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-emerald-400 hover:text-white transition-colors">
                        Return to Conference Home
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default AdvisoryBoards;
