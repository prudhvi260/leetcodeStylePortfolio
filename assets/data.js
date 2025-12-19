// Edit this file to update your content. No build step required.
window.PORTFOLIO = {
  profile: {
    name: "Prudhvi Nelavelli",
    headline: "Software Engineer | Java & .NET Full-Stack | Distributed Systems | Competitive Programmer",
    location: "Columbus, OH (Open to Relocation & Remote)",
    status: "Open to Full-Time Roles",
    email: "prudhvinelavelli9@gmail.com",
    phone: "+1 (240) 459-9277",
    avatarUrl: "assets/avatar.png", // replace with your photo if you want
    lastUpdated: "Auto"
  },
  links: {
    github: "https://github.com/prudhvi260",
    linkedin: "https://www.linkedin.com/in/prudhvi-nelavelli/",
    resume: "assets/resume.pdf",
    leetcode: "https://leetcode.com/"
  },
  meta: {
    difficulty: "Hard",
    topics: ["Full-Stack", "Microservices", "Distributed Systems", "Event-Driven", "DSA"],
    companies: ["Fiserv", "ComplexCare Solutions", "GRT Global", "Vinculum", "SEMO"]
  },

  // LEFT PANEL CONTENT
  description: {
    overview: [
      "You are given a Software Engineer with 5+ years of experience building scalable backend services, distributed systems, and production-ready full-stack web applications.",
      "You work across Java and .NET stacks, while staying multi-language strong for algorithmic problem solving (C, C++, Python, Java, C#).",
      "You deliver end-to-end: design → implementation → testing → deployment → observability → production support."
    ],
    highlights: [
      "600+ DSA problems solved (LeetCode peak rating 1700+, Top ~12%)",
      "Event-driven workflows with Kafka + AWS SQS/SNS",
      "Performance tuning: DB indexes, query optimization, caching (Redis), batching",
      "Clean architecture, SOLID, API contracts, idempotency, retries, tracing",
      "Cloud-native delivery: Docker, Kubernetes, CI/CD (Jenkins/GitHub Actions/Azure DevOps)"
    ],
    supportedLanguages: ["Java", "C#", "Python", "C++", "C", "TypeScript/JavaScript", "SQL/PLSQL"],
    stacks: [
      { k: "Java Backend", v: "Spring Boot, Spring MVC/Cloud, JPA/Hibernate, REST, (GraphQL basic)" },
      { k: ".NET Backend", v: "ASP.NET Core Web API, Clean Architecture, DTO/Validation layers" },
      { k: "Frontend", v: "Angular, React, RxJS, HTML5, SCSS, Bootstrap, Material UI" },
      { k: "Databases", v: "PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Redis" },
      { k: "Messaging", v: "Kafka, RabbitMQ, AWS SQS/SNS" },
      { k: "Cloud/DevOps", v: "AWS (ECS/EKS/EC2/S3/RDS/Lambda/API GW), Docker, K8s, Jenkins, GitHub Actions, Azure DevOps" },
      { k: "Testing/Obs", v: "JUnit, Mockito, REST Assured, Postman, xUnit/MSTest, SonarQube, CloudWatch, Prometheus, Grafana, ELK/EFK" },
      { k: "Security", v: "OAuth2, JWT, RBAC" }
    ],
    constraints: [
      "APIs must be scalable, idempotent, and fault-tolerant.",
      "Systems should support asynchronous event-driven flows.",
      "Observability (logs/metrics/traces) is mandatory in production.",
      "Code must be clean, testable, and maintainable (SOLID, clean architecture).",
      "Performance bottlenecks must be measurable and fixable."
    ],
    examples: [
      { input: "High-traffic FinTech API", output: "Event-driven microservices with Kafka + AWS", note: "Reduced DB bottlenecks by 30–40% via query tuning & batching." },
      { input: "Healthcare data pipeline", output: "HIPAA-compliant APIs with validations & audit logs", note: "Monitored via Azure AppInsights with structured metrics." },
      { input: "Interview loop", output: "Accepted ✅", note: "Competitive programming + system design mindset." }
    ]
  },

  // Projects shown in Solutions tab (include GitHub links)
  projects: [
    {
      title: "Online Code Execution Platform",
      tags: ["Angular", "Spring Boot", "AWS", "Multi-tenant"],
      links: [
        { label: "Repo", url: "https://github.com/prudhvi260" }
      ],
      bullets: [
        "Built a browser-based coding environment enabling in-browser execution of Java/Python.",
        "Designed backend execution workflow and API contracts for submissions and results.",
        "Integrated AWS S3/Lambda/RDS for scalable storage and execution.",
        "Focused on isolation, scalability, and cost efficiency."
      ]
    },
    {
      title: "QA Chatbot (End-to-End Memory Networks)",
      tags: ["NLP", "Python", "Deep Learning"],
      links: [
        { label: "Repo", url: "https://github.com/prudhvi260/QA-Chatbot" }
      ],
      bullets: [
        "Implemented a QA chatbot using the Facebook bAbI dataset.",
        "Followed End-To-End Memory Networks approach (Sukhbaatar et al.).",
        "Experimented with training pipeline and evaluation on bAbI tasks."
      ]
    },
    {
      title: "LeetCode-Style Portfolio",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      links: [
        { label: "Repo", url: "https://github.com/prudhvi260/portfolio" }
      ],
      bullets: [
        "Built a LeetCode-inspired portfolio UI to showcase engineering identity.",
        "Includes tabbed problem panel, language-aware editor, and testcase output panel.",
        "Optimized for instant recruiter scan and GitHub Pages hosting."
      ]
    }
  ],

  // Experience shown in Submissions tab
  experience: [
    {
      company: "Fiserv (Contract)",
      role: "Software Development Engineer",
      dates: "Jun 2025 – Present",
      location: "Columbus, OH",
      stack: ["Java", "Spring Boot", "Kafka", "AWS", "Redis", "SQL","C#","ASP.NET Core", "Angular", "SQL Server", "Azure"],
      bullets: [
        "Developed Spring Boot microservices powering billing, document processing, and financial reporting for enterprise banking clients.",
        "Implemented end-to-end event workflows using Kafka, SQS, and SNS to support async request handling, reducing API load and improving resilience.",
        "Designed idempotent API patterns, correlation IDs for tracing, retry logic, and error handling flows for high-load production traffic.",
        "Optimized SQL queries, entity mappings, indexes, and batch operations, reducing critical DB bottlenecks by 30–40%.",
        "Introduced Redis caching strategies for static/intermediate data to reduce repeated DB calls and increase throughput.",
        "Built CI/CD pipelines with Jenkins/GitHub Actions for automated tests, image builds, and multi-environment deployments.",
        "Enhanced observability with structured CloudWatch logs, dashboards, alarms, and distributed tracing."
      ]
    },
    {
      company: "ComplexCare Solutions",
      role: "Software Engineer Intern",
      dates: "May 2024 – Aug 2024",
      location: "Bowie, MD",
      stack: ["C#", "ASP.NET Core", "Angular", "SQL Server", "Azure"],
      bullets: [
        "Developed features for the ComplexCare Data Injection System using Angular and ASP.NET Core Web APIs.",
        "Built reusable shared UI components including nested tables, advanced filtering, pagination, and form modules to speed up page delivery.",
        "Designed REST endpoints with clean architecture, validation layers, DTOs, repositories, and service abstractions.",
        "Implemented SQL Server queries, stored procedures, and views to optimize ingestion and reporting workflows.",
        "Added server-side validations, audit logs, and exception handling aligned with HIPAA pipelines.",
        "Improved reliability by configuring Azure AppInsights dashboards, structured logs, and performance metrics."
      ]
    },
    {
      company: "Southeast Missouri State University (SEMO)",
      role: "Software Developer / Graduate Assistant",
      dates: "Aug 2024 – May 2025",
      location: "Cape Girardeau, MO",
      stack: ["Java", "Spring Boot", "Angular", "OAuth2", "JWT", "SQL","C#","ASP.NET Core", "Angular", "SQL Server", "Azure"],
      bullets: [
        "Developed full-stack university applications using Angular frontends and Spring Boot REST APIs.",
        "Created reusable UI component libraries (dynamic tables, multi-select dropdowns, list views, forms), reducing development time across the team.",
        "Designed data models, repository/service layers, validations, DTO mapping, and exception handlers.",
        "Integrated secure authentication and authorization with OAuth2, JWT, and role-based routing.",
        "Improved API response times via query optimization, pagination strategies, and caching where needed.",
        "Mentored students in algorithms, debugging, Git workflows, and clean coding practices."
      ]
    },
    {
      company: "GRT Global Logistics",
      role: "Software Developer",
      dates: "Mar 2022 – Jun 2024",
      location: "Logistics & Supply Chain",
      stack: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Kafka", "Redis","C#","ASP.NET Core", "Angular", "SQL Server", "Azure"],
      bullets: [
        "Designed and built modules including container booking, inventory management, workflow scheduling, and shipment tracking.",
        "Helped define microservices boundaries, data ownership, caching layers, API specs, and async event flows.",
        "Implemented Redis caching to reduce high-frequency DB queries, boosting API performance by 85%.",
        "Built Kafka pipelines for shipment updates, partner integrations, and background processing tasks.",
        "Optimized PostgreSQL with partitioning, indexing, and query rewrites for large datasets.",
        "Delivered complex Angular interfaces with nested tables, real-time updates, reactive forms, and validation logic.",
        "Reduced UI rendering times by ~60% via lazy loading, smart caching, and API call grouping.",
        "Performed production RCA and implemented long-term fixes to improve system reliability."
      ]
    },
    {
      company: "Vinculum Solutions Pvt. Ltd.",
      role: "Graduate Engineer (Software)",
      dates: "Jan 2021 – Mar 2022",
      location: "Noida, India",
      stack: ["C#","ASP.NET Core", "Angular", "SQL Server", "Azure","Java", "Spring Boot", "Hibernate", "Jenkins", "SQL"],
      bullets: [
        "Developed backend modules for loyalty engines, e-commerce systems, and multi-tenant platforms.",
        "Built APIs for loyalty points, redemption workflows, promotional campaigns, and customer onboarding.",
        "Integrated payment gateways, notifications, and partner APIs with retries, throttling, and rollback mechanisms.",
        "Improved response times by optimizing DB queries, caching repeated lookups, and reducing unnecessary joins.",
        "Supported Jenkins CI/CD pipelines for packaging, testing, and deployment.",
        "Assisted in production support: troubleshooting issues, analyzing logs, and shipping fixes."
      ]
    }
  ],

  // Discuss tab
  discuss: {
    competitive: [
      "Solved 600+ problems across LeetCode, HackerRank, GfG, CodeSignal.",
      "LeetCode peak rating 1700+; strong in DP, graphs, greedy, binary search.",
      "HackerRank 5-Star Problem Solving (Basic & Intermediate)."
    ],
    systemDesign: [
      "Design APIs with idempotency keys, retries, and safe fallbacks.",
      "Use event-driven architecture when decoupling, scalability, and resilience matter.",
      "Prefer caching for hot reads; measure and tune DB access patterns.",
      "Use structured logs + correlation IDs + dashboards to debug production fast."
    ],
    whatIWant: [
      "Full-time Software Engineer / Senior Software Engineer roles.",
      "Backend (Java/Spring) or Full-stack (Java/.NET + Angular/React).",
      "Teams building distributed systems, platforms, or high-scale products."
    ]
  },

  // Right panel: language snippets
  snippets: {
    "Java": {
      filename: "Solution.java",
      code:
`class Engineer {
    boolean openToFullTime = true;
    boolean productionReady = true;

    boolean shouldHire() {
        return openToFullTime && productionReady;
    }
}`
    },
    "C#": {
      filename: "Engineer.cs",
      code:
`class Engineer {
    public bool OpenToFullTime => true;
    public bool ProductionReady => true;

    public bool ShouldHire() => OpenToFullTime && ProductionReady;
}`
    },
    "Python": {
      filename: "engineer.py",
      code:
`class Engineer:
    open_to_full_time = True
    production_ready = True

    def should_hire(self) -> bool:
        return self.open_to_full_time and self.production_ready`
    },
    "C++": {
      filename: "engineer.cpp",
      code:
`#include <bits/stdc++.h>
using namespace std;

struct Engineer {
    bool openToFullTime = true;
    bool productionReady = true;

    bool shouldHire() const {
        return openToFullTime && productionReady;
    }
};`
    },
    "C": {
      filename: "engineer.c",
      code:
`#include <stdbool.h>

typedef struct {
    bool openToFullTime;
    bool productionReady;
} Engineer;

bool shouldHire(Engineer e) {
    return e.openToFullTime && e.productionReady;
}`
    },
    "TypeScript": {
      filename: "engineer.ts",
      code:
`type Engineer = {
  openToFullTime: boolean;
  productionReady: boolean;
};

const shouldHire = (e: Engineer) => e.openToFullTime && e.productionReady;`
    },
    "JavaScript": {
      filename: "engineer.js",
      code:
`const engineer = { openToFullTime: true, productionReady: true };
const shouldHire = (e) => e.openToFullTime && e.productionReady;`
    }
  },

  testcase: {
    input:
`Engineer(prudhvi)
role=fullstack
stack=java|dotnet
signal=hire`,
    acceptedOutput: {
      status: "Accepted ✅",
      runtime: "Optimal",
      memory: "Efficient"
    },
    rejectOutput: {
      status: "Wrong Answer",
      runtime: "—",
      memory: "—"
    }
  }
};
