import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
  FaTelegram,
  FaDribbble,
  FaBehance,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Star, ArrowUpRight, Zap } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com/etasmim",
    iconColor: "text-blue-600 group-hover:text-white", // لون الأيقونة فقط
    textColor: "text-foreground group-hover:text-white", // لون النص فقط
    bg: "hover:bg-blue-600",
    shadow: "group-hover:shadow-blue-600/20"
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    url: "https://twitter.com/etasmim",
    iconColor: "text-black group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-black",
    shadow: "group-hover:shadow-gray-800/20"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/etasmim",
    iconColor: "text-pink-600 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-pink-600",
    shadow: "group-hover:shadow-pink-600/20"
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://tiktok.com/@etasmim",
    iconColor: "text-black group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-black",
    shadow: "group-hover:shadow-gray-800/20"
  },
  {
    name: "Snapchat",
    icon: <FaSnapchatGhost />,
    url: "https://snapchat.com/add/etasmim",
    iconColor: "text-yellow-400 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-yellow-400",
    shadow: "group-hover:shadow-yellow-400/20"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/etasmim",
    iconColor: "text-blue-700 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-blue-700",
    shadow: "group-hover:shadow-blue-700/20"
  },
  {
    name: "Pinterest",
    icon: <FaPinterest />,
    url: "https://pinterest.com/etasmim",
    iconColor: "text-red-600 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-red-600",
    shadow: "group-hover:shadow-red-600/20"
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    url: "https://youtube.com/etasmim",
    iconColor: "text-red-600 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-red-600",
    shadow: "group-hover:shadow-red-600/20"
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/966501234567",
    iconColor: "text-green-600 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-green-600",
    shadow: "group-hover:shadow-green-600/20"
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    url: "https://t.me/etasmim",
    iconColor: "text-blue-600 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-blue-600",
    shadow: "group-hover:shadow-blue-600/20"
  },
  {
    name: "Dribbble",
    icon: <FaDribbble />,
    url: "https://dribbble.com/etasmim",
    iconColor: "text-pink-400 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-pink-400",
    shadow: "group-hover:shadow-pink-400/20"
  },
  {
    name: "Behance",
    icon: <FaBehance />,
    url: "https://behance.net/etasmim",
    iconColor: "text-blue-600 group-hover:text-white",
    textColor: "text-foreground group-hover:text-white",
    bg: "hover:bg-blue-600",
    shadow: "group-hover:shadow-blue-600/20"
  }
];

const SocialMedia = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float" />
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">تواصل معنا</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              تابعنا
            </span>
            <br />
            <span className="text-foreground">في كل مكان</span>
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            ابق على تواصل معنا عبر منصات التواصل الاجتماعي واحصل على
            <span className="font-bold text-primary mx-2">آخر الأخبار</span>
            والمشاريع الجديدة
          </motion.p>
        </div>

        {/* Social Media Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-6xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group p-6 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 transition-all duration-500 ${social.bg} ${social.shadow} hover:shadow-2xl overflow-hidden`}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* خلفية سوداء عند الهوفر */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* الأيقونة */}
              <div className="relative flex flex-col items-center text-center z-10">
                <div className={`text-3xl mb-3 transition-all duration-300 ${social.iconColor} group-hover:scale-110`}>
                  {social.icon}
                </div>
                <span className={`text-sm font-medium transition-colors duration-300 ${social.textColor}`}>
                  {social.name}
                </span>
              </div>

              {/* مؤشر الانتقال */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SocialMedia;