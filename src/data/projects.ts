import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "cv-portfolio",
    title: "CV-Portfolio SPA",
    summary: "React + TypeScript egyoldalas oldal: Home / Projects / Resume / Contact, CV letöltés.",
    tech: ["React", "TypeScript", "Vite", "React Router", "Vercel"],
    year: 2025,
    repo: "https://github.com/generatora357-ctrl/cv-portfolio",
    demo: "https://cv-portfolio-pa54816zy-timar-attilas-projects.vercel.app"
  },
  {
    id: "placeholder-1",
    title: "Mini komponenskönyvtár (később)",
    summary: "Kis UI komponensek (Button, Card, Tag) Storybookkal – gyakorláshoz.",
    tech: ["React", "TypeScript", "Storybook"],
    year: 2025
  }
];
