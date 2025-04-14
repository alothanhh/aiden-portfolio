import icAtom from '@/assets/icons/company-logo/Atom.png'
import icXelex from '@/assets/icons/company-logo/Xelex.jpg'

export const XELEX = {
  title: 'Software Engineer Intern',
  company_name: 'Xelex Corporation',
  logo: icXelex,
  location: 'Ho Chi Minh City, Vietnam',
  date: 'June 2023 - Aug 2023',
  description: [
    '• Gained hands-on experience and expanded knowledge of Angular. Additionally, I explored TailwindCSS, MongoDB, and ASP.NET Core during my internship.',
    '• Collaborated on the Onboarding project: Worked closely with teammates and a mentor on a project inspired by the Monday App - a popular tool that helps users plan tasks and schedules.',
    '• Contributed to website development: Developed a user-friendly, responsive, and accessible interface, ensuring a seamless user experience.',
    // "• Technologies and skills: Angular 16, TailwindCSS, MongoDB, ASP.NET Core, collaboration, presentation.",
  ],
}

export const ATOM = {
  company_name: 'ATOM Solution x Esol Labs',
  logo: icAtom,
  location: 'Ho Chi Minh City, Vietnam',
  roles: [
    {
      title: 'Frontend Developer',
      date: 'May 2024 - Apr 2025',
      description: [
        '• Developed payment solution projects for the banking sector',
        '• Collaborated closely with cross-functional teams, including back-end developers and designers, to understand business requirements and translate them into effective technical solutions.',
        '• Participated in code reviews and contributed to frontend best practices.',
      ],
    },
    {
      title: 'Software Engineer Intern',
      date: 'Mar 2024 - May 2024',
      description: [
        '• Researched and presented about the latest technologies on blockchain, such as Ethereum, SUI and Aptos.',
        '• Collaborated closely with cross-functional teams to develop decentralized web application (dApp) for creating and answering quizzes on-chain.',
        '• Integrated APIs and smart contracts into the dApp and created the UI/UX, ensuring that the website was user-friendly and visually appealing',
      ],
    },
  ],
}

export type SingleRoleExperienceProps = typeof XELEX
export type MultiRoleExperienceProps = typeof ATOM
