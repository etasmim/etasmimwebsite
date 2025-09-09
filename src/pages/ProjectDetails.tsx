import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight, ExternalLink, Github, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

// Import project images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import project1Screen1 from "@/assets/project1-screen1.jpg";
import project1Screen2 from "@/assets/project1-screen2.jpg";
import project2Screen1 from "@/assets/project2-screen1.jpg";
import project2Screen2 from "@/assets/project2-screen2.jpg";
import project3Screen1 from "@/assets/project3-screen1.jpg";
import project3Screen2 from "@/assets/project3-screen2.jpg";

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  mainImage: string;
  gallery: string[];
  tech: string[];
  features: string[];
  liveDemo?: string;
  github?: string;
  duration: string;
  client: string;
  year: string;
}

const projectsData: { [key: string]: ProjectData } = {
  "1": {
    id: 1,
    title: "تطبيق إدارة المهام",
    category: "UI/UX Design",
    description: "واجهة حديثة وتجربة مستخدم سهلة لإدارة المهام اليومية مع تصميم يركز على الإنتاجية",
    longDescription: "تطبيق شامل لإدارة المهام يتميز بواجهة عربية أنيقة وتجربة مستخدم استثنائية. يوفر التطبيق نظام تنظيم المهام بطريقة بصرية، مع إمكانية تتبع التقدم والتعاون مع الفرق. تم تصميمه ليكون سهل الاستخدام مع تركيز خاص على الإنتاجية والكفاءة.",
    mainImage: portfolio1,
    gallery: [portfolio1, project1Screen1, project1Screen2],
    tech: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    features: [
      "تصميم واجهة عربية أصيلة",
      "نظام إدارة المهام المرئي",
      "تتبع التقدم والإحصائيات",
      "تعاون الفرق في الوقت الفعلي",
      "تطبيق موبايل متجاوب",
      "نظام إشعارات ذكي"
    ],
    liveDemo: "https://demo.etasmim.com/tasks",
    github: "https://github.com/etasmim/task-manager",
    duration: "3 أشهر",
    client: "شركة التقنيات المتقدمة",
    year: "2024"
  },
  "2": {
    id: 2,
    title: "منصة التجارة الإلكترونية",
    category: "Website Development",
    description: "موقع تجارة إلكترونية متكامل مع تصميم عصري وتجربة تسوق مميزة",
    longDescription: "منصة تجارة إلكترونية كاملة مصممة خصيصاً للسوق العربي. تتميز بواجهة عصرية وتجربة تسوق سلسة، مع نظام دفع آمن ولوحة تحكم شاملة للتجار. المنصة محسنة لمحركات البحث ومتوافقة مع جميع الأجهزة.",
    mainImage: portfolio2,
    gallery: [portfolio2, project2Screen1, project2Screen2],
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redux"],
    features: [
      "واجهة تسوق عربية سهلة",
      "نظام دفع متعدد الوسائل",
      "لوحة تحكم شاملة للتجار",
      "إدارة المخزون الذكي",
      "تطبيق موبايل أصلي",
      "تحليلات مبيعات متقدمة"
    ],
    liveDemo: "https://demo.etasmim.com/ecommerce",
    github: "https://github.com/etasmim/ecommerce-platform",
    duration: "6 أشهر",
    client: "متجر الأناقة الرقمي",
    year: "2023"
  },
  "3": {
    id: 3,
    title: "تطبيق الطعام المحلي",
    category: "Mobile App UI",
    description: "تصميم تطبيق جوال لطلب الطعام من المطاعم المحلية مع واجهة عربية أنيقة",
    longDescription: "تطبيق جوال متخصص في توصيل الطعام من المطاعم المحلية. يتميز بتصميم عربي أنيق وتجربة مستخدم مبسطة تجعل عملية طلب الطعام سريعة وممتعة. يدعم التطبيق عدة طرق دفع ونظام تتبع الطلبات في الوقت الفعلي.",
    mainImage: portfolio3,
    gallery: [portfolio3, project3Screen1, project3Screen2],
    tech: ["React Native", "Firebase", "Stripe", "Google Maps", "Push Notifications"],
    features: [
      "تصفح المطاعم المحلية",
      "تتبع الطلبات المباشر",
      "نظام تقييم وتعليقات",
      "عروض وخصومات حصرية",
      "دفع آمن متعدد الطرق",
      "إشعارات فورية"
    ],
    liveDemo: "https://demo.etasmim.com/food-app",
    github: "https://github.com/etasmim/food-delivery",
    duration: "4 أشهر",
    client: "شبكة مطاعم الذواقة",
    year: "2024"
  }
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">المشروع غير موجود</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-hero"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Back Navigation */}
      <motion.div
        className="container mx-auto px-4 pt-24 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 space-x-reverse text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          <span>العودة للأعمال</span>
        </button>
      </motion.div>

      {/* Project Header */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">العميل</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">المدة</h3>
                <p className="text-muted-foreground">{project.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">السنة</h3>
                <p className="text-muted-foreground">{project.year}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveDemo && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero flex items-center justify-center space-x-2 space-x-reverse"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>مشاهدة المشروع</span>
                </motion.a>
              )}

              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-secondary flex items-center justify-center space-x-2 space-x-reverse"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  <span>الكود المصدري</span>
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Main Project Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="portfolio-item">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="container mx-auto px-4 pb-16">
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          معرض الصور
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img
                src={image}
                alt={`${project.title} - صورة ${index + 1}`}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            className="card-glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">المميزات الرئيسية</h3>
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 space-x-reverse"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="card-glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">التقنيات المستخدمة</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 pb-20">
        <motion.div
          className="card-glass text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            أعجبك هذا المشروع؟
          </h3>
          <p className="text-muted-foreground mb-6">
            دعنا نعمل معاً على مشروعك القادم وننشئ شيئاً استثنائياً
          </p>
          <motion.button
            className="btn-hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          >
            ابدأ مشروعك الآن
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;