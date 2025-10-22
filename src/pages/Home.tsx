import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap, CheckCircle, BarChart3, Bot, GraduationCap, BrainCircuit } from "lucide-react";
import SEO from "@/components/SEO";

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
      client: "ТехноПром",
      industry: "Промышленное оборудование",
      before: "25% конверсия",
      after: "68% конверсия",
      improvement: "+172%",
    },
    {
      client: "МегаРитейл",
      industry: "Розничная торговля",
      before: "₽2.5M выручка/мес",
      after: "₽6.8M выручка/мес",
      improvement: "+172%",
    },
    {
      client: "ФинТех Групп",
      industry: "Финансовые услуги",
      before: "40 лидов/день",
      after: "180 лидов/день",
      improvement: "+350%",
    },
  ];

  const stats = [
    { value: "500+", label: "Успешных проектов" },
    { value: "15+", label: "Лет на рынке" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "₽2.5B+", label: "Дополнительной выручки" },
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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                Помогаем бизнесу{" "}
                <span className="text-primary">расти</span> и{" "}
                <span className="text-primary">развиваться</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-3xl mx-auto">
                Внедрение CRM, построение отделов продаж, автоматизация и ИИ-решения
                для достижения амбициозных целей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 h-auto font-semibold">
                  <Link to="/contacts">
                    Оставить заявку
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto font-semibold border-2">
                  <Link to="/cases">Наши кейсы</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Комплексные решения для роста вашего бизнеса
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-lift hover-glow group cursor-pointer border-2">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
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
        <section className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Кейсы наших клиентов</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Реальные результаты, которых мы достигли вместе с нашими партнёрами
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {cases.map((caseItem, index) => (
                <Card key={index} className="hover-lift hover-glow border-2">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{caseItem.client}</h3>
                      <p className="text-sm text-muted-foreground">{caseItem.industry}</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">До внедрения:</div>
                        <div className="text-lg font-semibold">{caseItem.before}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">После внедрения:</div>
                        <div className="text-lg font-semibold text-primary">{caseItem.after}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-primary font-bold text-xl">
                      <TrendingUp className="w-6 h-6" />
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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Почему выбирают Avala
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Индивидуальный подход к каждому клиенту",
                  "Команда экспертов с опытом 15+ лет",
                  "Гарантия результата и постоянная поддержка",
                  "Современные технологии и методики",
                  "Прозрачная отчётность на каждом этапе",
                  "Быстрая окупаемость инвестиций",
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Готовы вывести свой бизнес на новый уровень?
            </h2>
            <p className="text-xl text-background/80 mb-10 max-w-2xl mx-auto">
              Оставьте заявку, и наши эксперты свяжутся с вами для бесплатной консультации
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 h-auto font-semibold">
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
