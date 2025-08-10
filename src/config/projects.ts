export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  links: {
    website?: string;
    github?: string;
    video?: string;
  };
  preview: string;
  video?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "aqua-scan-marine-debris-detection",
    title: "Aqua Scan",
    subtitle: "Marine Debris Detection",
    description:
      "Developed a U-Net++ semantic segmentation model to detect marine debris in multispectral satellite imagery. Applied geospatial preprocessing using GDAL and advanced data augmentations with Albumentations.",
    tech: ["PyTorch", "U-Net++", "GDAL", "Albumentations", "Streamlit"],
    links: {
      website: "https://aqua-scan.streamlit.app",
      github: "https://github.com/karthikram-p/Marine-Debris-Detection",
      video: undefined,
    },
    preview: "https://i.postimg.cc/fWVVDXYQ/Screenshot-2025-06-21-171248.png",
    color: "from-blue-600 to-cyan-700",
  },
  {
  id: "communio-skill-exchange-platform",
  title: "Communio",
  subtitle: "Skill Exchange & Social Platform",
  description:
  "A full-stack platform for skill sharing, team formation, and community engagement with real-time messaging and personalized recommendations.",
  tech: [
    "MERN",
    "JWT",
    "Tailwind CSS",
    "Cloudinary",
    "Streamlit",
    "Python",
    "TF-IDF",
    "Cosine Similarity"
  ],
  links: {
    website: "https://blabber-lzpa.onrender.com/",
    github: "https://github.com/karthikram-p/Communio",
    video: undefined
  },
  preview: "https://i.postimg.cc/c4NpwL5Z/Screenshot-2025-08-10-194032.png",
  color: "from-blue-500 to-indigo-600"
},
  {
    id: "destination-delight-travel-booking-platform",
    title: "Destination Delight",
    subtitle: "Travel Booking Platform",
    description:
      "Developed a responsive travel booking platform with destination search, secure login, dynamic pricing, and email functionality using PHP, MySQL, AJAX, and Bootstrap.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    links: {
      website: undefined,
      github: "https://github.com/karthikram-p/DestinationDelight",
      video: undefined,
    },
    preview: "https://i.postimg.cc/8CkC3rT3/Screenshot-2024-06-12-102534.png",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "student-guidance-system",
    title: "Student Guidance System",
    subtitle: "Course recommendation and placement preparation",
    description:
      "A system to guide engineering students in skill acquisition and placement preparation using TF-IDF and cosine similarity for recommendations, powered by Gemini API.",
    tech: ["React", "TF-IDF", "Cosine Similarity", "Gemini API"],
    links: {
      website: undefined,
      github: "https://github.com/karthikram-p/StudentGuidanceSystem",
      video: undefined,
    },
    preview: "https://i.postimg.cc/1tnyhG2W/Screenshot-2024-06-20-223206.png",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "react-ecommerce-frontend",
    title: "React E-commerce Frontend",
    subtitle: "e-commerce application",
    description:
      "A modern e-commerce frontend application built with React, managing state with Redux and styled using Tailwind CSS for responsive design.",
    tech: ["React", "Redux", "Tailwind CSS"],
    links: {
      website: "https://theclickmart.netlify.app",
      github: "https://github.com/karthikram-p/Click-Mart",
      video: undefined,
    },
    preview: "https://i.postimg.cc/tJqpMKdj/Screenshot-2025-06-21-171112.png",
    color: "from-pink-500 to-red-600",
  },
  {
    id: "sentimentspeak-indian-language-speech-analysis",
    title: "SentimentSpeak",
    subtitle: "Indian Language Speech Sentiment Analysis",
    description:
      "Analyzes various Indian languages through speech-to-text conversion, translates to English, and performs sentiment analysis to extract insights.",
    tech: ["Speech Recognition", "NLP", "Sentiment Analysis", "Translation API", "Java"],
    links: {
      website: undefined,
      github: "https://github.com/karthikram-p/SentimentSpeak",
      video: undefined,
    },
    preview: "https://i.postimg.cc/28fLGyBp/Chat-GPT-Image-Jun-21-2025-06-01-05-PM.png",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "java-library-management-system",
    title: "Java Library Management System",
    subtitle: "LMS",
    description:
      "Built a desktop library management system with Java AWT and Swing for UI and JDBC for database connectivity to manage books, users, and transactions.",
    tech: ["Java", "AWT", "Swing", "JDBC", "MySQL"],
    links: {
      website: undefined,
      github: "https://github.com/karthikram-p/LibraryManagementSystem",
      video: undefined,
    },
    preview: "https://i.postimg.cc/d1vgn8vk/Chat-GPT-Image-Jun-21-2025-06-05-29-PM.png",
    color: "from-yellow-500 to-orange-600",
  },
];
