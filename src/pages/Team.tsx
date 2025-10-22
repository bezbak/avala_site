import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import SEO from "@/components/SEO";

const Team = () => {
  const team = [
    {
      name: "Алексей Морозов",
      role: "Основатель и CEO",
      expertise: ["Стратегия", "CRM", "Управление"],
      bio: "15+ лет опыта в консалтинге и автоматизации бизнеса. Реализовал более 200 проектов для крупнейших компаний России.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      linkedin: "https://linkedin.com",
      email: "a.morozov@avala.ru",
    },
    {
      name: "Екатерина Волкова",
      role: "Директор по развитию",
      expertise: ["Продажи", "Бизнес-процессы", "Обучение"],
      bio: "Эксперт по построению отделов продаж с нуля. Обучила более 500 менеджеров, увеличив их эффективность в среднем на 180%.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
      linkedin: "https://linkedin.com",
      email: "e.volkova@avala.ru",
    },
    {
      name: "Дмитрий Соколов",
      role: "Технический директор",
      expertise: ["AI", "Автоматизация", "Интеграции"],
      bio: "Специалист по искусственному интеллекту и machine learning. Внедрил ИИ-решения для 50+ компаний.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
      linkedin: "https://linkedin.com",
      email: "d.sokolov@avala.ru",
    },
    {
      name: "Мария Новикова",
      role: "Руководитель проектов",
      expertise: ["Управление проектами", "Аналитика", "CRM"],
      bio: "Сертифицированный PMP с опытом управления комплексными проектами. Гарантирует результат и соблюдение сроков.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces",
      linkedin: "https://linkedin.com",
      email: "m.novikova@avala.ru",
    },
    {
      name: "Игорь Петров",
      role: "Ведущий разработчик",
      expertise: ["Чат-боты", "Интеграции", "API"],
      bio: "Разработчик с 12-летним опытом. Создал более 100 чат-ботов и интеграций для автоматизации бизнес-процессов.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
      linkedin: "https://linkedin.com",
      email: "i.petrov@avala.ru",
    },
    {
      name: "Анна Смирнова",
      role: "Бизнес-тренер",
      expertise: ["Тренинги", "Продажи", "Коучинг"],
      bio: "Профессиональный бизнес-тренер и коуч. Провела более 200 тренингов для отделов продаж крупных компаний.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
      linkedin: "https://linkedin.com",
      email: "a.smirnova@avala.ru",
    },
  ];

  return (
    <>
      <SEO
        title="Наша команда"
        description="Команда экспертов Avala: специалисты по CRM, автоматизации, AI, построению отделов продаж и бизнес-тренингам с опытом 10+ лет."
        keywords="команда Avala, эксперты по CRM, специалисты по автоматизации, бизнес-тренеры"
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Наша команда</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Профессионалы с многолетним опытом в консалтинге, автоматизации
              и развитии бизнеса. Каждый — эксперт в своей области.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift hover-glow border-2 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Contact */}
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Us Section */}
          <div className="bg-foreground text-background rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Хотите присоединиться к команде?
            </h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Мы всегда ищем талантливых специалистов в области консалтинга,
              автоматизации и развития бизнеса
            </p>
            <a
              href="mailto:hr@avala.ru"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg transition-colors"
            >
              Отправить резюме
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
