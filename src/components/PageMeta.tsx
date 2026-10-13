import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
};

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attribute: "name" | "property", key: string, value: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }

      tag.content = value;
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
  }, [title, description]);

  return null;
}
