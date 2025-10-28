import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart3, Users, Bot, GraduationCap, BrainCircuit, CheckCircle, ArrowRight, ChartLine } from "lucide-react";
import SEO from "@/components/SEO";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Внедрение CRM-систем",
      problem: "Потеря сделок, отсутствие контроля за отделом продаж, невозможность прогнозировать результаты",
      solution: "Внедряем и настраиваем CRM-систему под специфику вашего бизнеса. Автоматизируем процессы, настраиваем аналитику и воронки продаж.",
      benefits: [
        "Полная прозрачность работы отдела продаж",
        "Контроль всех этапов сделки в реальном времени",
        "Точные прогнозы выручки на основе данных",
        "Автоматизация рутинных операций",
        "Интеграция с существующими системами",
      ],
    },
    {
      icon: Users,
      title: "Построение отдела продаж",
      problem: "Хаотичная работа менеджеров, отсутствие системы, низкая конверсия, высокая текучка кадров",
      solution: "Создаём эффективную структуру отдела продаж с нуля: разработка процессов, подбор команды, обучение, система мотивации и KPI.",
      benefits: [
        "Чёткая структура и процессы продаж",
        "Система найма и адаптации сотрудников",
        "Эффективная мотивация команды",
        "Регулярная аналитика результатов",
        "Масштабируемая модель роста",
      ],
    },
    {
      icon: Bot,
      title: "Чат-боты и автоматизация",
      problem: "Менеджеры тратят время на рутинные вопросы, долгое время ответа клиентам, пропущенные обращения",
      solution: "Разрабатываем интеллектуальных чат-ботов для автоматизации общения с клиентами, квалификации лидов и поддержки 24/7.",
      benefits: [
        "Мгновенные ответы клиентам круглосуточно",
        "Автоматическая квалификация лидов",
        "Освобождение времени менеджеров",
        "Повышение лояльности клиентов",
        "Интеграция с CRM и мессенджерами",
      ],
    },
    {
      icon: GraduationCap,
      title: "Тренинги для менеджеров",
      problem: "Слабые навыки продаж, менеджеры звонят и пишут, но не добиваются результата. Клиенты не чувствуют уверенности и интереса к общению.",
      solution: "Проводим практические тренинги, где учим уверенно продавать через современные техники и живую коммуникацию.",
      benefits: [
        "Рост продаж и конверсии",
        "Увеличение конверсии переговоров",
        "Уверенных и мотивированных менеджеров",
        "Навыки эффективного общения с клиентом",
        "Больше сделок и довольных клиентов",
        "Энергичную и вовлечённую команду"
      ],
    },
    {
      icon: BrainCircuit,
      title: "ИИ-решения для бизнеса",
      problem: "Сложно прогнозировать спрос, нет персонализации, неэффективное распределение ресурсов",
      solution: "Внедряем решения на базе искусственного интеллекта: прогнозирование продаж, персонализация предложений, оптимизация процессов.",
      benefits: [
        "Точные прогнозы спроса и выручки",
        "Персонализация для каждого клиента",
        "Оптимизация маркетинговых расходов",
        "Автоматический анализ больших данных",
        "Конкурентное преимущество на рынке",
      ],
    },
    {
      icon: ChartLine,
      title: "Кураторство",
      problem: "Продажи идут нестабильно, менеджеры теряют лиды, нет системного контроля и обратной связи. Руководителю сложно оценить эффективность команды и вовремя скорректировать действия.",
      solution: "Мы берём на себя ежедневный контроль и сопровождение отдела продаж. Анализируем работу, выявляем узкие места и помогаем внедрять решения, которые повышают результат.",
      benefits: [
        "Ежедневный анализ CRM-системы и прослушка звонков",
        "Рекомендации по улучшению работы менеджеров",
        "Два видеозвонка в неделю с РОПом",
        "Два видеозвонка в месяц с руководителем",
        "Предложения по акциям, рассылкам и скриптам продаж",
        "Один офлайн-тренинг от ведущего специалиста",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Наши услуги"
        description="Внедрение CRM-систем, построение отделов продаж, чат-боты, тренинги для менеджеров и ИИ-решения. Комплексные решения для роста вашего бизнеса."
        keywords="внедрение CRM, построение отдела продаж, чат-боты для бизнеса, тренинги менеджеров, ИИ решения"
      />

      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-12xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-4xl font-bold mb-3">Наши услуги</h1>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Комплексные решения для автоматизации и развития вашего бизнеса.
              Работаем на результат с гарантией качества.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-10">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover-glow border">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
                    {/* Icon & Title */}
                    <div className="md:col-span-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                      
                      <div className="space-y-4 mt-6">
                        <div>
                          <h3 className="text-sm font-semibold text-destructive mb-1.5 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive mr-2" />
                            Проблема
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.problem}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-primary mb-1.5 flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            Решение
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="md:col-span-3">
                      <h3 className="text-base font-semibold mb-4">Что вы получите:</h3>
                      <div className="space-y-3 mb-6">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start space-x-2.5">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm leading-relaxed">{benefit}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button size="default" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold" asChild>
                        <Link to="/contacts">
                          Записаться
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-foreground text-background rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Нужна комплексная консультация?
            </h2>
            <p className="text-base text-background/80 mb-6 max-w-2xl mx-auto">
              Наши эксперты помогут подобрать оптимальный набор услуг для решения ваших задач
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6" asChild>
              <Link to="/contacts">
                Получить консультацию
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;