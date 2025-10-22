import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, Calendar, Building2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const Cases = () => {
  const cases = [
    {
      id: 1,
      client: "ТехноПром",
      industry: "Промышленное оборудование",
      date: "Октябрь 2024",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      challenge: "Низкая конверсия лидов в продажи, отсутствие контроля за работой менеджеров",
      before: {
        conversion: "25%",
        revenue: "₽8.5M/мес",
        managers: "12 менеджеров",
      },
      after: {
        conversion: "68%",
        revenue: "₽23.1M/мес",
        managers: "15 менеджеров",
      },
      improvement: "+172%",
      solution: [
        "Внедрили CRM-систему с автоматизацией процессов",
        "Настроили воронки продаж и аналитику в реальном времени",
        "Обучили менеджеров работе с системой и техникам продаж",
        "Создали систему мотивации на основе KPI",
      ],
      results: "Конверсия выросла в 2.7 раза, выручка увеличилась на 172%. Срок окупаемости проекта — 2.5 месяца.",
    },
    {
      id: 2,
      client: "МегаРитейл",
      industry: "Розничная торговля",
      date: "Сентябрь 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      challenge: "Неэффективная работа отдела продаж, отсутствие системы и процессов",
      before: {
        conversion: "Выручка ₽2.5M/мес",
        revenue: "8 сотрудников",
        managers: "Текучка 60%/год",
      },
      after: {
        conversion: "Выручка ₽6.8M/мес",
        revenue: "12 сотрудников",
        managers: "Текучка 15%/год",
      },
      improvement: "+172%",
      solution: [
        "Построили отдел продаж с нуля: структура, процессы, регламенты",
        "Разработали систему найма и адаптации новых сотрудников",
        "Внедрили CRM и автоматизировали рутинные операции",
        "Провели серию тренингов для всей команды",
      ],
      results: "Выручка выросла на 172%, текучка кадров снизилась в 4 раза. Создана масштабируемая система продаж.",
    },
    {
      id: 3,
      client: "ФинТех Групп",
      industry: "Финансовые услуги",
      date: "Август 2024",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      challenge: "Долгое время обработки обращений, низкая квалификация лидов, потеря клиентов",
      before: {
        conversion: "40 лидов/день",
        revenue: "Время ответа 4ч",
        managers: "Квалификация 30%",
      },
      after: {
        conversion: "180 лидов/день",
        revenue: "Время ответа 2мин",
        managers: "Квалификация 85%",
      },
      improvement: "+350%",
      solution: [
        "Разработали и внедрили чат-бота для первичной квалификации",
        "Настроили интеграцию с CRM и автоматическую маршрутизацию",
        "Внедрили AI для анализа качества лидов",
        "Автоматизировали рутинные операции поддержки",
      ],
      results: "Количество обработанных лидов выросло на 350%, время ответа сократилось с 4 часов до 2 минут.",
    },
  ];

  return (
    <>
      <SEO
        title="Кейсы"
        description="Реальные результаты наших клиентов: кейсы по внедрению CRM, построению отделов продаж и автоматизации. Рост выручки до 350%."
        keywords="кейсы внедрения CRM, примеры автоматизации продаж, результаты консалтинга"
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Кейсы наших клиентов</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные истории успеха. Прозрачные данные. Измеримые результаты.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="space-y-12">
            {cases.map((caseItem, index) => (
              <Card key={caseItem.id} className="overflow-hidden hover-glow border-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 md:h-auto overflow-hidden">
                      <img
                        src={caseItem.image}
                        alt={caseItem.client}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="bg-primary text-primary-foreground mb-3">
                          {caseItem.industry}
                        </Badge>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {caseItem.client}
                        </h2>
                        <div className="flex items-center text-white/80 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {caseItem.date}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10">
                      {/* Challenge */}
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                          Задача
                        </h3>
                        <p className="text-lg leading-relaxed">
                          {caseItem.challenge}
                        </p>
                      </div>

                      {/* Before/After */}
                      <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-secondary rounded-xl">
                        <div>
                          <div className="text-sm text-muted-foreground mb-3 font-medium">ДО</div>
                          <div className="space-y-2">
                            {Object.values(caseItem.before).map((value, i) => (
                              <div key={i} className="text-sm font-medium">{value}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-primary mb-3 font-medium">ПОСЛЕ</div>
                          <div className="space-y-2">
                            {Object.values(caseItem.after).map((value, i) => (
                              <div key={i} className="text-sm font-bold text-primary">{value}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Improvement */}
                      <div className="flex items-center space-x-3 mb-8 p-4 bg-primary/10 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">Рост</div>
                          <div className="text-3xl font-bold text-primary">{caseItem.improvement}</div>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                          Что мы сделали
                        </h3>
                        <ul className="space-y-2">
                          {caseItem.solution.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-sm font-medium leading-relaxed">
                          {caseItem.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-foreground text-background rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Хотите таких же результатов?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Давайте обсудим, как мы можем помочь вашему бизнесу достичь амбициозных целей
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg px-8" asChild>
              <Link to="/contacts">
                Обсудить проект
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cases;
