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

const CommitteeSection = ({ title, icon, members }) => (
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
        { name: "Dr. Babusena Paul", affiliation: "University of Johannesburg, South Africa" },
    ],
    organizingChairs: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University, Greater Noida (Convenor)" },
        { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Shamik Tiwari", affiliation: "IILM University, Greater Noida" },
    ],
    secretaries: [
        { name: "Dr. Saurabh Shanu", affiliation: "Secretary, IILM University, Greater Noida" },
        { name: "Dr. Kingshuk Srivastava", affiliation: "Secretary, IILM University, Greater Noida" },
        { name: "Dr. Himanshu Sharma", affiliation: "Secretary (TPC), IILM University, Greater Noida" },
    ],
    programChairs: [
        { name: "Dr. Saad Aldosary", affiliation: "Dept. of Computer Science, King Saud University, Saudi Arabia" },
        { name: "Dr. Avadhesh Kumar Gupta", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Hussain Falih Mahdi", affiliation: "Associate Professor, University of Diyala, Iraq" },
        { name: "Dr. Ved Prakash Mishra", affiliation: "Professor, Amity University Dubai" },
        { name: "Dr. Himanshu Sharma", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Lalit Kumar", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Suman Yadav", affiliation: "Assistant Professor, IILM University, Greater Noida" },
        { name: "Dr. Kamalkant Verma", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Anil Saroliya", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Kingshuk Srivastava", affiliation: "Professor, IILM University, Greater Noida" },
        { name: "Dr. Deependra Rastogi", affiliation: "Associate Professor, IILM University, Greater Noida" },
    ],
    publicationChairs: [
        { name: "Dr. Ajay Prasad", affiliation: "IILM University Greater Noida, India" },
        { name: "Dr. Alok Agarwal", affiliation: "IILM University, Greater Noida" },
        { name: "Dr. Sushabhan Chodhury", affiliation: "UPES, India" },
        { name: "Dr. Babusena Paul", affiliation: "Director, Institute For Intelligent Systems, University Of Johannesburg, South Africa" },
    ],
    internationalAdvisory: [
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
    ],
    nationalAdvisory: [
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
    ],
    technicalProgramCommittee: [
        { name: "Dr. Ved Prakash Mishra", affiliation: "Professor, Amity University Dubai" },
        { name: "Dr. Swadha Gupta", affiliation: "Shiratech Knowtion GmbH, Germany" },
        { name: "Dr. Seema Rawat", affiliation: "Associate Professor, Amity University Tashkent Uzbekistan" },
        { name: "Dr. Abdul Razaq", affiliation: "Abertay University, United Kingdom" },
        { name: "Dr. Praveen Kumar", affiliation: "Professor, Astana IT University, Kazakhstan" },
        { name: "Ms. Marcie Sonderson", affiliation: "Criminal Investigator McAfee, Missouri, USA" },
        { name: "Dr. Cheng Cheng", affiliation: "Senior Lecturer Computer Science, Swansea University, UK" },
        { name: "Dr. Madhu Khurana", affiliation: "Assistant Professor, University of Gloucestershire, UK" },
        { name: "Dr. Thinagaran A/L Perumal", affiliation: "Associate Professor, Universiti Putra, Malaysia" },
        { name: "Dr. Danish Ather", affiliation: "Associate Professor, Amity University Tashkent Uzbekistan" },
        { name: "Dr. Salim Barbhuiya", affiliation: "Professor, University of Leeds, UK" },
        { name: "Dr. Pramod Gaur", affiliation: "Senior Lecturer, Nottingham Trent University, UK" },
        { name: "Dr. Manash K. Paul", affiliation: "Scientist, Principal Investigator, UCLA" },
        { name: "Dr. Sayantan Chakraborty", affiliation: "Chairman, IAPFE-Delaware-USA" },
        { name: "Dr. Vinayakumar Ravi", affiliation: "Assistant Research Professor, Prince Mohammad Bin Fahd University, Saudi Arabia" },
        { name: "Dr. Amit Kumar Mondal", affiliation: "Assistant Professor, Manipal University Dubai UAE" },
        { name: "Dr. Santhi Raju Pilli", affiliation: "Assistant Professor, Jazan University, KSA" },
        { name: "Dr. Manoj Kumar", affiliation: "Associate Professor, University of Wollongong, Dubai, UAE" },
        { name: "Dr. Nguyen Gia Nhu", affiliation: "Professor, Duy Tan University, Da Nang, Vietnam" },
        { name: "Dr. Teoh Teik Toe", affiliation: "Professor and Academic Director, NTU Singapore" },
        { name: "Dr. Mohit Mittal", affiliation: "Shiratech Knowtion GmbH, Germany" },
        { name: "Dr. Alexander Kuiper", affiliation: "Computer Scientist at Kuiper Forensics, Germany" },
        { name: "Dr. Jung-Sup Um", affiliation: "Professor, Kyungpook National University, South Korea" },
        { name: "Ms. Jane Eliseva", affiliation: "Head Alliances, Social Links, Riga, Latvia" },
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
                        <img src={logoImg} alt="IILM Logo" className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" />
                        <span className="w-[1px] h-7 bg-slate-200"></span>
                        <img
                            src={icabcrLogo}
                            alt="ICABCR 2026"
                            className="h-9 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-all"
                        />
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
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
                    <CommitteeSection title="Secretaries" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.secretaries} />
                    <CommitteeSection title="Program (TPC) Chairs" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.programChairs} />
                    <CommitteeSection title="Publication Chairs" icon={<BookOpen size={20} />} members={COMMITTEE_DATA.publicationChairs} />
                    <CommitteeSection title="International Advisory Board" icon={<Globe size={20} />} members={COMMITTEE_DATA.internationalAdvisory} />
                    <CommitteeSection title="National Advisory Board" icon={<Globe size={20} />} members={COMMITTEE_DATA.nationalAdvisory} />
                    <CommitteeSection title="Technical Program Committee" icon={<Briefcase size={20} />} members={COMMITTEE_DATA.technicalProgramCommittee} />
                    <CommitteeSection title="Publicity Chairs" icon={<Megaphone size={20} />} members={COMMITTEE_DATA.publicityChairs} />
                    <CommitteeSection title="Publicity Co-Chairs" icon={<Megaphone size={20} />} members={COMMITTEE_DATA.publicityCoChairs} />
                    <CommitteeSection title="Finance Chair" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.financeChair} />
                    <CommitteeSection title="Finance Co-Chairs" icon={<DollarSign size={20} />} members={COMMITTEE_DATA.financeCoChairs} />
                    <CommitteeSection title="Digital Media Chairs" icon={<Share2 size={20} />} members={COMMITTEE_DATA.digitalMediaChairs} />
                    <CommitteeSection title="Digital Media Co-Chairs" icon={<Share2 size={20} />} members={COMMITTEE_DATA.digitalMediaCoChairs} />
                    <CommitteeSection title="Coordination Committee" icon={<Users size={20} />} members={COMMITTEE_DATA.coordinationCommittee} />

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
