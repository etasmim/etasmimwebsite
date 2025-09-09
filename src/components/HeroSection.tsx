import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  MotionConfig
} from "framer-motion";
import {
  Sparkles,
  Code2,
  Palette,
  Zap,
  Briefcase,
  Award,
  Menu,
  X,
  ArrowRight,
  Play,
  Mail,
  Star
} from "lucide-react";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const dynamicTitles = [
    "مصمم جرافيك محترف",
    "مطور مواقع إبداعية",
    "خبير الهوية البصرية",
    "مبدع التجارب الرقمية"
  ];

  const menuItems = [
    { name: "الرئيسية", id: "hero" },
    { name: "عنا", id: "about" },
    { name: "أعمالنا", id: "portfolio" },
    { name: "تواصل معنا", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTitle((prev) => (prev + 1) % dynamicTitles.length),
      3000
    );
    return () => clearInterval(timer);
  }, [dynamicTitles.length]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-menu-open", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-menu-open");
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const floatingElements = [
    { icon: Code2, delay: 0, x: "8%", y: "15%", color: "text-blue-500" },
    { icon: Palette, delay: 0.5, x: "88%", y: "20%", color: "text-purple-500" },
    { icon: Sparkles, delay: 1, x: "12%", y: "75%", color: "text-yellow-500" },
    { icon: Zap, delay: 1.5, x: "85%", y: "70%", color: "text-green-500" },
    { icon: Briefcase, delay: 2, x: "5%", y: "45%", color: "text-pink-500" },
    { icon: Award, delay: 2.5, x: "92%", y: "45%", color: "text-orange-500" }
  ];

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
              radial-gradient(circle at 20% 80%, rgba(22, 94, 254, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 222, 23, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(22, 94, 254, 0.05) 0%, rgba(255, 222, 23, 0.05) 100%)`
            }}
            animate={!shouldReduceMotion && {
              background: [
                `radial-gradient(circle at 20% 80%, rgba(22, 94, 254, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(255, 222, 23, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
                `radial-gradient(circle at 80% 20%, rgba(22, 94, 254, 0.2) 0%, transparent 50%),
                 radial-gradient(circle at 20% 80%, rgba(255, 222, 23, 0.2) 0%, transparent 50%),
                 radial-gradient(circle at 60% 60%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`,
                `radial-gradient(circle at 20% 80%, rgba(22, 94, 254, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(255, 222, 23, 0.15) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Orbs */}
          {!shouldReduceMotion && (
            <>
              <motion.div
                className="absolute top-1/4 right-10 w-72 h-72 rounded-full opacity-20"
                style={{ background: "linear-gradient(135deg, #165efe, #9333ea)", filter: "blur(100px)" }}
                animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full opacity-15"
                style={{ background: "linear-gradient(135deg, #ffde17, #165efe)", filter: "blur(120px)" }}
                animate={{ scale: [1, 0.8, 1], x: [0, -40, 0], y: [0, 40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
              {/* Animated Grid */}
              <motion.div className="absolute inset-0 opacity-10"
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(22, 94, 254, 0.4) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(22, 94, 254, 0.4) 1px, transparent 1px)`,
                  backgroundSize: '80px 80px'
                }} />
              </motion.div>
            </>
          )}
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 z-10">
          {floatingElements.map((el, idx) => {
            const Icon = el.icon;
            return (
              <motion.div
                key={idx}
                className="absolute hidden lg:block"
                style={{ left: el.x, top: el.y }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={!shouldReduceMotion ? {
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.8, 1.1, 0.8],
                  rotate: [0, 360],
                  y: [0, -20, 0]
                } : { opacity: 0.6 }}
                transition={{
                  delay: el.delay,
                  opacity: { duration: 3, repeat: Infinity },
                  scale: { duration: 4, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative glass p-4 rounded-2xl backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-500">
                    <Icon className={`w-6 h-6 ${el.color} transition-colors duration-500`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-50 overflow-x-clip transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-primary/10 py-2' : 'bg-transparent py-4'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          aria-label="Main Navigation"
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className={`w-auto object-contain transition-all duration-300 hover:drop-shadow-lg ${isScrolled
                  ? 'h-6 sm:h-7'
                  : 'h-7 sm:h-6 md:h-8'
                  }`}
                onError={(e) => {
                  // في حالة عدم وجود الصورة، إظهار نص بديل
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* نص بديل في حالة عدم تحميل الصورة */}
              <div
                className="hidden items-center space-x-1 space-x-reverse"
                style={{ display: 'none' }}
              >
                <h1 className={`font-bold transition-all duration-300 ${isScrolled
                  ? 'text-sm sm:text-base'
                  : 'text-base sm:text-lg'
                  }`}>
                  <span className="text-primary">Tasmim</span>
                </h1>
                <div className={`bg-gradient-to-r from-secondary to-primary rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled
                  ? 'w-5 h-5 sm:w-6 sm:h-6'
                  : 'w-6 h-6 sm:w-7 sm:h-7'
                  }`}>
                  <span className={`text-white font-bold transition-all duration-300 ${isScrolled
                    ? 'text-xs sm:text-sm'
                    : 'text-sm sm:text-base'
                    }`}>E</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-300 relative group"
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-xl glass overflow-hidden shrink-0 mr-3"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>

        {/* Mobile Side Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => scrollToSection(item.id)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                className="absolute top-6 right-6 p-3 rounded-full bg-primary text-white"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 pt-32 text-center">
          <motion.div
            className="inline-flex items-center space-x-3 space-x-reverse glass px-6 py-3 rounded-full mb-8 border border-primary/20"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            aria-label="Availability badge"
          >
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">متاح للمشاريع الجديدة</span>
            </div>
            <span className="w-px h-4 bg-border" />
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">تقييم 5.0</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span
              className="block text-foreground mb-8 text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              أهلاً بك في
            </motion.span>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {/* تأثير التوهج الخلفي */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-blue-600/30 to-primary/30 rounded-3xl blur-2xl scale-110 animate-pulse"></div>

              <img
                src="/logo2.png"
                alt="E-TASMIM Logo"
                className="relative h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 8px 32px rgba(22, 94, 254, 0.3))'
                }}
                onError={(e) => {
                  // في حالة عدم وجود الصورة، إظهار النص الأصلي
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline-block';
                }}
              />

              {/* نص بديل محسن في حالة عدم تحميل الصورة */}
              <span
                className="bg-gradient-to-r from-secondary via-blue-600 to-primary bg-clip-text text-transparent font-black hidden text-5xl md:text-7xl lg:text-8xl"
                style={{ display: 'none' }}
              >
                E-TASMIM
              </span>
            </motion.div>
          </motion.h1>

          <motion.div
            className="mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTitle}
                className="text-2xl md:text-4xl font-bold text-primary"
                initial={{ opacity: 0, y: 20, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: -90 }}
                transition={{ duration: 0.5 }}
              >
                {dynamicTitles[currentTitle]}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              أحول أفكارك الإبداعية إلى تصميمات مذهلة ومواقع رقمية استثنائية تجذب جمهورك وتحقق أهدافك
            </p>
            <p className="text-base md:text-lg text-foreground font-medium">
              متخصص في تصميم الهويات البصرية والجرافيك وتطوير المواقع الإلكترونية الحديثة
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.button
              className="group relative bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold min-w-[200px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={!shouldReduceMotion ? { scale: 1.05, y: -2 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
              onClick={() => scrollToSection("portfolio")}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
                <Play className="w-4 h-4" />
                <span>اكتشف أعمالي</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group relative border-2 border-primary/30 hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-2xl font-semibold min-w-[200px] backdrop-blur-sm transition-all duration-300"
              whileHover={!shouldReduceMotion ? { scale: 1.05, y: -2 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.98 } : {}}
              onClick={() => scrollToSection("contact")}
            >
              <span className="flex items-center justify-center space-x-2 space-x-reverse">
                <Mail className="w-4 h-4" />
                <span>تواصل معنا</span>
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {[
              { number: "50+", label: "مشروع ناجح", icon: Briefcase },
              { number: "50+", label: "عميل سعيد", icon: Star },
              { number: "6+", label: "سنوات خبرة", icon: Award },
              { number: "100%", label: "رضا العملاء", icon: Sparkles }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + idx * 0.1, duration: 0.6 }}
                  whileHover={!shouldReduceMotion ? { scale: 1.05, y: -5 } : {}}
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default HeroSection;
