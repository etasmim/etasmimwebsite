import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Star, Send, MapPin, Clock, Award, Zap, CheckCircle, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      // محاكاة إرسال البيانات
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // إخفاء رسالة النجاح بعد 5 ثوانِ
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("خطأ في إرسال الرسالة:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* خلفية ثابتة بدون حركة - مع عكس الألوان */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 10% 10%, rgba(255, 222, 23, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 90% 90%, rgba(22, 94, 254, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 60% 60%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, rgba(255, 222, 23, 0.05) 0%, rgba(22, 94, 254, 0.05) 100%)`
          }}
        />

        {/* تأثيرات ثابتة بدون حركة - مع عكس الألوان */}
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg, #ffde17, #9333ea)", filter: "blur(100px)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15"
          style={{ background: "linear-gradient(135deg, #165efe, #ffde17)", filter: "blur(120px)" }}
        />

        {/* شبكة خلفية ثابتة */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 222, 23, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 222, 23, 0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-orange-500/20 border border-blue-500/30 mb-6"
          >
            <Send className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-800">تواصل معنا</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
              لنبدأ
            </span>
            <br />
            <span className="text-gray-800">مشروعك معاً</span>
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-700 mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            هل لديك فكرة مشروع رائع؟ دعنا نحولها إلى
            <span className="font-bold text-blue-600 mx-2">واقع رقمي</span>
            يتفوق على توقعاتك
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* معلومات الاتصال والمزايا */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* معلومات الاتصال السريع */}
            <div className="relative p-8 rounded-3xl backdrop-blur-lg bg-white/90 border border-gray-200/70 shadow-lg overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-600" />
                تواصل سريع
              </h3>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-blue-50/80 transition-all duration-300 group cursor-pointer border border-gray-200/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">البريد الإلكتروني</p>
                    <p className="font-semibold text-gray-800">info@etasmim.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-orange-50/80 transition-all duration-300 group cursor-pointer border border-gray-200/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">رقم الهاتف</p>
                    <p className="font-semibold text-gray-800">+966 50 123 4567</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-green-50/80 transition-all duration-300 group cursor-pointer border border-gray-200/50"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">الموقع</p>
                    <p className="font-semibold text-gray-800">المملكة العربية السعودية</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* المزايا */}
            <div className="relative p-8 rounded-3xl backdrop-blur-lg bg-white/90 border border-gray-200/70 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                لماذا نحن؟
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "خبرة احترافية",
                    description: "أكثر من 6 سنوات في عالم التصميم والتطوير",
                    icon: <Star className="w-5 h-5" />
                  },
                  {
                    title: "تصميم عصري",
                    description: "أحدث الاتجاهات مع تركيز على تجربة المستخدم",
                    icon: <Zap className="w-5 h-5" />
                  },
                  {
                    title: "دعم مستمر",
                    description: "متابعة ودعم حتى بعد تسليم المشروع",
                    icon: <Clock className="w-5 h-5" />
                  },
                  {
                    title: "جودة عالية",
                    description: "معايير عالمية في التطوير والتصميم",
                    icon: <CheckCircle className="w-5 h-5" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/80 hover:bg-blue-50/80 transition-all duration-300 border border-gray-200/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* نموذج الاتصال */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative p-8 md:p-10 rounded-3xl backdrop-blur-lg bg-white/95 border border-gray-200/70 shadow-lg overflow-hidden">
              {/* رسالة النجاح */}
              {isSuccess && (
                <motion.div
                  className="absolute inset-0 bg-green-500/95 backdrop-blur-lg rounded-3xl flex items-center justify-center z-50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center text-white">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">تم إرسال الرسالة بنجاح!</h3>
                    <p className="text-lg">سنتواصل معك في أقرب وقت ممكن</p>
                  </div>
                </motion.div>
              )}

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  أرسل لنا رسالة
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                        placeholder="أدخل اسمك الكامل"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      موضوع الرسالة *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                      placeholder="ما نوع المشروع الذي تريد تنفيذه؟"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      رسالتك *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="اخبرني المزيد عن مشروعك وأهدافك..."
                      required
                    />
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full p-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>إرسال الرسالة</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;