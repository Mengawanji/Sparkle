import project6 from "../images/project/6.jpg";

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
  col: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Home Deep Cleaning",
    category: "Home",
    image: project6,
    slug: "deep-clean",
    col: "col-lg-4 col-md-5 col-12",
  },
];

export default projects;