import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle2, XCircle, Calendar, ShieldCheck } from 'lucide-react';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl mb-6 shadow-sm">
                        <RefreshCw size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Refund & Cancellation Policy</h1>
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
                                This policy governs subscription-related refunds and cancellations for service professionals using the GigDial platform. Please read this policy carefully before purchasing any subscription plan.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 1 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">1</span>
                                Subscription Model & Lead Guarantee
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                GigDial operates on a subscription-based model through which service professionals may access customer inquiries and business opportunities.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Lead Guarantee Policy:</strong> GigDial may review refund requests if <strong>no valid lead</strong> has been delivered during an active subscription period. A "valid lead" is defined as a genuine customer inquiry received through the GigDial platform for your registered category and location.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 2 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">2</span>
                                Refund Eligibility
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                To qualify for a refund review, the service professional must meet all of the following criteria:
                            </p>
                            <ul className="space-y-2 pl-4 list-none text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={18} />
                                    <span>Subscription must have remained active throughout the entire billing period.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={18} />
                                    <span>Profile information (including skills, address, identity documentation) must be fully complete and accurate.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={18} />
                                    <span>No valid lead of any kind must have been delivered to the user during the active period.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 mt-0.5 shrink-0" size={18} />
                                    <span>The account must fully comply with all other platform terms and policies.</span>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 3 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">3</span>
                                Non-Refundable Situations
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Refunds will strictly <strong>not</strong> be granted in the following scenarios:
                            </p>
                            <ul className="space-y-2 pl-4 list-none text-slate-600">
                                <li className="flex items-start gap-2">
                                    <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                                    <span>One or more valid leads have been delivered to the profile.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                                    <span>The worker failed to respond to or connect with customer inquiries.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                                    <span>False or misleading profile or identity information was provided.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                                    <span>Any other GigDial policies or rules were violated.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <XCircle className="text-red-500 mt-0.5 shrink-0" size={18} />
                                    <span>The request is based solely on customer hiring decisions or general market demand conditions.</span>
                                </li>
                            </ul>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 4 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">4</span>
                                Cancellation & Duplicate Payments
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Cancellation Policy:</strong> Users may discontinue future subscription renewals at any time via their profile settings. Discontinuing future renewals does not automatically qualify you for a refund of past or active payments.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                <strong>Duplicate Payments:</strong> If a user is charged multiple times due to a gateway error or technical issue, GigDial will verify the transaction logs and process a refund for any eligible excess payments.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Section 5 */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-display text-slate-900 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">5</span>
                                Processing & Decisions
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Approved refunds shall be processed back to the original payment method. The processing timeframe typically takes <strong>5 to 15 business days</strong> depending on your bank or payment gateway provider (e.g. Razorpay).
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start">
                                <ShieldCheck size={20} className="text-primary mt-1 shrink-0" />
                                <p className="text-sm font-semibold text-slate-700">
                                    Final Decision: GigDial Private Limited reserves the right to verify all refund requests and make the final, binding decision regarding refund eligibility.
                                </p>
                            </div>
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

export default RefundPolicy;
