import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Eye, Award, Sparkles, Building, Mail, CheckCircle2, MapPin } from 'lucide-react';
import CMSContent from '../components/Common/CMSContent';

const ValueCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-card-hover transition-all cursor-default group"
    >
        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Icon size={28} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-display font-bold text-dark-surface mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

const About = () => {
    const keyFeatures = [
        "Direct Customer-to-Professional Connection",
        "45+ Service Categories",
        "No Commission on Worker Earnings",
        "Affordable Service Discovery",
        "Increased Digital Opportunities for Local Workers",
        "Fast and Convenient Access to Local Services"
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-white border-b border-slate-100">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/30 to-transparent -z-10"></div>
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                            <Sparkles size={12} className="text-primary" /> About GigDial
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-dark-surface mb-8 tracking-tight leading-tight">
                            Simplifying Local Services. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Empowering Workers.</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            GigDial Private Limited is a technology-enabled local services marketplace that connects customers with skilled service professionals across 45+ service categories, including plumbers, electricians, carpenters, painters, AC technicians, cleaners, appliance repair experts, and many other local professionals.
                        </p>
                        <p className="text-md text-slate-500 leading-relaxed max-w-3xl mx-auto mt-4">
                            Our platform is designed to simplify local service discovery by enabling direct connections between customers and service providers, helping both parties communicate and transact more efficiently. GigDial aims to empower local skilled workers by providing digital visibility and business opportunities while helping customers access trusted, affordable, and convenient local services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Target size={28} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-dark-surface mb-4">Our Mission</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    To empower local skilled professionals by providing digital business opportunities while enabling customers to access trusted, affordable, and direct local services.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                                    <Eye size={28} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-dark-surface mb-4">Our Vision</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    To become India's most trusted and accessible local services marketplace by creating a transparent and sustainable ecosystem for both customers and service professionals.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why GigDial & Benefits */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-surface mb-4">Why GigDial?</h2>
                        <p className="text-lg text-slate-500">Creating value for both customers and service professionals.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {keyFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                            >
                                <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={22} />
                                <span className="font-semibold text-slate-700 text-base">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate & Registration Info */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                                    <Building className="text-indigo-400" size={24} /> Corporate Information
                                </h3>
                                <div className="space-y-4 text-slate-300 text-sm">
                                    <p><strong className="text-white block">Company Name</strong> GigDial Private Limited</p>
                                    <p><strong className="text-white block">Corporate Identity Number (CIN)</strong> U82990GJ2026PTC178384</p>
                                    <p><strong className="text-white block">GSTIN</strong> 24AANCG0880E1ZP</p>
                                    <p><strong className="text-white block">Directors</strong> Mr. Jitendra Singh <br /> Mr. Bhupendra Singh</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-display mb-6 flex items-center gap-2">
                                    <MapPin className="text-indigo-400" size={24} /> Registered Office
                                </h3>
                                <div className="space-y-4 text-slate-300 text-sm">
                                    <p>
                                        Shop No. 9, Murli Manohar Complex,<br />
                                        Naroda Kubernagar,<br />
                                        Ahmedabad, Gujarat, India
                                    </p>
                                    <div className="pt-4 border-t border-slate-800 space-y-2">
                                        <p className="flex items-center gap-2">
                                            <Mail size={16} className="text-indigo-400" />
                                            <span>support@gigdial.com</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Mail size={16} className="text-indigo-400" />
                                            <span>gigdial@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promise / Call to Action */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-6 max-w-2xl">
                    <Award size={48} className="text-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-surface mb-4">Our Promise</h2>
                    <p className="text-xl text-primary font-bold mb-8">Empowering Skilled Professionals. Simplifying Local Services.</p>
                    <div className="flex justify-center gap-4">
                        <a href="/workers" className="btn-primary px-8 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">Browse Workers</a>
                        <a href="/services" className="btn-secondary px-8 py-4 bg-slate-50">Explore Services</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
