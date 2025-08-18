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
  tech: string[];
  logo: string;
  url: string;
  info?: string;
  infoDetail?: string[];
  role?: Role[];
  review?: string[];
  result?: Result[];
}
