export const PROJECTS = [
  {
    slug: "hawkin",
    name: "Hawkin",
    image: "/hawkin.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "Node js", "Express" , "MongoDb"],
    description:
      "A pet adoption portal  built for Bangladesh's pet-loving community. Users can browse pets with detailed profiles — health records, vaccination status, and behaviour assessments — and submit or track adoption requests through a personal dashboard, while shelters and owners can list pets and manage incoming requests.",
    liveLink: "https://pawfeet-client.vercel.app/",
    githubLink: "https://github.com/tahiamubin/Hawkin",
    challenges:
      "Managing dynamic status updates — such as transitioning a request's state from pending to accepted or rejected — while keeping state consistent across components.",
    improvements:
      "Planning to refine the status update flow with real-time feedback and revisit the state management setup — possibly moving to a more scalable solution as the app grows.",
  },
  {
    slug: "flexstack",
    name: "FlexStack",
    image: "/flackstack.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "Node js", "Express" , "MongoDb"],
    description:
      "A full-stack Fitness & Gym Management Platform where members discover and book classes, trainers manage their content, and admins have full control over the platform — secured with JWT-based authentication and role-based access control across three user types.",
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
    techStack: ["React.js", "React Router", "Recharts", "Tailwind CSS"],
    description:
      "A responsive web app that helps you stay in touch with friends by tracking your last contact date, logging interactions like calls, texts, and video chats, and visualizing your friendship activity through timelines and analytics — including a Recharts-powered pie chart breakdown by interaction type.",
    liveLink: "https://floral-scene-b562.tahiamubin07.workers.dev/",
    githubLink: "https://github.com/tahiamubin/KinKeeper",
    challenges:
      "Managing shared state across the app using Context API — handling prop drilling issues and structuring context providers cleanly as more features were added.",
    improvements:
      "Planning to explore a more scalable state management approach as the app grows, along with performance optimizations and additional features.",
  },
];