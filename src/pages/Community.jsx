import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Globe, Award, BookOpen, Megaphone, DollarSign, Share2, Briefcase } from 'lucide-react';
import logoImg from '../assets/iilm-logo.png';
import icabcrLogo from '../assets/icabcr-logo.jpg';
import novaLogo from '../assets/nova-logo.jpg';
import scopusLogo from '../assets/scopus-logo.png';

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

const CommitteeSection = ({ title, icon, members }) => {
    if (!members || members.length === 0) return null;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mb-16"
        >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    {icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {members.map((member, idx) => (
                    <motion.div
                        key={idx}
                        variants={fadeInUp}
                        className="bg-white p-5 border border-slate-100 rounded-sm hover:border-emerald-200 hover:shadow-md transition-all"
                    >
                        <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{member.affiliation}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const COMMITTEE_DATA = {
    chiefPatrons: [
        { name: "Mr. Bharat Kaushal", affiliation: "Chancellor, IILM University, Greater Noida, India" },
        { name: "Mrs. Malvika Rai", affiliation: "Pro-Chancellor, IILM University, Greater Noida, India" },
    ],
    patrons: [
        { name: "Dr. Nihar Amoncar", affiliation: "Vice Chancellor, IILM University, Greater Noida, India" },
    ],
    generalChairs: [
        { name: "Dr. Munish Sabharwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Ravi S Iyer", affiliation: "IISc Bengaluru, India" },
        { name: "Dr. Babusena Paul", affiliation: "University Of Johannesburg, South Africa" },
    ],
    organizingChairs: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Shamik Tiwari", affiliation: "IILM University, Gurugram" },
    ],
    organizingCoChairs: [
        { name: "Dr. Anil Saroliya", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Lalit Kumar", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Suman Avdhesh Yadav", affiliation: "IILM University, Greater Noida" },
    ],
    convenor: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University, Greater Noida" },
    ],
    secretaries: [
        { name: "Dr. Hussain Falih Mahdi", affiliation: "Associate Professor, University of Diyala, Iraq" },
        { name: "Dr. Arijit Ghosh", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Tanupriya Choudhury", affiliation: "UPES, India" },
        { name: "Dr. Akash Punhani", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Sudhir Kumar Barai", affiliation: "BITS Pilani, India" },
        { name: "Dr. Kirti Shukla", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. P. Kumar", affiliation: "IIT Patna, India" },
        { name: "Dr. Adarsh Kumar", affiliation: "UPES, India" },
        { name: "Dr. Nitish Kumar Guru", affiliation: "Scientific Assistant (Ballistics), Directorate of Forensic Science and Laboratory, India" },
        { name: "Dr. Kaushik Ghosh", affiliation: "UPES, India" },
        { name: "Dr. Sourav Chakraborty", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Harshal Patil", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Udai Bhan Trivedi", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Amit Kumar", affiliation: "Thapar Institute of Engineering and Technology, India" },
        { name: "Dr. S. Raghavan", affiliation: "NIT Trichy, India" },
        { name: "Dr. Ujwal Chakraborty", affiliation: "NIT Silchar, India" },
        { name: "Dr. Talwar Yoginder", affiliation: "Scientist at National Informatics Centre, India" },
        { name: "Dr. Supratim Biswas", affiliation: "BIT Mesra Ranchi, India" },
        { name: "Dr. Gunjan Mittal Roy", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Chandrashekhar Azad", affiliation: "National Institute of Technology, India" },
        { name: "Dr. Suneet", affiliation: "CU, India" },
        { name: "Dr. Saurabh Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Anil Kumar", affiliation: "UPES, India" },
        { name: "Dr. Kumar Venkatesh", affiliation: "MNNIT Allahabad, India" },
        { name: "Dr. Rudra P. Pradhan", affiliation: "IIT Kharagpur, India" },
        { name: "Dr. Anirban Ghatak", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Richa Vijay", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Anup Dewanji", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Souvik Ganguli", affiliation: "Thapar Institute of Engineering and Technology, India" },
        { name: "Dr. Hitesh Kumar Sharma", affiliation: "UPES, India" },
        { name: "Dr. Jaswinder Singh", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Soumik Das", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Dr. Soumyabrata Chakrabarty", affiliation: "IIT, India" },
        { name: "Dr. Debrup Chakraborty", affiliation: "Indian Statistical Institute (ISI), India" },
        { name: "Mr. Karuna Nidhan Upadhyay", affiliation: "Assistant Director (Cyber Forensic), Directorate of Forensic Science and Laboratory, India" },
    ],
    publicityChairs: [
        { name: "Dr. Amit Agrawal", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Manali", affiliation: "Associate Professor, IILM University, Greater Noida" },
    ],
    publicityCoChairs: [
        { name: "Dr. Sumit Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Gaurav Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Saurabh Shanu", affiliation: "IILM University, India" },
    ],
    financeChair: [
        { name: "Dr. Sandeep Saxena", affiliation: "Professor, IILM University, Greater Noida" },
    ],
    financeCoChairs: [
        { name: "Dr. Akash Punhani", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Vikas Kamra", affiliation: "Associate Professor, IILM University, Greater Noida" },
    ],
    digitalMediaChairs: [
        { name: "Dr. Lalita Chaudhary", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Pranav Shrivastav", affiliation: "Assistant Professor, IILM University, Greater Noida" },
    ],
    digitalMediaCoChairs: [
        { name: "Dr. Monika Kumari", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Nayan Kumar Sarkar", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Swati Vashisht", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Prakhar Consul", affiliation: "Assistant Professor, IILM University, Greater Noida" },
    ],
    coordinationCommittee: [
        { name: "Dr. Udai Bhan Trivedi (Chair)", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Harshal Patil", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. A K Rastogi", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Rani Kumari", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Sumit Singh Dhanda", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Sahil Kansal", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Gunjan Mittal Roy", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Neeraj Pratap", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Ajay Kumar", affiliation: "Associate Professor, IILM University, Greater Noida" },
        { name: "Dr. Mudita", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Vijaya Choudhary", affiliation: "Assistant Professor, IILM University, Greater Noida" },
    ],
};

const Community = () => {
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
                            to="/submission"
                            className="hidden lg:block relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 group text-slate-600 hover:text-slate-950"
                        >
                            Submissions
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
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]"
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Organizing Committee</h1>
                        <p className="text-lg text-slate-400 max-w-2xl font-light">
                            Meet the distinguished academicians, researchers, and industry leaders driving the International Conference on AI Based Cyber Resilience (ICABCR-2026).
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12">

                    <CommitteeSection title="Chief Patrons" icon={<Award size={20} />} members={COMMITTEE_DATA.chiefPatrons} />
                    <CommitteeSection title="Patrons" icon={<Award size={20} />} members={COMMITTEE_DATA.patrons} />
                    <CommitteeSection title="General Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.generalChairs} />
                    <CommitteeSection title="Organizing Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.organizingChairs} />
                    <CommitteeSection title="Organizing Co-Chairs" icon={<Users size={20} />} members={COMMITTEE_DATA.organizingCoChairs} />
                    <CommitteeSection title="Convenor" icon={<Users size={20} />} members={COMMITTEE_DATA.convenor} />
                    <CommitteeSection title="Secretary" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.secretaries} />
                    <CommitteeSection title="Secretary (Technical Program)" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.secretaryTechnicalProgram} />
                    <CommitteeSection title="Technical Program Committee (Chair)" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.technicalProgramChair} />
                    <CommitteeSection title="Technical Program Committee (Co-Chairs)" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.technicalProgramCoChairs} />
                    <CommitteeSection title="Media, Outreach and Artefacts (Chairs)" icon={<Share2 size={20} />} members={COMMITTEE_DATA.mediaOutreachChairs} />
                    <CommitteeSection title="Registration Committee (Chair)" icon={<Users size={20} />} members={COMMITTEE_DATA.registrationChairs} />
                    <CommitteeSection title="Registration Committee (Co-Chair)" icon={<Users size={20} />} members={COMMITTEE_DATA.registrationCoChairs} />
                    <CommitteeSection title="Finance Committee (Chairs)" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.financeChairs} />
                    <CommitteeSection title="Execution and Coordination Committee (Chairs)" icon={<Users size={20} />} members={COMMITTEE_DATA.executionCoordinationChairs} />
                    <CommitteeSection title="Execution and Coordination Committee (Members)" icon={<Users size={20} />} members={COMMITTEE_DATA.executionCoordinationMembers} />
                    <CommitteeSection title="Sponsorship Committee (Chairs)" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.sponsorshipChairs} />
                    <CommitteeSection title="Sponsorship Committee (Co-Chairs)" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.sponsorshipCoChairs} />

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

export default Community;
