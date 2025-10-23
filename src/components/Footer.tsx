import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Avala</h3>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Консалтинг и автоматизация для роста вашего бизнеса. Мы помогаем компаниям
              внедрять современные решения и достигать амбициозных целей.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/avala.consult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Быстрые ссылки</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-primary transition-colors text-sm">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-background/80 hover:text-primary transition-colors text-sm">
                  Команда
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Услуги</h4>
            <ul className="space-y-3">
              <li className="text-background/80 text-sm">Внедрение CRM-систем</li>
              <li className="text-background/80 text-sm">Построение отдела продаж</li>
              <li className="text-background/80 text-sm">Чат-боты и автоматизация</li>
              <li className="text-background/80 text-sm">Тренинги для менеджеров</li>
              <li className="text-background/80 text-sm">ИИ-решения для бизнеса</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+996505123233" className="text-background/80 hover:text-primary transition-colors text-sm block">
                    +996 505 123 233
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@avala.ru" className="text-background/80 hover:text-primary transition-colors text-sm block">
                    info@avala.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm">
                    Бишкек, ул. Кулатова 61<br />
                    БЦ "Ololo", офис 504
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Avala. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors text-sm">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-primary transition-colors text-sm">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
