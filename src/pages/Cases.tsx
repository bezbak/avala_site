import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const Cases = () => {
  const cases = [
    {
      id: 1,
      client: "Trading Lub",
      industry: "Трейдинговая компания",
      date: "Октябрь 2024",
      image: "../../public/trading2.avif",
      challenge: "Хаос в продажах, низкий поток новых клиентов и слабая конверсия в сделки.",
      before: {
        revenue: "300 000 сом/мес",
        managers: "Несистемные продажи",
      },
      after: {
        revenue: "1 500 000 сом/мес",
        managers: "Автоматизация и контроль",
      },
      improvement: "+400%",
      solution: [
        "Пересобрали стратегию продаж и продуктовую линейку",
        "Настроили автоматизацию от заявки до сделки",
        "Обучили команду продавать системно и уверенно",
      ],
      results: "Выручка выросла в 5 раз, продажи стали стабильными и управляемыми.",
    },
    {
      id: 2,
      client: "IOI",
      industry: "Инвестиционная компания",
      date: "Сентябрь 2024",
      image: "../../public/invest2.webp",
      challenge: "Отсутствие системы привлечения инвесторов и нулевая выручка на старте проекта.",
      before: {
        conversion: "0 сом/мес",
        revenue: "Нет стратегии и аналитики",
      },
      after: {
        conversion: "1 300 000 сом/мес",
        revenue: "Выстроенная система привлечения",
      },
      improvement: "+∞ (с нуля до стабильного дохода)",
      solution: [
        "Разработали стратегию привлечения и сопровождения инвесторов",
        "Настроили систему аналитики для прозрачности проектов",
        "Выстроили клиентский сервис, формирующий доверие и лояльность",
      ],
      results: "Компания вышла с нуля на оборот 1.3 млн сомов и устойчивый поток инвесторов.",
    },
    {
      id: 3,
      client: "Selfvisa.kg",
      industry: "Визовый центр",
      date: "Август 2024",
      image: "../../public/selfvisa.png",
      challenge: "Нестабильный поток заявок и ограниченный доход до 1 000 000 сомов.",
      before: {
        conversion: "1 000 000 сом/мес",
        revenue: "Нет стабильного потока клиентов",
      },
      after: {
        conversion: "11 000 000 сом/мес",
        revenue: "Стабильные заявки",
      },
      improvement: "+1000%",
      solution: [
        "Запустили таргетированные рекламные кампании на нужную аудиторию",
        "Автоматизировали приём заявок через чат-бот",
        "Оптимизировали клиентский путь от консультации до визы",
      ],
      results: "Рост оборота в 11 раз и стабильный поток заявок каждый месяц.",
    },
    {
      id: 4,
      client: "Start Up",
      industry: "Онлайн-образование для швейных производств",
      date: "Август 2024",
      image: "../../public/sew2.jpg",
      challenge: "Проект на стадии идеи: отсутствовала выручка и реализация.",
      before: {
        conversion: "0 сом/мес",
        revenue: "Нет запущенного продукта",
      },
      after: {
        conversion: "1 200 000/мес",
        revenue: "Реализованный проект"
      },
      improvement: "+∞ (с нуля до стабильного дохода)",
      solution: [
        "Запустили проект с нуля: идея, платформа, первые клиенты",
        "Настроили систему продаж онлайн-курсов",
        "Разработали стратегию удержания и возврата аудитории",
      ],
      results: "Проект вышел с нуля на 1.2 млн сомов и занял нишу в онлайн-образовании для швейных производств.",
    },
  ];

  return (
    <>
      <SEO
        title="Кейсы"
        description="Реальные результаты наших клиентов: кейсы по внедрению CRM, построению отделов продаж и автоматизации. Рост выручки до 350%."
        keywords="кейсы внедрения CRM, примеры автоматизации продаж, результаты консалтинга"
      />

      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-12xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-4xl font-bold mb-3">Кейсы наших клиентов</h1>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto">
              Реальные истории успеха. Прозрачные данные. Измеримые результаты.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="space-y-8">
            {cases.map((caseItem, index) => (
              <Card key={caseItem.id} className="overflow-hidden hover-glow border animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-48 md:h-auto overflow-hidden flex items-center justify-center">
                      <img
                        src={caseItem.image}
                        alt={caseItem.client}
                        className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-primary text-primary-foreground mb-2 text-xs px-2 py-0.5">
                          {caseItem.industry}
                        </Badge>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {caseItem.client}
                        </h2>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6">
                      {/* Challenge */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Задача
                        </h3>
                        <p className="text-base leading-relaxed">
                          {caseItem.challenge}
                        </p>
                      </div>

                      {/* Before/After */}
                      <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-secondary rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground mb-2 font-medium">ДО</div>
                          <div className="space-y-1.5">
                            {Object.values(caseItem.before).map((value, i) => (
                              <div key={i} className="text-sm">{value}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-primary mb-2 font-medium">ПОСЛЕ</div>
                          <div className="space-y-1.5">
                            {Object.values(caseItem.after).map((value, i) => (
                              <div key={i} className="text-sm font-medium text-primary">{value}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Improvement */}
                      <div className="flex items-center space-x-2 mb-5 p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <div className="text-sm text-muted-foreground">Рост</div>
                          <div className="text-xl font-bold text-primary">{caseItem.improvement}</div>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Что мы сделали
                        </h3>
                        <ul className="space-y-1.5">
                          {caseItem.solution.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="p-3 bg-secondary rounded-lg">
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
          <div className="mt-16 bg-foreground text-background rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Хотите таких же результатов?
            </h2>
            <p className="text-base text-background/80 mb-6 max-w-2xl mx-auto">
              Давайте обсудим, как мы можем помочь вашему бизнесу достичь амбициозных целей
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6" asChild>
              <Link to="/contacts">
                Обсудить проект
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cases;