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
    "10+ лет опыта в консалтинге и автоматизации бизнеса",
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

      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-12xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AVALA CONSULTING</h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы помогаем компаниям строить прозрачные и эффективные бизнес-процессы, внедрять современные технологии и превращать продажи в работающую систему, приносящую стабильный результат.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <Card className="border overflow-hidden">
              <CardContent className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Наша миссия</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Наша миссия — помогать компаниям расти и развиваться. Мы упрощаем сложные процессы, повышаем эффективность команд и создаём прозрачную, управляемую бизнес-среду, в которой руководители принимают решения уверенно и своевременно.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          {/* <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Наш путь</h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
              
              <div className="space-y-10">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative grid md:grid-cols-2 gap-6 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className="inline-block md:block">
                        <div className="text-3xl font-bold text-primary mb-1.5">{item.year}</div>
                        <h3 className="text-lg font-semibold mb-1.5">{item.event}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift hover-glow border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <Card className="border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                  Почему выбирают Avala
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                  {differentiators.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-base leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mb-16 bg-foreground text-background rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">500+</div>
                <div className="text-sm text-background/80">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">10+</div>
                <div className="text-sm text-background/80">Лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">50+</div>
                <div className="text-sm text-background/80">Специалистов в команде</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1.5">98%</div>
                <div className="text-sm text-background/80">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы начать работу с Avala?
            </h2>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Давайте обсудим ваши задачи и найдём лучшее решение для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold" asChild>
                <Link to="/contacts">
                  Связаться с нами
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="font-semibold border-2" asChild>
                <Link to="/team">Познакомиться с командой</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;