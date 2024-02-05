import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cariKture,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN-Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "CariKture India",
      icon: cariKture,
      iconBg: "#383E56",
      date: "September 2022 - November 2022",
      points: [
        "Developed and maintained web applications using HTML, CSS, and JavaScript.",
        "Worked majorly on front-end development. Built and maintained blog sites.",
        "Oversaw website optimisation and improved the SEO scores.",
      ],
    },
   
  ];
  
  
  const projects = [
    {
      name: "X-Social Media",
      description:
        "Developed a dynamic social media platform reminiscent of Twitter using Next.js and TypeScript. Implemented responsive design and real-time functionalities to enhance user engagement.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Vib-D/X-SocialMedia",
    },
    {
      name: "Gourmetia",
      description:
        "Created a fully responsive restaurant landing page with a modern UI/UX using ReactJS and Figma.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS-BEM-Model",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Vib-D/react_restaurant",
    },
    {
      name: "Stay Healthy",
      description:
        "Web application that allows users to book their appointment with doctors. It also provides information about the doctor's specialty, location, and availability for each appointment.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Vib-D",
    },
  ];
  
  export { services, technologies, experiences, projects };