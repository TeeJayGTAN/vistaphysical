import { Button } from "@/components/ui/Button";
import { PhoneCall } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
                    {/* Background image overlay */}
                    <div className="absolute inset-0 opacity-20 hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-0"></div>

                    <div className="relative z-10 px-6 py-16 sm:p-20 lg:p-24 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/50 text-accent font-semibold text-sm">
                                New Patient Offer
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                £10 Off Your First <br /> Treatment With Us
                            </h2>

                            <p className="text-slate-300 text-lg sm:text-xl max-w-lg leading-relaxed">
                                Isn't it time you finally got your body's aches and pains CURED for good? Claim your voucher today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" variant="accent" className="text-lg shadow-lg shadow-accent/20">
                                    Claim Offer & Book
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg border-white/20 text-white hover:bg-white hover:text-slate-900">
                                    <PhoneCall size={18} className="mr-2" />
                                    Call 0191 565 8886
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
