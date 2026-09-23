import { useEffect, useState } from "react";

function parseHash() {
  return window.location.hash.replace(/^#/, "");
}

function routeFor(raw: string) {
  if (!raw || raw === "/" || raw === "top") return "/";
  return raw.startsWith("/") ? raw : "/";
}

function scrollToSection(id: string) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

export function useHashRoute() {
  const [route, setRoute] = useState<string>(() =>
    typeof window === "undefined" ? "/" : routeFor(parseHash()),
  );

  // scroll to a section anchor present in the URL on first load (e.g. a shared link)
  useEffect(() => {
    const raw = parseHash();
    if (raw && raw !== "/" && raw !== "top" && !raw.startsWith("/")) {
      scrollToSection(raw);
    }
  }, []);

  useEffect(() => {
    const onHash = () => {
      const raw = parseHash();
      setRoute(routeFor(raw));

      if (!raw || raw === "/" || raw === "top" || raw.startsWith("/")) {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        scrollToSection(raw);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}
