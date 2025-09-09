import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";

import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaBehance,
  FaDribbble,
  FaWhatsapp,
  FaTelegram,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com/etasmim", label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaInstagram, url: "https://instagram.com/etasmim", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaXTwitter, url: "https://x.com/etasmim", label: "X", color: "hover:text-sky-400" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/etasmim", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: FaBehance, url: "https://behance.net/etasmim", label: "Behance", color: "hover:text-blue-400" },
    { icon: FaDribbble, url: "https://dribbble.com/etasmim", label: "Dribbble", color: "hover:text-pink-400" },
    { icon: FaTiktok, url: "https://tiktok.com/@etasmim", label: "TikTok", color: "hover:text-white" },
    { icon: FaWhatsapp, url: "https://wa.me/966501234567", label: "WhatsApp", color: "hover:text-green-500" },
    { icon: FaTelegram, url: "https://t.me/etasmim", label: "Telegram", color: "hover:text-blue-500" },
    { icon: FaYoutube, url: "https://youtube.com/etasmim", label: "YouTube", color: "hover:text-red-500" }
  ];

  const quickLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "من نحن", href: "#about" },
    { name: "أعمالي", href: "#portfolio" },
    { name: "التواصل", href: "#contact" },
  ];

  return (
    <>
      <footer className="relative bg-black text-white overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-full blur-3xl" />
        </div>

        {/* شبكة خلفية */}
        <div className="absolute inset-0 -z-5 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* معلومات الشركة */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-secondary via-blue-600 to-primary bg-clip-text text-transparent">
                  E-Tasmim
                </span>
              </motion.h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                نبدع في تصميم الهويات البصرية والمواقع الإلكترونية لنساعد علامتك التجارية على التميز في العالم الرقمي
              </p>

              {/* معلومات الاتصال */}
              <div className="space-y-4 mb-8">
                <motion.div
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>info@etasmim.com</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>+966 50 123 4567</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span>المغرب</span>
                </motion.div>
              </div>
            </motion.div>

            {/* روابط سريعة */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-8 text-primary">
                روابط سريعة
              </h4>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(link.href.slice(1));
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* وسائل التواصل الاجتماعي */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-8 text-secondary">
                تابعنا على
              </h4>

              <div className="grid grid-cols-5 gap-3 max-w-xs">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-300 ${social.color} hover:bg-white/20 transition-all duration-300 group`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* خط فاصل */}
          <motion.div
            className="my-12 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* حقوق النشر */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400">
              <span>© جميع الحقوق محفوظة</span>
              <div className="flex items-center gap-1">
                <span>Etasmim {currentYear}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

    </>
  );
};

export default Footer;