import { useState } from "react";
import { Phone, X, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-xl shadow-xl p-4 w-64 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-foreground">Связаться с нами</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            <a
              href="tel:+996505123233"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Позвонить</div>
                <div className="text-xs text-muted-foreground">+996 (505) 123-233</div>
              </div>
            </a>
            <a
              href="https://wa.me/996505123233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium">WhatsApp</div>
                <div className="text-xs text-muted-foreground">Написать в чат</div>
              </div>
            </a>
            <Link
              to="/contacts"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-medium">Оставить заявку</div>
                <div className="text-xs text-muted-foreground">Форма обратной связи</div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="w-16 h-16 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Контакты"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingContact;
