const translations = {
  en: {
    navbar: {
      about: "About",
      projects: "Projects",
      certifications: "Certifications",
      contact: "Contact",
      subtitle: "Cloud & Infrastructure • AWS • Computer Engineering",
    },

    about: {
      title: "About Me",
      description:
        "Computer Engineering student with an architectural mindset. I design and build scalable, resilient, and secure cloud infrastructures using AWS, focusing on automation, performance, and long-term system evolution.",
    },

    skills: {   // ✅ AQUI FORA DO NAVBAR
      hardItems: [
        "AWS (EC2, S3, RDS, VPC, IAM, Lambda)",
        "Infrastructure as Code (CloudFormation)",
        "Scalable & fault-tolerant architectures"
      ],
      softItems: [
        "Problem-solving",
        "Analytical thinking",
        "Communication",
        "Continuous learning"
      ]
  },

   projects: {
  title: "Projects",
  items: [
    {
      title: "AWS Scalable Architecture",
      description:
        "High-availability architecture using EC2, ALB, Auto Scaling and Route 53 failover.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automated environment provisioning using CloudFormation and CLI workflows.",
    },
  ],
},

    certifications: {
      title: "Certifications & Studies",
      items: [
        "AWS Cloud Practitioner (In Progress)",
        "AWS re/Start Program",
        "Computer Engineering Student",
        "Intermediate English – Cambridge Path (C1 Goal)",
      ],
    },

    contact: {
      title: "Connect",
    },
  },

  pt: {
    navbar: {
      about: "Sobre",
      projects: "Projetos",
      certifications: "Certificações",
      contact: "Contato",
      subtitle: "Nuvem & Infraestrutura • AWS • Engenharia da Computação",
    },

    about: {
      title: "Sobre Mim",
      description:
        "Estudante de Engenharia da Computação, com mentalidade arquitetural. Projeto e construo infraestruturas escaláveis, resilientes e seguras usando AWS, com foco em automação, performance e evolução contínua dos sistemas.",
    },

    skills: {   // ✅ AQUI TAMBÉM
      hardItems: [
        "AWS (EC2, S3, RDS, VPC, IAM, Lambda)",
        "Infraestrutura como Código (CloudFormation)",
        "Arquiteturas escaláveis e tolerantes a falhas"
      ],
      softItems: [
        "Resolução de problemas",
        "Pensamento analítico",
        "Comunicação",
        "Aprendizado contínuo"
      ]
    },

    projects: {
  title: "Projetos",
  items: [
    {
      title: "Arquitetura Escalável AWS",
      description:
        "Arquitetura de alta disponibilidade utilizando EC2, ALB, Auto Scaling e Route 53.",
    },
    {
      title: "Infraestrutura como Código",
      description:
        "Provisionamento automatizado utilizando CloudFormation e CLI.",
    },
  ],
},

    certifications: {
      title: "Certificações & Estudos",
      items: [
        "AWS Cloud Practitioner (Em andamento)",
        "Programa AWS re/Start",
        "Estudante de Engenharia da Computação",
        "Inglês Intermediário – Meta C1 Cambridge",
      ],
    },

    contact: {
      title: "Contato",
    },
  },
};

export default translations;
