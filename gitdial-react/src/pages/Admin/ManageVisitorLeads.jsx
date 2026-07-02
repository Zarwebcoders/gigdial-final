import React, { useState, useEffect } from 'react';
import { Search, Loader, Calendar, Phone, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const ManageVisitorLeads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useAuth();

    const fetchLeads = async () => {
        try {
            const response = await fetch('/api/visitor-leads', {
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (Array.isArray(data)) {
                setLeads(data);
            }
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch visitor leads:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.token) {
            fetchLeads();
        }
    }, [user]);

    const filteredLeads = leads.filter(l => {
        const query = searchTerm.toLowerCase();
        return (
            l.name?.toLowerCase().includes(query) ||
            l.phone?.toLowerCase().includes(query)
        );
    });

    return (
        <div className="space-y-8 font-inter">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-1">
                <div>
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-800 tracking-tight">Visitor Leads</h1>
                    <p className="text-slate-500 mt-1 text-base md:text-lg font-medium">View captured name and mobile number details of {leads.length} anonymous site visitors.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative group w-full md:w-64">
                        <div className="absolute inset-x-0 bottom-0 top-0 bg-blue-100 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative bg-white rounded-xl shadow-sm border border-slate-200 flex items-center px-4 py-2.5 w-full focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all font-bold">
                            <Search className="text-slate-400 mr-3" size={18} />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-transparent border-none outline-none text-slate-700 font-bold placeholder:text-slate-400 w-full text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-80"></div>

                <div className="overflow-x-auto min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center h-96 gap-4 text-slate-400">
                            <Loader className="animate-spin text-blue-500" size={40} />
                            <p className="font-medium animate-pulse">Loading leads...</p>
                        </div>
                    ) : (
                        <div className="inline-block min-w-full align-middle">
                            <table className="min-w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50">
                                        <th className="px-6 md:px-8 py-5 font-bold text-slate-600 text-[10px] md:text-sm uppercase tracking-wider">Visitor Details</th>
                                        <th className="px-6 md:px-8 py-5 font-bold text-slate-600 text-[10px] md:text-sm uppercase tracking-wider">Mobile Number</th>
                                        <th className="px-6 md:px-8 py-5 font-bold text-slate-600 text-[10px] md:text-sm uppercase tracking-wider">Captured Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <AnimatePresence>
                                        {filteredLeads.length > 0 ? (
                                            filteredLeads.map((lead, index) => (
                                                <motion.tr
                                                    key={lead._id}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="hover:bg-blue-50/30 transition-colors group"
                                                >
                                                    <td className="px-6 md:px-8 py-4">
                                                        <div className="flex items-center gap-3 md:gap-4 font-bold">
                                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-inner">
                                                                <UserIcon size={20} />
                                                            </div>
                                                            <div className="font-bold text-slate-900 text-sm md:text-base">{lead.name || 'N/A'}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 md:px-8 py-4">
                                                        <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                                                            <Phone size={16} className="text-blue-500" />
                                                            <span>{lead.phone}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 md:px-8 py-4">
                                                        <div className="flex items-center gap-2 text-slate-600 text-[10px] md:text-sm font-medium whitespace-nowrap">
                                                            <Calendar size={16} className="text-slate-400" />
                                                            {new Date(lead.createdAt).toLocaleString()}
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="text-center py-20 text-slate-400 font-bold">
                                                    No visitor leads found matching "{searchTerm}"
                                                </td>
                                            </tr>
                                        )}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageVisitorLeads;
