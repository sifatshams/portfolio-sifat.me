import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sifat Bin Anwar — Full Stack Web Developer",
    short_name: "Sifat.",
    description:
      "Portfolio of Sifat Bin Anwar, a full stack web developer from Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#050807",
    theme_color: "#050807",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
