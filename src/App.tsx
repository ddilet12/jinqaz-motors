import { motion, useScroll, useSpring } from "motion/react";
import { 
  Wrench, 
  Cpu, 
  Activity, 
  ShieldAlert, 
  ClipboardCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Instagram
} from "lucide-react";
import { useState } from "react";
import * as Constants from "./constants";

const IconMap: { [key: string]: any } = {
  Engine: Wrench,
  Cpu: Cpu,
  Wrench: Activity,
  ShieldAlert: ShieldAlert,
  ClipboardCheck: ClipboardCheck,
  Sparkles: Sparkles,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white bg-dark-surface">
      {/* Background Aesthetic Elements */}
      <div className="fixed top-0 right-0 w-[600px] h-screen opacity-10 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 100% 30%, #FF4D00 0%, transparent 70%)' }}></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#FF4D00] blur-[150px] opacity-10 z-0 pointer-events-none"></div>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-40 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 bg-brand-orange flex items-center justify-center skew-x-[-12deg]">
                <span className="text-black font-black -skew-x-[-12deg] text-xl">J</span>
              </div>
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-white uppercase italic">
              JINQAZ <span className="text-brand-orange">Motors</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
            {["Услуги", "Преимущества", "Процесс", "Отзывы", "Контакты"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="hover:text-brand-orange transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex flex-col text-right leading-none border-l border-white/10 pl-8">
            <div className="text-[10px] opacity-40 uppercase tracking-[0.2em] mb-1">{Constants.LOCATION}, {Constants.ADDRESS}</div>
            <div className="text-lg font-black text-white italic tracking-tighter uppercase">{Constants.PHONE}</div>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/60 to-dark-surface z-10" />
          <img 
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=85&w=2400" 
            alt="Porsche in studio"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'grayscale(0.6) contrast(1.1)' }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Premium Automotive Studio Almaty
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] tracking-tighter mb-8 text-white uppercase italic">
              Искусство <br /> 
              <span className="text-brand-orange underline underline-offset-8">Технического</span> <br />
              Совершенства
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 font-light mb-10 max-w-xl leading-relaxed">
              {Constants.HERO_CONTENT.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={Constants.WHATSAPP_LINK}
                className="group relative inline-flex items-center justify-center gap-3 bg-brand-orange text-black px-10 py-5 font-black hover:bg-orange-600 transition-all overflow-hidden uppercase italic tracking-wider"
              >
                <span className="relative z-10">{Constants.HERO_CONTENT.cta}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
              <div className="flex items-center gap-3 px-8 py-5 border border-white/20 backdrop-blur-sm bg-white/5 group hover:bg-white/10 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-brand-orange" />
                <span className="text-lg font-bold text-white tracking-tight uppercase italic">{Constants.PHONE}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
          <div className="w-[1px] h-16 bg-linear-to-b from-brand-orange to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="Услуги" className="py-32 bg-dark-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-xs font-black text-brand-orange tracking-[0.6em] uppercase mb-6 flex items-center justify-center md:justify-start gap-4">
              <div className="h-[1px] w-12 bg-brand-orange/40" /> Экспертиза
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h3 className="text-4xl md:text-6xl font-display font-black text-white max-w-3xl leading-[0.95] tracking-tighter uppercase italic">
                Премиальный уход <br /> для вашего автомобиля
              </h3>
              <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">Системный подход к каждой детали. Используем только оригиналы и сертифицированное оборудование.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Constants.SERVICES.map((service, index) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="premium-card p-8 group border-l-2 border-white/10 hover:border-brand-orange"
                >
                  <div className="mb-8 p-4 w-16 h-16 bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-all duration-500">
                    <Icon className="w-8 h-8 text-brand-orange group-hover:text-black transition-colors" />
                  </div>
                  <div className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] mb-2">0{index + 1} Expertise</div>
                  <h4 className="text-2xl font-display font-black text-white mb-4 italic uppercase tracking-tighter">{service.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <a href={Constants.WHATSAPP_LINK} className="text-brand-orange font-bold text-xs tracking-widest uppercase inline-flex items-center gap-3 group/link border-b border-brand-orange/0 hover:border-brand-orange transition-all">
                    ПОДРОБНЕЕ 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="absolute top-0 right-0 p-6 opacity-5 text-7xl font-display font-black group-hover:opacity-10 transition-opacity">{String(index + 1).padStart(2, '0')}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="Преимущества" className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-brand-orange to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-brand-orange to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-black text-brand-orange tracking-[0.6em] uppercase mb-8">Манифест качества</h2>
              <h3 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-16 italic uppercase tracking-tighter">
                Прозрачность — <br /> наш главный <br /> стандарт
              </h3>
              
              <div className="space-y-12">
                {Constants.WHY_US.map((item, index) => (
                  <div key={item.title} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-sm border border-brand-orange/20 flex items-center justify-center text-brand-orange font-display font-black text-2xl group-hover:bg-brand-orange group-hover:text-black transition-all">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-3 uppercase italic tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 font-light text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative pt-12">
              <div className="absolute -inset-10 bg-brand-orange/10 blur-[120px] rounded-full" />
              <div className="relative z-10 p-2 bg-white/5 border border-white/10 rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=85&w=1200" 
                  alt="High-end tools"
                  className="rounded-xs grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-12 -right-6 bg-brand-orange p-10 z-20 hidden md:block shadow-2xl"
              >
                <div className="text-black font-display font-black text-7xl leading-none italic tracking-tighter">100%</div>
                <div className="text-black font-black uppercase tracking-[0.2em] text-[10px] mt-4 flex items-center gap-2">
                  <div className="h-px w-8 bg-black" /> ГАРАНТИЯ КЛАССА
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-1 bg-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 h-[50vh]">
          {[
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c3d9?auto=format&fit=crop&q=85&w=800",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=800",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=85&w=800",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=85&w=800"
          ].map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98, zIndex: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group overflow-hidden bg-black"
            >
              <img src={url} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all m-4" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="Процесс" className="py-32 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-xs font-black text-brand-orange tracking-[0.6em] uppercase mb-8">Трансформация</h2>
              <h3 className="text-4xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-none">Путь к идеалу</h3>
            </div>
            <p className="text-gray-500 max-w-xs text-lg font-light italic">Мы превращаем обычный ремонт в искусство восстановления.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Constants.PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group p-10 border border-white/5 bg-dark-elevated hover:bg-brand-orange/5 transition-all min-h-[320px] flex flex-col justify-end"
              >
                <div className="text-8xl font-display font-black text-white/[0.03] absolute top-8 left-8 group-hover:text-brand-orange/10 transition-colors">{step.step}</div>
                <h4 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter relative z-10">{step.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors font-light">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] text-white/5 z-20 group-hover:text-brand-orange transition-colors">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden bg-brand-orange px-8 py-20 md:p-32 text-center group">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/10 rounded-full pointer-events-none" 
            />
            
            <div className="relative z-10">
              <h2 className="text-black font-display font-black text-5xl md:text-9xl mb-8 leading-[0.8] tracking-tighter uppercase italic">
                Диагностика <br /> 0 ТЕНГЕ
              </h2>
              <div className="h-px w-24 bg-black/30 mx-auto mb-10" />
              <p className="text-black font-black text-xl md:text-3xl mb-12 max-w-2xl mx-auto uppercase italic tracking-tighter leading-tight">
                Эксклюзивная привилегия для новых автолюбителей JINQAZ MOTORS. Успейте записаться.
              </p>
              <a 
                href={Constants.WHATSAPP_LINK}
                className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-sm font-black text-2xl hover:scale-105 transition-all shadow-2xl uppercase italic"
              >
                ЗАБРОНИРОВАТЬ
                <ArrowRight className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="Отзывы" className="py-32 bg-dark-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h2 className="text-xs font-black text-brand-orange tracking-[0.6em] uppercase mb-8">Доверие</h2>
              <h3 className="text-4xl md:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-none">Голоса <br /> резидентов</h3>
            </div>
            <div className="flex gap-2 text-brand-orange mb-4">
              {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-5 h-5 fill-brand-orange" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Constants.REVIEWS.map((review, index) => (
              <motion.div 
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-12 bg-dark-surface border border-white/5 relative group hover:border-brand-orange/20 transition-all"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-orange/5 flex items-center justify-center">
                  <span className="text-brand-orange text-4xl font-display font-black">"</span>
                </div>
                <p className="text-gray-300 italic mb-12 text-xl leading-relaxed font-light">“{review.text}”</p>
                <div className="border-l-2 border-brand-orange pl-6">
                  <div className="text-white font-black uppercase text-xl italic tracking-tight">{review.name}</div>
                  <div className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] mt-1">{review.car}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Контакты" className="py-32 relative bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-xs font-black text-brand-orange tracking-[0.6em] uppercase mb-10 text-center lg:text-left flex items-center justify-center lg:justify-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Мастера на связи
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-black text-white italic uppercase tracking-tighter leading-none mb-16 text-center lg:text-left">Мы всегда <br /> рядом</h3>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                  <MapPin className="text-brand-orange w-10 h-10" />
                </div>
                <div>
                  <div className="text-gray-500 uppercase text-[10px] font-black tracking-[0.4em] mb-3">Локация</div>
                  <div className="text-3xl font-black text-white tracking-tighter uppercase italic">{Constants.ADDRESS}</div>
                  <div className="text-gray-400 text-xl font-light italic">{Constants.LOCATION}</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 bg-white/5 flex items-center justify-center rounded-sm border border-white/10">
                  <Phone className="text-brand-orange w-10 h-10" />
                </div>
                <div>
                  <div className="text-gray-500 uppercase text-[10px] font-black tracking-[0.4em] mb-3">Линия связи</div>
                  <div className="text-3xl font-black text-white tracking-tighter uppercase italic">{Constants.PHONE}</div>
                  <div className="text-gray-400 text-xl font-light italic">9:00 - 19:00 Ежедневно</div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-center lg:justify-start gap-6">
              <a href="#" className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all border border-white/10">
                <Instagram className="w-8 h-8" />
              </a>
              <a href={Constants.WHATSAPP_LINK} className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all border border-white/10">
                <MessageCircle className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="aspect-square bg-dark-elevated p-2 border border-white/10 rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.7725920367333!2d76.9248443!3d43.3308333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE5JzUxLjAiTiA3NsKwNTUnMjkuNCJF!5e0!3m2!1sru!2skz!4v1700000000000!5m2!1sru!2skz" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)', opacity: 0.8 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-orange flex items-center justify-center skew-x-[-12deg]">
                <span className="text-black font-black -skew-x-[-12deg] text-xl">J</span>
              </div>
              <span className="font-display font-black text-3xl tracking-tighter text-white uppercase italic">
                JINQAZ <span className="text-brand-orange">MOTORS</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xs font-black tracking-[0.3em] uppercase text-gray-500">
               <a href="#Услуги" className="hover:text-brand-orange transition-colors">Услуги</a>
               <a href="#Преимущества" className="hover:text-brand-orange transition-colors">Преимущества</a>
               <a href="#Процесс" className="hover:text-brand-orange transition-colors">Процесс</a>
               <a href="#Отзывы" className="hover:text-brand-orange transition-colors">Отзывы</a>
            </div>

            <div className="h-px w-full max-w-lg bg-linear-to-r from-transparent via-white/10 to-transparent my-4" />

            <div className="text-gray-600 text-[10px] font-black tracking-[0.5em] uppercase">
              © 2024 JINQAZ MOTORS. AUTOMOTIVE STUDIO ALMATY. BUILT FOR PERFECTION.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href={Constants.WHATSAPP_LINK}
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <MessageCircle className="w-10 h-10 relative z-10" />
      </a>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        className="fixed inset-0 z-50 bg-black md:hidden pt-32 px-12"
      >
        <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
          <X className="w-10 h-10" />
        </button>
        <div className="flex flex-col gap-10">
          {["Услуги", "Преимущества", "Процесс", "Отзывы", "Контакты"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-5xl font-display font-black text-white italic uppercase tracking-tighter"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href={Constants.WHATSAPP_LINK}
            className="mt-12 bg-brand-orange text-black text-center py-8 text-2xl font-black uppercase italic tracking-tighter"
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </motion.div>
    </div>
  );
}
