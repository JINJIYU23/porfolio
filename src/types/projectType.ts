import type { IconType } from "react-icons";
interface Task {
  name: string | null;
  details: string[];
}

interface Role {
  title: string;
  tasks: Task[];
}

interface Result {
  title: string;
  img: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon: IconType;
  date: string;
  tech: string[];
  logo: string;
  github: string;
  url: string;
  info?: string;
  infoDetail?: string[];
  role?: Role[];
  review?: string[];
  result?: Result[];
}
