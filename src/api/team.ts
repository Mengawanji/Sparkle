// api/team.ts

import team1 from "../images/teams/1.jpg";
import team2 from "../images/teams/2.jpg";
import team3 from "../images/teams/3.jpg";
import team4 from "../images/teams/4.jpg";
import team5 from "../images/teams/5.jpg";
import team6 from "../images/teams/6.jpg";
import team7 from "../images/teams/7.jpg";
import team8 from "../images/teams/8.jpg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  slug: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Master Plumber",
    slug: "emma-thompson",
    image: team1,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 2,
    name: "Liam Anderson",
    role: "Office Manager",
    slug: "liam-anderson",
    image: team2,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 3,
    name: "Olivia Martin",
    role: "Plumbing Technician",
    slug: "olivia-martin",
    image: team3,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 4,
    name: "James Carter",
    role: "Customer Service Coordinator",
    slug: "james-carter",
    image: team4,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 5,
    name: "Ryan Mitchell",
    role: "Lead Plumbing Specialist",
    slug: "ryan-mitchell",
    image: team5,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 6,
    name: "Jacob Carter",
    role: "Service Specialist",
    slug: "jacob-carter",
    image: team6,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 7,
    name: "Leon Andrews",
    role: "Master Plumbing Engineer",
    slug: "leon-andrews",
    image: team7,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  {
    id: 8,
    name: "Caleb Morgan",
    role: "Licensed Water Systems Expert",
    slug: "caleb-morgan",
    image: team8,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

export default teamMembers;