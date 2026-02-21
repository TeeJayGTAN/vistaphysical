import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-slate-50 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-8 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                            <ShieldCheck size={16} className="text-primary" />
                            Sunderland&apos;s Trusted Osteopathy & Massage Clinic
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                            For all your body&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-500">Aches & Pains</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg">
                            <strong className="text-slate-900 font-semibold">Diagnose • Treat • Cure.</strong> Don&apos;t just manage your pain. Join thousands of patients living active, pain-free lives with our expert treatments.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" variant="accent" className="group text-lg w-full sm:w-auto shadow-xl shadow-accent/20">
                                Book Appointment
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg">
                                View Our Treatments
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-8 flex items-center gap-6 overflow-hidden">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-amber-400">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-slate-600">
                                    <strong className="text-slate-900">100/100</strong> Reputation Score
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image / Hero Graphic */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="relative pb-[110%] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                // src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                                src="/hero.jpg"
                                alt="Osteopathy Treatment Session"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 animate-fade-in-up">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Emergency Pain Relief</h3>
                                        <p className="text-sm text-slate-500">Same day appointments available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
