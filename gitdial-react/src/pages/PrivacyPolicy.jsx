import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl mb-6 shadow-sm">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <Calendar size={16} />
                        <span>Last Updated: June 24, 2026</span>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                    <div className="prose prose-slate max-w-none space-y-8">
                        
                        <div>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial Private Limited ("GigDial", "Company", "we", "our", or "us") respects the privacy of its users and is committed to protecting personal information collected through the GigDial platform.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 1 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">1</span>
                                Information We Collect
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                We may collect the following personal and device information from you:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-disc text-slate-600">
                                <li>Full Name</li>
                                <li>Mobile Number</li>
                                <li>Email Address</li>
                                <li>City and Location</li>
                                <li>Service Requirements</li>
                                <li>Worker Profile Information</li>
                                <li>Device Information</li>
                                <li>Browser Information</li>
                                <li>IP Address</li>
                                <li>Platform Usage Data</li>
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">2</span>
                                How We Use Information
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                We use the collected information for the following business and operational purposes:
                            </p>
                            <ul className="space-y-2 pl-4 list-disc text-slate-600">
                                <li>Facilitate connections between customers and service professionals</li>
                                <li>Deliver customer inquiries and leads</li>
                                <li>Verify user accounts and profiles</li>
                                <li>Improve platform performance and user experience</li>
                                <li>Provide customer support</li>
                                <li>Prevent fraud, abuse, and misuse of the platform</li>
                                <li>Comply with necessary legal and regulatory obligations</li>
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">3</span>
                                Information Sharing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial may share relevant contact and location information between customers and service professionals for the purpose of service fulfillment.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start">
                                <Lock size={20} className="text-primary mt-1 shrink-0" />
                                <p className="text-sm font-semibold text-slate-700">
                                    Privacy Guarantee: GigDial does not sell, rent, or trade your personal information to third parties under any circumstances.
                                </p>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 4 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">4</span>
                                Payment Information
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial does not store complete debit card, credit card, UPI PIN, net banking credentials, or other sensitive payment information.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Online payments are processed securely through authorized third-party payment service providers such as <strong>Razorpay</strong>. Users are encouraged to review the privacy policies of payment providers separately.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 5 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">5</span>
                                Data Security & Third-Party Services
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                We implement reasonable technical and organizational security measures to protect user information. However, no online platform can guarantee absolute security.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                The platform may contain links to third-party websites or services. GigDial is not responsible for the privacy practices of external platforms.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 6 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">6</span>
                                Policy Updates & Contact
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial reserves the right to modify this Privacy Policy at any time. Updated versions shall be published on this page and will become effective immediately upon posting.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                For any privacy-related inquiries, please contact us at: <a href="mailto:support@gigdial.com" className="text-primary font-semibold hover:underline">support@gigdial.com</a>.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Back Link */}
                <div className="text-center mt-8">
                    <a href="/" className="text-primary font-bold hover:underline">Back to Home</a>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;
