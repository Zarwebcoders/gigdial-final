import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ShieldAlert, Calendar } from 'lucide-react';

const Terms = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl mb-6 shadow-sm">
                        <FileText size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Terms & Conditions</h1>
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
                                By accessing or using the GigDial platform, you agree to comply with and be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 1 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">1</span>
                                Platform Overview
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial Private Limited operates a technology-enabled marketplace that facilitates connections between customers and independent service professionals.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600 text-sm italic">
                                GigDial does not directly provide plumbing, electrical, carpentry, painting, AC repair, cleaning, appliance repair, or any other listed services. We are solely a facilitator.
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">2</span>
                                User Eligibility & Responsibilities
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Users must provide accurate information and comply with all applicable local, state, and national laws while using the platform.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">For Customers:</h4>
                                    <ul className="space-y-1.5 text-sm text-slate-600 list-disc pl-4">
                                        <li>Submit genuine service requests</li>
                                        <li>Provide accurate location & information</li>
                                        <li>Communicate respectfully with workers</li>
                                        <li>Independently evaluate providers before hiring</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">For Professionals:</h4>
                                    <ul className="space-y-1.5 text-sm text-slate-600 list-disc pl-4">
                                        <li>Maintain accurate profile information</li>
                                        <li>Provide lawful and professional services</li>
                                        <li>Respond appropriately to customer inquiries</li>
                                        <li>Comply with applicable local regulations</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">3</span>
                                Subscription Services & Billing
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Certain platform features may require paid subscriptions. GigDial reserves the right to modify subscription plans, pricing, features, and benefits at its sole discretion.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Online payments are processed through authorized third-party payment providers (like Razorpay). By making a payment, users confirm that:
                            </p>
                            <ul className="space-y-1 pl-4 list-disc text-sm text-slate-600">
                                <li>Payment information provided is accurate and complete.</li>
                                <li>They are authorized to use the selected payment method.</li>
                                <li>Payment is being made voluntarily for the selected subscription plan.</li>
                            </ul>
                            <p className="text-slate-500 text-xs italic">
                                GigDial shall not be responsible for payment gateway failures, banking delays, or third-party technical issues.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 4 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">4</span>
                                Lead Delivery & Policies
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial facilitates customer inquiries and lead distribution. Lead availability may vary based on location, service category, market demand, profile quality, and customer requirements.
                            </p>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-900 text-sm">
                                <strong>Important Note:</strong> GigDial does not guarantee project confirmation, service completion, job conversion, or earnings from any lead delivered through the platform.
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 5 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">5</span>
                                Prohibited Activities & Account Suspension
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Users shall not create fake accounts, submit false information, engage in fraudulent activities, abuse platform features, harass other users, or violate applicable laws.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial reserves the right to suspend or terminate any account involved in policy violations, fraud, abuse, or misuse. No refund shall be provided for accounts suspended due to policy violations.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 6 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">6</span>
                                Limitation of Liability & Updates
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial acts solely as a marketplace facilitator. GigDial shall not be liable for service quality issues, pricing disputes, property damage, personal injury, delays in service delivery, or disputes between customers and service professionals.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We reserve the right to update these Terms & Conditions at any time. Changes will be reflected on this page.
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

export default Terms;
