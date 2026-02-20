import { Button } from "@/components/ui/Button";
import { Award, HeartPulse, GraduationCap, MapPin } from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata = {
    title: 'About Us | Jason & Bronyia at Vitaphysical Sunderland',
    description: 'Meet Jason and Bronyia. Learn about our clinic\'s history, our philosophy of "Diagnose, Treat, Cure," and our professional credentials.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-slate-50 py-20 relative overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                        Meet the Team
                    </h1>
                    <p className="text-lg text-slate-600">
                        A family-run clinic dedicated to helping the people of Sunderland live active, pain-free lives.
                    </p>
                </div>
            </section>

            {/* The Founders Story */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm">
                                Our Story
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                Jason & Bronyia
                            </h2>
                            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Welcome to VitaPhysical! We are Jason and Bronyia, the founders and core practitioners of Sunderland's premier osteopathy and massage clinic.
                                </p>
                                <p>
                                    Our journey began with a shared passion for health and wellbeing. We realized that too many clinics focus merely on "managing" pain, prescribing endless appointments with no clear end goal. We wanted to change that.
                                </p>
                                <p>
                                    We established VitaPhysical with a single, clear mission: <strong>To Diagnose, Treat, and CURE.</strong> We want to fix the root cause of your pain so you can get back to doing the things you love.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                                alt="Jason and Bronyia Clinic Team"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                                <p className="font-bold text-slate-900 text-center">Over 10+ Years Serving Sunderland</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy & Credentials */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <HeartPulse size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Cure, Don't Manage</h3>
                            <p className="text-slate-400">
                                Our ultimate goal is to get you out of our clinic and back to your life. We aim for permanent solutions, not endless dependency.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-amber-400 mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold">Award-Winning Care</h3>
                            <p className="text-slate-400">
                                Highly rated by our patients with a 100/100 reputation score. We pride ourselves on exceptional patient outcomes.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-xl font-bold">GOsC Registered</h3>
                            <p className="text-slate-400">
                                Fully certified and registered with the General Osteopathic Council, guaranteeing the highest standard of professional, safe care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location teaser */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <MapPin size={48} className="mx-auto text-primary mb-6" />
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Clinic</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Conveniently located at 14 Stockton Terrace, Grangetown, Sunderland. We offer early morning and late evening appointments to fit around your busy schedule.
                    </p>
                    <a href="/contact" className="inline-block">
                        <Button variant="outline" size="lg">View Map & Directions</Button>
                    </a>
                </div>
            </section>

            <CTA />
        </div>
    );
}
