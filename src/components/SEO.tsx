import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({ title, description, keywords, ogImage, canonicalUrl }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} — Avala`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", `${title} — Avala`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    if (ogImage) {
      updateMetaTag("og:image", ogImage, true);
    }

    // Twitter tags
    updateMetaTag("twitter:title", `${title} — Avala`);
    updateMetaTag("twitter:description", description);
    if (ogImage) {
      updateMetaTag("twitter:image", ogImage);
    }

    // Canonical URL
    if (canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEO;
