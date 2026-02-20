import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const conditions = [
    { name: "Upper Back & Neck Pain", icon: "🤕", desc: "Whiplash, stiff neck, tension headaches." },
    { name: "Lower Back Pain", icon: "🧍", desc: "Sciatica, slipped discs, localized pain." },
    { name: "Shoulder & Arm", icon: "💪", desc: "Frozen shoulder, rotator cuff, tennis elbow." },
    { name: "Hip, Knee & Leg", icon: "🦵", desc: "Arthritis pain, runners knee, sports injuries." },
    { name: "Pregnancy Pain", icon: "🤰", desc: "Pelvic girdle pain, lower back aches." },
    { name: "Sports Injuries", icon: "🏃", desc: "Sprains, strains, muscle tears." },
];

export function PainMap() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Where does it hurt?
                    </h2>
                    <p className="text-lg text-slate-600">
                        We specialize in diagnosing and treating a wide variety of musculoskeletal conditions. Find your pain point below to learn how we can help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl mb-6 relative z-10 group-hover:scale-110 transition-transform">
                                {condition.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                                {condition.name}
                            </h3>
                            <p className="text-slate-600 mb-6 relative z-10 h-12">
                                {condition.desc}
                            </p>

                            <Link href="/services" className="inline-flex items-center text-primary font-semibold text-sm group/link relative z-10">
                                Treatment Options
                                <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                            </Link>

                            {/* Decorative hover effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
