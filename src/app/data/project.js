export const PROJECTS = [
  {
    slug: "hawkin",
    name: "Hawkin",
    image: "/hawkin.png",
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    description:
      "A responsive web application built with React.js, JavaScript, and Tailwind CSS, focused on delivering a smooth and reliable user experience with dynamic request handling.",
    liveLink: "https://pawfeet-client.vercel.app/",
    githubLink: "https://github.com/tahiamubin/Hawkin",
    challenges:
      "Managing dynamic status updates — such as transitioning a request's state from pending to accepted or rejected — while keeping state consistent across components. As one of my earlier projects, I used Context API for state management, which came with its own learning curve around avoiding unnecessary re-renders and structuring context providers cleanly as the app grew.",
    improvements:
      "Planning to refine the status update flow with real-time feedback and revisit the state management setup — possibly moving to a more scalable solution as the app grows.",
  },
  {
    slug: "flexstack",
    name: "FlexStack",
    image: "/flackstack.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
    description:
      "A full-stack web application built with Next.js, JavaScript, and Tailwind CSS, designed for scalability, secure authentication, and clean user interaction.",
    liveLink: "https://flexstack-client.vercel.app/",
    githubLink: "https://github.com/tahiamubin/FlexStack",
    challenges:
      "One of the main challenges was implementing JWT-based authentication and properly handling token retrieval, storage, and validation across the app.",
    improvements:
      "Planning to secure role-based actions more robustly and implement JWKS (JSON Web Key Set) for improved token verification and security.",
  },
  {
    slug: "kinkeeper",
    name: "KinKeeper",
    image: "/keen.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
    description:
      "A web application built with Next.js, JavaScript, and Tailwind CSS, deployed on Cloudflare Workers, aimed at solving a real-world use case with a clean, intuitive interface.",
    liveLink: "https://floral-scene-b562.tahiamubin07.workers.dev/",
    githubLink: "https://github.com/tahiamubin/KinKeeper",
    challenges:
      "Placeholder — add specific challenges faced during development.",
    improvements:
      "Placeholder — add potential future improvements.",
  },
];