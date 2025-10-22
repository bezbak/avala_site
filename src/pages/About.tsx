import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Users, Award, TrendingUp, CheckCircle, ArrowRight, Lightbulb, Shield, Zap } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const timeline = [
    { year: "2009", event: "Основание компании", description: "Начали с консалтинга для малого бизнеса" },
    { year: "2013", event: "Выход на крупный бизнес", description: "Первые проекты с федеральными компаниями" },
    { year: "2017", event: "Запуск AI-направления", description: "Внедрение решений на базе машинного обучения" },
    { year: "2020", event: "Рост команды до 50+", description: "Открытие офисов в 5 городах России" },
    { year: "2024", event: "500+ успешных проектов", description: "Лидеры рынка бизнес-автоматизации" },
  ];

  const values = [
    {
      icon: Target,
      title: "Ориентация на результат",
      description: "Мы работаем не ради процесса, а ради конкретных измеримых результатов для вашего бизнеса.",
    },
    {
      icon: Lightbulb,
      title: "Инновационный подход",
      description: "Используем передовые технологии и методики, постоянно развиваемся и внедряем новое.",
    },
    {
      icon: Shield,
      title: "Надёжность и прозрачность",
      description: "Выполняем обязательства в срок, держим клиентов в курсе на каждом этапе проекта.",
    },
    {
      icon: Users,
      title: "Команда экспертов",
      description: "В штате только профессионалы с опытом 10+ лет в своих областях.",
    },
    {
      icon: Zap,
      title: "Быстрота реализации",
      description: "Не затягиваем проекты — работаем эффективно и быстро достигаем целей.",
    },
    {
      icon: TrendingUp,
      title: "Долгосрочное партнёрство",
      description: "Не бросаем после внедрения — поддерживаем и развиваем решения вместе с вами.",
    },
  ];

  const differentiators = [
    "15+ лет опыта в консалтинге и автоматизации бизнеса",
    "Индивидуальный подход — нет готовых шаблонов",
    "Команда из 50+ специалистов разного профиля",
    "Гарантия результата прописана в договоре",
    "Средний ROI проектов — 300-500% за год",
    "Поддержка и развитие после внедрения",
  ];

  return (
    <>
      <SEO
        title="О нас"
        description="Avala — 15+ лет опыта в консалтинге и автоматизации бизнеса. Команда из 50+ экспертов. Более 500 успешных проектов с гарантией результата."
        keywords="о компании Avala, бизнес консалтинг, команда экспертов, опыт автоматизации"
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">О компании Avala</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы помогаем бизнесу расти с 2009 года. За это время реализовали более 500 проектов,
              помогли увеличить выручку клиентов на ₽2.5+ млрд и стали экспертами, которым доверяют.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-20">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-12 md:p-16 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                  <Award className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша миссия</h2>
                  <p className="text-xl leading-relaxed text-muted-foreground">
                    Делать технологии доступными для каждого бизнеса. Мы верим, что правильная
                    автоматизация и грамотная стратегия продаж могут кардинально изменить любую
                    компанию — от стартапа до корпорации. Наша задача — быть проводником в мир
                    эффективных решений и помогать достигать амбициозных целей.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наш путь</h2>
            <div className="relative">
              {/* Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className="inline-block md:block">
                        <div className="text-4xl font-bold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift hover-glow border-2">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-12 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Почему выбирают Avala
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {differentiators.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mb-20 bg-foreground text-background rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-background/80">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-background/80">Лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-background/80">Специалистов в команде</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-background/80">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-secondary rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать работу с Avala?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Давайте обсудим ваши задачи и найдём лучшее решение для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold" asChild>
                <Link to="/contacts">
                  Связаться с нами
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold border-2" asChild>
                <Link to="/team">Познакомиться с командой</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
