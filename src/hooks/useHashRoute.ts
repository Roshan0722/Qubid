import { useEffect, useState } from "react";

function current() {
  const h = window.location.hash.replace(/^#/, "");
  if (!h || h === "/" || h === "top") return "/";
  return h.startsWith("/") ? h : "/";
}

export function useHashRoute() {
  const [route, setRoute] = useState<string>(() =>
    typeof window === "undefined" ? "/" : current(),
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(current());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
}
