import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Страница не найдена</h2>
          <p className="text-xl text-muted-foreground mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold">
            <Link to="/">
              <Home className="mr-2 w-5 h-5" />
              На главную
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold border-2" onClick={() => window.history.back()}>
            <button>
              <ArrowLeft className="mr-2 w-5 h-5" />
              Назад
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
