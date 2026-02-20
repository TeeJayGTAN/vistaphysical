import { Button } from "@/components/ui/Button";
import { PhoneCall, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export const metadata = {
    title: 'Contact & Bookings | Vitaphysical Clinic Sunderland',
    description: 'Book your appointment today. Same day emergency pain relief available. Call 0191 565 8886 or visit us in Sunderland.',
};

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                        Contact & Bookings
                    </h1>
                    <p className="text-lg text-slate-300">
                        Ready to live pain-free? Get in touch with our friendly team to secure your appointment.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Information & Booking */}
                        <div className="space-y-12">
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                    <PhoneCall size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Call Us Directly</h2>
                                <p className="text-slate-600 mb-8">
                                    The fastest way to book an appointment, especially for emergency pain relief.
                                </p>
                                <a href="tel:01915658886" className="text-4xl font-black text-primary hover:text-primary/80 transition-colors">
                                    0191 565 8886
                                </a>
                                <p className="text-sm text-slate-500 mt-4">Available during clinic hours</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Mail className="text-primary mb-4" size={24} />
                                    <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                                    <a href="mailto:info@vitaphysical.co.uk" className="text-slate-600 hover:text-primary transition-colors hover:underline">
                                        info@vitaphysical.co.uk
                                    </a>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <Clock className="text-primary mb-4" size={24} />
                                    <h3 className="font-bold text-slate-900 mb-2">Opening Hours</h3>
                                    <ul className="text-sm text-slate-600 space-y-1">
                                        <li><span className="font-medium text-slate-900">Mon - Fri:</span> 7:45 AM - 7:00 PM</li>
                                        <li><span className="font-medium text-slate-900">Sat:</span> 7:45 AM - 1:00 PM</li>
                                        <li><span className="font-medium text-slate-900">Sun:</span> Closed</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-primary text-center">Book Online</h2>
                                <p className="text-slate-600 text-center mb-8">Prefer to book digitally? Click below to access our secure online booking portal.</p>
                                <Button size="lg" variant="accent" className="w-full text-lg shadow-lg shadow-accent/20">
                                    Access Booking Portal <ExternalLink size={18} className="ml-2" />
                                </Button>
                            </div>
                        </div>

                        {/* Location & Map */}
                        <div className="space-y-8">
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex items-start gap-6">
                                <div className="p-4 bg-primary/20 text-primary rounded-2xl shrink-0">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Clinic Location</h2>
                                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                        14 Stockton Terrace<br />
                                        Grangetown<br />
                                        Sunderland<br />
                                        SR2 9RQ
                                    </p>
                                    <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 hover:text-white">
                                        Get Directions
                                    </Button>
                                </div>
                            </div>

                            {/* Fake Map Embed (Placeholder for real Google Maps iframe) */}
                            <div className="w-full h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-sm relative group">
                                {/* Embed an actual iframe pointing to Sunderland SR2 9RQ */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.4936353272!2d-1.37033!3d54.89311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDUzJzM1LjIiTiAxwrAyMicxMy4yIlc!5e0!3m2!1sen!2suk!4v1614000000000!5m2!1sen!2suk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
