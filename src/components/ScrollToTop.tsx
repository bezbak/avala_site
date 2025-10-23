import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // плавно скроллим к верху страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // плавная анимация
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
