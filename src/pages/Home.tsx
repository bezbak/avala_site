import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle, BarChart3, Bot, GraduationCap, BrainCircuit } from "lucide-react";
import SEO from "@/components/SEO";

import banner from '../assets/main-photo.jpeg';

const Home = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Внедрение CRM-систем",
      description: "Полный контроль этапов сделки, аналитика и прогнозы для вашего бизнеса",
    },
    {
      icon: Users,
      title: "Построение отдела продаж",
      description: "Создание эффективной структуры и процессов продаж с нуля",
    },
    {
      icon: Bot,
      title: "Чат-боты",
      description: "Автоматизация рутинных задач и улучшение клиентского сервиса",
    },
    {
      icon: GraduationCap,
      title: "Тренинги для менеджеров",
      description: "Повышение квалификации и навыков вашей команды продаж",
    },
    {
      icon: BrainCircuit,
      title: "ИИ-решения",
      description: "Анализ данных и прогнозирование с помощью искусственного интеллекта",
    },
  ];

  const cases = [
    {
      client: "Selfvisa.kg",
      industry: "Визовый центр",
      before: "1 000 000 сом/мес",
      after: "11 000 000 сом/мес",
      improvement: "+1000%",
    },
    {
      client: "Trading Lub",
      industry: "Трейдинговая компания",
      before: "300 000 сом/мес",
      after: "1 500 000 сом/мес",
      improvement: "+400%",
    },
    {
      client: "IOI",
      industry: "Инвестиционная компания",
      before: "0 сом/мес",
      after: "1 300 000 сом/мес",
      improvement: "+∞ (с нуля до стабильного дохода)",
    },
  ];

  const stats = [
    { value: "500+", label: "Успешных проектов" },
    { value: "10+", label: "Лет на рынке" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "2.5B сом +", label: "Дополнительной выручки" },
  ];

  return (
    <>
      <SEO
        title="Главная"
        description="Avala помогает бизнесу расти: внедрение CRM-систем, построение отделов продаж, чат-боты, тренинги и ИИ-решения. Более 500 успешных проектов."
        keywords="консалтинг, CRM, отдел продаж, автоматизация бизнеса, чат-боты, тренинги менеджеров"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={banner}
              alt="Background"
              className="w-full h-full object-cover animate-slow-zoom"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e2bc78]/10 via-transparent to-[#e2bc78]/5" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-balance leading-tight text-white">
                Помогаем бизнесу{" "}
                <span className="text-[#e2bc78]">расти</span> и{" "}
                <span className="text-[#e2bc78]">развиваться</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 text-balance max-w-3xl mx-auto">
                Внедрение CRM, построение отделов продаж, автоматизация и ИИ-решения
                для достижения амбициозных целей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#e2bc78] hover:bg-[#d4ab65] text-black px-7 font-semibold">
                  <Link to="/contacts">
                    Оставить заявку
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-7 font-semibold border-2 bg-transparent border-primary text-white hover:bg-white/10 hover:border-white/50">
                  <Link to="/cases">Наши кейсы</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>



        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Наши услуги</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для роста вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover-lift hover-glow group cursor-pointer border-2">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg" variant="outline" className="font-semibold border-2">
                <Link to="/services">
                  Все услуги
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Cases */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Кейсы наших клиентов</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Реальные результаты, которых мы достигли вместе с нашими партнёрами
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {cases.map((caseItem, index) => (
                <Card key={index} className="hover-lift hover-glow border-2">
                  <CardContent className="p-6">
                    <div className="mb-5">
                      <h3 className="text-xl font-bold mb-1.5">{caseItem.client}</h3>
                      <p className="text-xs text-muted-foreground">{caseItem.industry}</p>
                    </div>
                    
                    <div className="space-y-3 mb-5">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">До внедрения:</div>
                        <div className="text-base font-semibold">{caseItem.before}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">После внедрения:</div>
                        <div className="text-base font-semibold text-primary">{caseItem.after}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-primary font-bold text-lg">
                      <TrendingUp className="w-5 h-5" />
                      <span>{caseItem.improvement}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold">
                <Link to="/cases">
                  Смотреть все кейсы
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Почему выбирают Avala
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Индивидуальный подход к каждому клиенту",
                  "Команда экспертов с опытом 10+ лет",
                  "Гарантия результата и постоянная поддержка",
                  "Современные технологии и методики",
                  "Прозрачная отчётность на каждом этапе",
                  "Быстрая окупаемость инвестиций",
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Готовы вывести свой бизнес на новый уровень?
            </h2>
            <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и наши эксперты свяжутся с вами для бесплатной консультации
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-7 font-semibold">
              <Link to="/contacts">
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;