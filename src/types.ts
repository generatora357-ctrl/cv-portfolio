export type Project = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  year: number;
  repo?: string;     // GitHub link (opcionális)
  demo?: string;     // élő demo link (opcionális)
  image?: string;    // borítókép (opcionális)
};
