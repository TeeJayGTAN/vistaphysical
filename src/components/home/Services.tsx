import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const services = [
    {
        title: "Osteopathy",
        description: "Expert diagnosis and treatment for musculoskeletal pain. We don't just crack backs; we find the root cause of your pain.",
        features: ["Consultations", "Targeted Treatment", "Emergency Pain Relief"],
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
        link: "/services#osteopathy"
    },
    {
        title: "Massage by Bronyia",
        description: "Specialized clinical massage therapy tailored to your specific needs, whether for relaxation, sports recovery, or deep tissue healing.",
        features: ["Deep Tissue", "Sports Massage", "Pregnancy & Thai"],
        image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
        link: "/services#massage"
    },
    {
        title: "Medical Acupuncture",
        description: "An evidence-based approach to relieve muscle tension, reduce inflammation, and promote the body's natural healing process.",
        features: ["Pain Relief", "Muscle Tension Release", "Improved Circulation"],
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
        link: "/services#acupuncture"
    }
];

export function Services() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            Expert Treatments
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our multidisciplinary approach ensures you receive the most effective treatment for your specific condition.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex">
                        View All Services
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8 mt-auto">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-center text-sm font-medium text-slate-700">
                                            <CheckCircle2 size={18} className="text-primary mr-3 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href={service.link} className="inline-block w-full">
                                    <Button variant="outline" className="w-full group/btn">
                                        Learn More
                                        <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
