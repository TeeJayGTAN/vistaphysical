import { Button } from "@/components/ui/Button";
import { CheckCircle2, CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CTA } from "@/components/home/CTA";

export const metadata = {
    title: 'Treatments & Services | Vitaphysical Clinic Sunderland',
    description: 'Explore our expert treatments: Osteopathy, specialized Massage Therapy, and Medical Acupuncture. Permanent relief for your body\'s aches and pains.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Expert Treatments
                    </h1>
                    <p className="text-lg text-slate-300">
                        Comprehensive care tailored to your unique needs. We don't just treat the symptoms; we find and cure the root cause.
                    </p>
                </div>
            </section>

            {/* Osteopathy Section */}
            <section id="osteopathy" className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                                alt="Osteopathy Treatment"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                Osteopathy
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Diagnose, Treat & Cure
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Osteopathy is a highly effective way to treat a wide range of musculoskeletal conditions. Whether you're suffering from acute lower back pain, a stiff neck, or a long-term sports injury, our expert osteopaths provide targeted, hands-on treatment.
                            </p>
                            <ul className="space-y-3 py-4">
                                {["Comprehensive Initial Consultation", "Same-Day Emergency Relief Available", "Personalized Rehabilitation Plan", "Non-invasive & Medication-free"].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 size={20} className="text-primary mr-3 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="shadow-md">
                                <CalendarDays className="mr-2" size={18} /> Book Osteopathy
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Massage Section */}
            <section id="massage" className="py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 order-2 lg:order-1">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                                Massage Therapy by Bronyia
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Specialized Clinical Massage
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Not all massages are created equal. Bronyia offers clinical, specialized massage therapy that goes beyond simple relaxation. Perfect for breaking down scar tissue, improving athletic performance, or relieving chronic tension.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 py-4">
                                {[
                                    "Deep Tissue Massage",
                                    "Sports Massage",
                                    "Pregnancy Massage",
                                    "Relaxation Massage",
                                    "Thai Massage",
                                    "Full Body Treatment"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center text-slate-700 font-medium bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Button size="lg" variant="accent" className="shadow-md">
                                <CalendarDays className="mr-2" size={18} /> Book Massage
                            </Button>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] order-1 lg:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop"
                                alt="Massage Therapy"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Acupuncture Section */}
            <section id="acupuncture" className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                                alt="Medical Acupuncture"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm">
                                Medical Acupuncture
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Evidence-Based Healing
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Medical acupuncture involves inserting fine needles into specific points of the body to stimulate sensory nerves under the skin and in the muscles. This results in the body producing natural substances, such as pain-relieving endorphins.
                            </p>
                            <ul className="space-y-3 py-4">
                                {["Relieves Muscle Tension", "Reduces Inflammation", "Stimulates Healing Process", "Effective for Chronic Pain"].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 size={20} className="text-secondary-foreground mr-3 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="shadow-md bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                <CalendarDays className="mr-2" size={18} /> Book Acupuncture
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </div>
    );
}
