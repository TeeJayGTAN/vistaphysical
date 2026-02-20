"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        text: "After suffering from severe lower back pain for months, Jason was able to diagnose and treat it within a few sessions. I'm finally able to run again without pain!",
        service: "Osteopathy Patient",
        rating: 5
    },
    {
        name: "Mark T.",
        text: "Bronyia's deep tissue massage is life-changing. She found knots I didn't even know I had. Highly recommend to anyone with sports injuries.",
        service: "Massage Client",
        rating: 5
    },
    {
        name: "Emma W.",
        text: "The emergency appointment saved me. I woke up with a stiff neck and they fitted me in the same day. Incredible service and immediate relief.",
        service: "Emergency Patient",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Patient Success Stories
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Don't just take our word for it. Here's what our patients have to say about their recovery journey with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="flex text-amber-400 mb-6">
                                {[...Array(t.rating)].map((_, j) => (
                                    <Star key={j} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-lg leading-relaxed mb-8 italic">
                                "{t.text}"
                            </p>
                            <div>
                                <p className="font-bold text-lg">{t.name}</p>
                                <p className="text-sm text-primary-foreground/70">{t.service}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
