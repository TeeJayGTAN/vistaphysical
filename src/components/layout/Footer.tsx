import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Intro */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="font-bold text-2xl text-white">VitaPhysical</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Diagnose, Treat & Cure your Body&apos;s Aches and Pains. Join thousands of patients living pain-free lives with our expert Osteopathy and Massage services.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Treatments & Services</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/prices" className="hover:text-primary transition-colors">Prices & Offers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span>14 Stockton Terrace, Grangetown, <br />Sunderland, SR2 9RQ</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-primary shrink-0" size={20} />
                                <a href="tel:01915658886" className="hover:text-white transition-colors">0191 565 8886</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-primary shrink-0" size={20} />
                                <a href="mailto:info@vitaphysical.co.uk" className="hover:text-white transition-colors">info@vitaphysical.co.uk</a>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Times */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Opening Hours</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <span className="flex gap-2 items-center"><Clock size={16} /> Mon - Fri</span>
                                <span className="font-medium text-white">7:45 AM - 7:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                                <span className="flex gap-2 items-center"><Clock size={16} /> Saturday</span>
                                <span className="font-medium text-white">7:45 AM - 1:00 PM</span>
                            </li>
                            <li className="flex justify-between items-center pb-2">
                                <span className="flex gap-2 items-center"><Clock size={16} /> Sunday</span>
                                <span className="font-medium text-accent">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {currentYear} VitaPhysical Clinic Sunderland. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
