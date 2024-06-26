import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    spotify,
    reactjs,
    redux,
    tailwind,
    gfg,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    tesla,
    cour,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    starbucks,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mern Devloper",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
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
      name: "TypeScript",
      icon: typescript,
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
      title: "Algorithms",
      company_name: "coursera::Stanford University",
      icon: cour,
      iconBg: "#383E56",
      date: "April 2023 - Jun 2023",
      points: [
        "Learned to design, analyze, and optimize algorithms for various computational problems.",
        "Studied algorithm complexity, ensuring efficient solutions to complex data challenges.",
        "Mastered graph algorithms, including shortest paths, spanning trees, and network flows.",
        "Applied divide and conquer techniques to solve recursive and dynamic programming problems.",
      ],
    },
    {
      title: "Data Science: Foundations using R",
      company_name: "coursera::Johns Hopkins University",
      icon: cour,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Gain a comprehensive understanding of basic data science principles, including data manipulation, visualization, and statistical analysis using R.",
        "Develop skills in R programming to efficiently clean, analyze, and visualize data.",
        "Conduct statistical inference, applying methods to test hypotheses and derive data insights",
        "Gain hands-on experience with real-world projects involving data collection, cleaning, analysis, and visualization.",
      ],
    },
    {
      title: "Complete Machine Learning & Data Science Program",
      company_name: "GeeksForGeeks",
      icon: gfg,
      iconBg: "#E6DEDD",
      date: "April 2024 - June 2024",
      points: [
        "Learned and implemented machine learning algorithms, including regression, classification, and clustering.",
        "Gained expertise in data preprocessing, feature engineering, and model optimization.",
        "Worked on practical projects applying machine learning techniques to real-world problems.",
        "Work on practical projects that apply machine learning techniques to real-world problems, enhancing hands-on experience and portfolio.",
      ],
    },
    
    {
      title: "Full Stack Development with React & Node JS",
      company_name: "GeeksForGeeks",
      icon: gfg,
      iconBg: "#E6DEDD",
      date: "April 2024 - July 2024",
      points: [
        "Developed and maintained web applications using React.js and Node.js.",
        "Collaborated with cross-functional teams to create high-quality products",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews, providing constructive feedback.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "A Spotify clone app built with React and Node.js, featuring music streaming, playlists, user authentication, and responsive design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/ujjwaljha1/Spotify-Clone",
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };