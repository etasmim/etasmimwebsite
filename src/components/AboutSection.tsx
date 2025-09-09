import { motion } from "framer-motion";
import { Briefcase, Palette, Globe, Code2, Star, Award } from "lucide-react";

const AboutSection = () => {
    const stats = [
        { number: "6+", label: "سنوات من الخبرة", color: "text-primary" },
        { number: "50+", label: "مشروع منجز", color: "text-secondary" },
        { number: "100%", label: "رضا العملاء", color: "text-primary" },
        { number: "24/7", label: "دعم مستمر", color: "text-secondary" }
    ];

    const services = [
        {
            icon: <Palette className="w-8 h-8" />,
            title: "التصميم الإبداعي",
            desc: "نصمم هويات بصرية فريدة وتجارب مستخدم استثنائية تعكس جوهر علامتك التجارية",
            gradient: "from-blue-500/20 to-purple-500/20",
            iconColor: "text-primary",
            borderGlow: "hover:shadow-glow"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "تطوير المواقع",
            desc: "نبني مواقع ويب متطورة ومتجاوبة باستخدام أحدث التقنيات والمعايير العالمية",
            gradient: "from-amber-500/20 to-orange-500/20",
            iconColor: "text-secondary",
            borderGlow: "hover:shadow-secondary-glow"
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "الحلول المخصصة",
            desc: "نقدم حلولاً تقنية مخصصة تناسب احتياجاتك الفريدة وتساعد في نمو أعمالك",
            gradient: "from-emerald-500/20 to-teal-500/20",
            iconColor: "text-emerald-500",
            borderGlow: "hover:shadow-glow"
        }
    ];

    return (
        <section id="about" className="relative py-32 overflow-hidden">
            {/* خلفية متحركة */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float" />
            </div>

            {/* شبكة خلفية */}
            <div className="absolute inset-0 -z-10 opacity-[0.02]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.foreground)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.foreground)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
                    >
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">من نحن</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
                            نبدع
                        </span>
                        <br />
                        <span className="text-foreground">لتتميز</span>
                    </motion.h2>

                    <motion.p
                        className="max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        في <span className="font-bold text-primary">Etasmim</span> نجمع بين
                        <span className="font-bold text-secondary mx-2">الإبداع والتقنية</span>
                        لنقدم حلولاً رقمية متكاملة تساعد علامتك التجارية على التألق في العالم الرقمي
                    </motion.p>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="relative">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 transition-all duration-300 group-hover:scale-110">
                                    <span className={`${stat.color} drop-shadow-lg`}>{stat.number}</span>
                                </div>
                                <p className="text-muted-foreground font-medium">{stat.label}</p>
                                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${stat.color.replace('text-', 'bg-')} group-hover:w-full transition-all duration-300`} />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className={`relative group p-8 rounded-3xl backdrop-blur-lg bg-gradient-to-br ${service.gradient} border border-white/10 transition-all duration-500 ${service.borderGlow}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * i, duration: 0.7 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            {/* خلفية متدرجة */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* أيقونة */}
                            <div className={`inline-flex p-4 rounded-2xl ${service.iconColor} bg-current/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* المحتوى */}
                            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {service.desc}
                            </p>

                            {/* مؤشر الزاوية */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                        <Award className="w-6 h-6" />
                        <span>ابدأ مشروعك معنا اليوم</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;