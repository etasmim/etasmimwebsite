import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Palette,
  Smartphone,
  Globe2,
  Filter,
  Grid3x3,
  List,
  Star,
  Award,
  Eye
} from "lucide-react";

// استيراد الصور من src/assets
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-1.jpg";
import portfolio5 from "@/assets/portfolio-2.jpg";
import portfolio6 from "@/assets/portfolio-3.jpg";
import portfolio7 from "@/assets/portfolio-1.jpg";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  featured: boolean;
  year: string;
  client: string;
  duration: string;
  rating: number;
}

const categories = [
  { name: "الكل", icon: Grid3x3 },
  { name: "UI/UX", icon: Palette },
  { name: "Web", icon: Globe2 },
  { name: "Mobile", icon: Smartphone }
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "تطبيق إدارة المهام",
    category: "UI/UX",
    description: "تصميم واجهة وتجربة مستخدم سلسة لإدارة المهام اليومية.",
    image: portfolio1,
    tech: ["Figma", "Adobe XD"],
    featured: true,
    year: "2023",
    client: "شركة التقنيات الذكية",
    duration: "2 أشهر",
    rating: 5
  },
  {
    id: 2,
    title: "منصة التجارة الإلكترونية",
    category: "Web",
    description: "موقع تجارة إلكترونية متكامل بتجربة تسوق عصرية.",
    image: portfolio2,
    tech: ["React", "Node.js", "MongoDB"],
    featured: true,
    year: "2024",
    client: "متجر إلكتروني",
    duration: "4 أشهر",
    rating: 5
  },
  {
    id: 3,
    title: "تطبيق الطعام المحلي",
    category: "Mobile",
    description: "تطبيق جوال لطلب الطعام مع تصميم أنيق ودعم اللغة العربية.",
    image: portfolio3,
    tech: ["React Native", "Firebase"],
    featured: false,
    year: "2023",
    client: "مطعم محلي",
    duration: "3 أشهر",
    rating: 4
  },
  {
    id: 4,
    title: "لوحة تحكم تحليلية",
    category: "Web",
    description: "لوحة تحكم تفاعلية لإدارة البيانات والتحليلات.",
    image: portfolio4,
    tech: ["Next.js", "Tailwind", "Chart.js"],
    featured: false,
    year: "2024",
    client: "شركة تحليلات",
    duration: "3 أشهر",
    rating: 4
  },
  {
    id: 5,
    title: "موقع شخصي",
    category: "UI/UX",
    description: "موقع شخصي احترافي مع تصميم بسيط وجذاب.",
    image: portfolio5,
    tech: ["Figma", "Illustrator"],
    featured: false,
    year: "2023",
    client: "مصمم مستقل",
    duration: "1 شهر",
    rating: 4
  },
  {
    id: 6,
    title: "تطبيق تعليمي للأطفال",
    category: "Mobile",
    description: "تطبيق ألعاب تعليمية ممتع للأطفال بواجهة عربية.",
    image: portfolio6,
    tech: ["Flutter", "Firebase"],
    featured: true,
    year: "2024",
    client: "مدرسة ابتدائية",
    duration: "5 أشهر",
    rating: 5
  },
  {
    id: 7,
    title: "منصة حجوزات الفنادق",
    category: "Web",
    description: "موقع لحجز الفنادق مع واجهة حديثة وتجربة سلسة.",
    image: portfolio7,
    tech: ["Vue", "Laravel", "MySQL"],
    featured: false,
    year: "2023",
    client: "سلسلة فنادق",
    duration: "6 أشهر",
    rating: 4
  },
];

const ITEMS_PER_PAGE = 6;

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const filteredItems =
    selectedCategory === "الكل"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const currentItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // لما يغير الفلتر يرجع للصفحة الأولى
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  // إعدادات الأنيميشن للكروت
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* خلفية ثابتة بدون حركة */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 90% 10%, rgba(22, 94, 254, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 10% 90%, rgba(255, 222, 23, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(22, 94, 254, 0.05) 0%, rgba(255, 222, 23, 0.05) 100%)`
          }}
        />

        {/* تأثيرات ثابتة بدون حركة */}
        <div
          className="absolute top-1/4 right-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg, #165efe, #9333ea)", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full opacity-15"
          style={{ background: "linear-gradient(135deg, #ffde17, #165efe)", filter: "blur(120px)" }}
        />

        {/* شبكة ثابتة */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(22, 94, 254, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 94, 254, 0.4) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">معرض الأعمال المتميزة</span>
            <Award className="w-4 h-4 text-secondary" />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              أعمالي
            </span>
            <br />
            <span className="text-foreground">
              الإبداعية
            </span>
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            مجموعة مختارة من أفضل مشاريعي التي تمزج بين
            <span className="font-bold text-primary mx-2">الإبداع والتقنية</span>
            لتقديم حلول رقمية استثنائية
          </motion.p>
        </motion.div>

        {/* شريط التحكم - تصميم محسن للهاتف */}
        <motion.div
          className="flex flex-col gap-6 mb-16 p-4 md:p-6 rounded-3xl bg-card/80 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* عنوان الفلتر */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-base font-medium text-foreground">تصفية الأعمال</span>
            </div>

            {/* أزرار عرض - مخفية في الموبايل */}
            <div className="hidden md:flex items-center gap-2 bg-muted p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* فلاتر الفئات - تصميم جديد */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <motion.button
                  key={cat.name}
                  onClick={() => handleCategoryChange(cat.name)}
                  className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition-all duration-300 ${selectedCategory === cat.name
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{cat.name}</span>
                  <span className="text-xs bg-background/20 px-2 py-0.5 rounded-full">
                    {portfolioItems.filter(item =>
                      cat.name === "الكل" ? true : item.category === cat.name
                    ).length}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* شبكة المشاريع */}
        {viewMode === "grid" ? (
          <motion.div
            key={`${selectedCategory}-${currentPage}-grid`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
                  <div className="group bg-surface-glass backdrop-blur-lg rounded-2xl overflow-hidden shadow-soft border border-glass-border hover:shadow-glow transition h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden h-64 flex-shrink-0">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 flex items-center justify-center">
                        <motion.button
                          className="p-3 rounded-full bg-white text-gray-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-start flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                        {item.description}
                      </p>

                      <Link to={`/project/${item.id}`}>
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300 w-full justify-center mt-auto"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <span>عرض التفاصيل</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // وضع القائمة
          <motion.div
            key={`${selectedCategory}-${currentPage}-list`}
            className="grid grid-cols-1 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="bg-surface-glass backdrop-blur-lg rounded-2xl overflow-hidden shadow-soft border border-glass-border p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* الصورة */}
                  <div className="relative overflow-hidden rounded-xl h-48 md:h-auto md:w-64 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* المحتوى */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <Link to={`/project/${item.id}`}>
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span>عرض التفاصيل</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition ${currentPage === page
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-surface text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-card/80 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-bold text-foreground">
              هل لديك مشروع في الذهن؟
            </h3>
            <p className="text-muted-foreground max-w-md">
              دعنا نحول فكرتك إلى واقع رقمي مذهل
            </p>
            <motion.button
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>ابدأ مشروعك الآن</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;