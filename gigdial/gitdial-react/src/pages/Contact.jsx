import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, Clock, Building, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactItem = ({ icon: Icon, title, value, subtext, color }) => (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-300">
        <div className={`w-12 h-12 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center text-${color.replace('bg-', '')}-600 mb-4`}>
            <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg text-dark-surface mb-1">{title}</h3>
        <p className="text-primary font-semibold mb-1 text-sm md:text-base leading-snug">{value}</p>
        <p className="text-sm text-slate-500">{subtext}</p>
    </div>
);

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-20">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-dark-surface mb-6"
                    >
                        We're here to help you.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500"
                    >
                        Have a question about our services, subscription plans, or support? Contact us today.
                    </motion.p>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
                    <ContactItem
                        icon={Mail}
                        title="Email Support"
                        value="support@gigdial.com"
                        subtext="Alternative: gigdial@gmail.com"
                        color="bg-blue-500"
                    />
                    <ContactItem
                        icon={Clock}
                        title="Business Hours"
                        value="Mon-Sat: 09:00 AM – 06:00 PM"
                        subtext="Closed on Sundays & National Holidays"
                        color="bg-purple-500"
                    />
                    <ContactItem
                        icon={MapPin}
                        title="Registered Office"
                        value="Naroda Kubernagar, Ahmedabad"
                        subtext="Shop No. 9, Murli Manohar Complex, Ahmedabad, Gujarat"
                        color="bg-green-500"
                    />
                </div>

                {/* Form & Company Details Section */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
                    
                    {/* Company Details Side */}
                    <div className="lg:w-5/12 bg-dark relative p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-900 opacity-90 z-0"></div>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 z-0"></div>

                        <div className="relative z-10 space-y-8">
                            <div>
                                <h3 className="text-3xl font-display font-bold mb-4">Company Details</h3>
                                <p className="text-slate-300 leading-relaxed text-sm">
                                    GigDial Private Limited is a technology-enabled local services marketplace connecting users with skilled service professionals.
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-6 space-y-4">
                                <div className="flex items-start gap-4">
                                    <Building size={20} className="text-indigo-300 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-300">Corporate Identity</h5>
                                        <p className="text-sm font-semibold">CIN: U82990GJ2026PTC178384</p>
                                        <p className="text-sm font-semibold">GSTIN: 24AANCG0880E1ZP</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Users size={20} className="text-indigo-300 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-300">Directors</h5>
                                        <p className="text-sm">Mr. Jitendra Singh</p>
                                        <p className="text-sm">Mr. Bhupendra Singh</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Shield size={20} className="text-indigo-300 mt-1 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-sm text-slate-300">Grievance Redressal</h5>
                                        <p className="text-sm">Officer: Grievance Cell</p>
                                        <p className="text-sm">Email: support@gigdial.com</p>
                                        <p className="text-xs text-slate-300 italic">Response Time: Within 7 Business Days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-6 border-t border-white/10 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <MessageSquare size={18} />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm">Need Fast Assistance?</h5>
                                <p className="text-xs text-slate-300">Reach out via support@gigdial.com for inquiries.</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-7/12 p-8 md:p-12">
                        <h3 className="text-2xl font-bold font-display text-dark-surface mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-surface">First Name</label>
                                    <input type="text" placeholder="John" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-surface">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark-surface">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-dark-surface">Message</label>
                                <textarea rows="4" placeholder="How can we help you?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea>
                            </div>

                            <button type="button" className="btn-primary w-full py-4 text-lg rounded-xl flex items-center justify-center gap-2 group">
                                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
