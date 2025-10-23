import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SEO from "@/components/SEO";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа").max(100),
  company: z.string().min(2, "Название компании должно содержать минимум 2 символа").max(100),
  phone: z.string().min(10, "Введите корректный номер телефона").max(20),
  email: z.string().email("Введите корректный email").max(255),
  service: z.string().min(1, "Выберите услугу"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+996 (505) 123 233",
      link: "tel:+996505123233",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "Бишкек, ул. Кулатова 61, БЦ \"Ololo\", офис 504",
      link: null,
    },
    {
      icon: Clock,
      title: "Режим работы",
      content: "Пн-Пт: 9:00 - 19:00, Сб-Вс: выходной",
      link: null,
    },
  ];

  return (
    <>
      <SEO
        title="Контакты"
        description="Свяжитесь с Avala: телефон +7 (495) 123-45-67, email info@avala.ru. Адрес офиса в Москве. Оставьте заявку на консультацию."
        keywords="контакты Avala, офис в Москве, консультация по CRM, связаться с консультантами"
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-10xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами удобным способом. Мы ответим на все вопросы и поможем
              подобрать оптимальное решение для вашего бизнеса.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ваше имя *</FormLabel>
                            <FormControl>
                              <Input placeholder="Иван Иванов" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Компания *</FormLabel>
                            <FormControl>
                              <Input placeholder="ООО «Ваша компания»" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Телефон *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+7 (___) ___-__-__" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Интересующая услуга *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Выберите услугу" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="crm">Внедрение CRM-систем</SelectItem>
                                <SelectItem value="sales">Построение отдела продаж</SelectItem>
                                <SelectItem value="chatbots">Чат-боты</SelectItem>
                                <SelectItem value="training">Тренинги для менеджеров</SelectItem>
                                <SelectItem value="ai">ИИ-решения</SelectItem>
                                <SelectItem value="consultation">Консультация</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Сообщение *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Расскажите подробнее о вашей задаче..."
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Отправка..." : "Отправить заявку"}
                        <Send className="ml-2 w-5 h-5" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          политикой конфиденциальности
                        </a>
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover-lift border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social/Additional Contact */}
              <Card className="border-2 bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Мы в социальных сетях</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://wa.me/996505123233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="https://instagram.com/avala.consult"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-sm"
                    >
                      Instagram
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Как нас найти</h2>
            <Card className="overflow-hidden border-2">
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-secondary">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.4162860212527!2d74.59710332946375!3d42.86047520659491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7136f9e750f%3A0x30b0e124a2318698!2sololoYurt!5e0!3m2!1sen!2skg!4v1761216159770!5m2!1sen!2skg" className="w-full h-full" loading="lazy"></iframe>
                  {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-background/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-sm">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-center font-medium">
                        Бишкек, ул. Кулатова 61<br />
                        БЦ "Ololo", офис 504
                      </p>
                    </div>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
