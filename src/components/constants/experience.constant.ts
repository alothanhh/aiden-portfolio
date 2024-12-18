import icXelex from "@/assets/icons/company-logo/Xelex.jpg";
import icAtom from "@/assets/icons/company-logo/Atom.png";

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "ATOM Solution x Esol Labs",
    logo: icAtom,
    work_type: "Ho Chi Minh City, Vietnam",
    date: "Apr 2024 - Present",
    description: [
      "Developed and maintained the backend of the website, ensuring it was secure, performant, and scalable.",
      "Collaborated with the team to design and implement new features, such as a chatbot for customer support and a mobile app for iOS and Android.",
      "Contributed to the development of the website's user interface, including responsive design and accessibility features.",
      "Participated in the development of the website's data visualizations and interactive charts, ensuring they were user-friendly and visually appealing.",
      "Worked closely with the team to ensure the website was accessible to users with disabilities, including keyboard navigation and screen readers.",
      "Maintained the website's performance and security, addressing any issues that arose and implementing necessary updates to ensure it remained up-to-date and secure.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Xelex Corporation",
    logo: icXelex,
    work_type: "Ho Chi Minh City, Vietnam",
    date: "June 2023 - Aug 2023",
    description: [
      "• Gained hands-on experience and expanded knowledge of Angular. Additionally, I explored TailwindCSS, MongoDB, and ASP.NET Core during my internship.",
      "• Collaborated on the Onboarding project: Worked closely with teammates and a mentor on a project inspired by the Monday App - a popular tool that helps users plan tasks and schedules.",
      "• Contributed to website development: Developed a user-friendly, responsive, and accessible interface, ensuring a seamless user experience.",
      "• Technologies and skills: Angular 16, TailwindCSS, MongoDB, ASP.NET Core, collaboration, presentation.",
    ],
  },
];

export type ExperienceProps = (typeof EXPERIENCES)[number];
