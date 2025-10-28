import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import SEO from "@/components/SEO";

// =================== COOKIE HELPERS ===================
function setCookie(name: string, value: string, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name: string) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

// =================== SCHEMA ===================
const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа").max(100),
  phone: z.string().min(10, "Введите корректный номер телефона").max(20),
  service: z.string().min(1, "Выберите услугу"),
});

type FormData = z.infer<typeof formSchema>;

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
    },
  });

  // =================== RESTORE ANSWERS ===================
  useEffect(() => {
    const saved = getCookie("quiz_answers");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        Object.entries(data).forEach(([key, val]) => {
          if (form.getValues(key as keyof FormData) !== undefined) {
            form.setValue(key as keyof FormData, val as string);
          }
        });
      } catch {}
    }
  }, []);

  // =================== SAVE ON INPUT ===================
  useEffect(() => {
    const subscription = form.watch((values) => {
      setCookie("quiz_answers", JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  // =================== SUBMIT HANDLER ===================
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fields[name_1]", data.name);
    formData.append("fields[1211551_1][1320185]", data.phone);
    formData.append("fields[1345771_1]", data.service);
    formData.append("form_id", "1619786");
    formData.append("hash", "1c0c7e5cec0e69e971dc66957e052709");

    // ⚙️ ЗАМЕНИ ЭТУ ССЫЛКУ на свою форму AmoCRM:
    const AMO_FORM_ACTION = "https://forms.amocrm.ru/queue/add";

    try {
      await fetch(AMO_FORM_ACTION, {
        method: "POST",
        body: formData,
        mode: "no-cors", // важно для фронта без CORS-ошибок
      });

      toast({
        title: "✅ Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      setCookie("quiz_answers", "{}", -1); // очистить куки
      form.reset();
    } catch (err) {
      toast({
        title: "Ошибка при отправке",
        description: "Попробуйте позже или свяжитесь по телефону.",
        variant: "destructive",
      });
    }

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
      content: 'Бишкек, ул. Кулатова 61, БЦ "Ololo", офис 504',
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
        description="Свяжитесь с Avala Consulting: телефон, адрес, заявка на консультацию по CRM и автоматизации бизнеса."
        keywords="контакты Avala Consulting, заявка, консультация, CRM, AI решения, Avala"
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-10xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами удобным способом. Мы ответим на все вопросы и поможем подобрать решение для вашего бизнеса.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Оставить заявку</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="quizForm">
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Телефон *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+996 (___) ___-__-__" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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
                                <SelectItem value="curatorship">Кураторство</SelectItem>
                                <SelectItem value="consultation">Консультация</SelectItem>
                              </SelectContent>
                            </Select>
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
                          <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
