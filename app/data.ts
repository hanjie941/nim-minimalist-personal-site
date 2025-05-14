export type Product = {
  name: string
  description: string
  link: string
  image: string
  id: string
  category: 'ai' | 'erp' | 'design'
}

type WorkExperience = {
  company: string
  start: string
  end: string
  location: string
  id: string
  details: { title: string; description: string[] }[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

// Consolidated products list
export const PRODUCTS: Product[] = [
  // AI Products
  {
    name: 'AI Sustainability Chatbot',
    description: 'RAG-LLM fine-tuned to answer sustainable building related queries.',
    link: '#',
    image: '/images/AI_Sustainability_Chatbot.png',
    id: 'project1',
    category: 'ai'
  },
  {
    name: 'AI Chiller Plant Optimisation',
    description: 'One-stop platform to calculate and compare chiller plant systems.',
    link: '#',
    image: '/images/AI_Chiller_Plant_Optimisation.png',
    id: 'project2',
    category: 'ai'
  },
  {
    name: 'AI ETTV Calculator',
    description: 'Parse BIM models to calculate building Envelope Thermal Transfer Value.',
    link: '#',
    image: '/images/AI_ETTV_Calculator.png',
    id: 'project3',
    category: 'ai'
  },
  // ERP Products
  {
    name: 'Proj Management & Finance Dashboard',
    description: 'Streamlines how teams track projects, workflows, and boost productivity.',
    link: '#',
    image: '/images/Proj Management & Finance Dashboard.png',
    id: 'erp1',
    category: 'erp'
  },
  {
    name: 'Construction Installation Management',
    description: 'Manages comments & defects in construction to enhance material sales.',
    link: '#',
    image: '/images/Construction_Installation_Management.png',
    id: 'erp2',
    category: 'erp'
  },
  {
    name: 'Concrete Ordering & Delivery App',
    description: 'Streamlines processes to enhance customer experience for concrete sales.',
    link: '#',
    image: '/images/Concrete_Ordering_&_Delivery_App.jpg',
    id: 'erp3',
    category: 'erp'
  },
  // Design Automation Products
  {
    name: 'Urban Planning & Building Generation',
    description: 'Custom rule-based Rhino plugin for urban planning and building modelling.',
    link: '#',
    image: '/images/Urban Planning & Building Generation.png',
    id: 'design1',
    category: 'design'
  },
  {
    name: 'Embodied Carbon Calculator',
    description: 'Calculate and analyse embodied carbon for building design with BIM model.',
    link: '#',
    image: '/images/Embodied Carbon Calculator.png',
    id: 'design2',
    category: 'design'
  },
  {
    name: 'Modelling & Drawing for Structures',
    description: 'Custom rule-based Tekla plugin to improve drafting productivity.',
    link: '#',
    image: '/images/Modelling & Drawing for Structures.png',
    id: 'design3',
    category: 'design'
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Nohara Group',
    start: '2024',
    end: 'Present',
    location: 'Singapore',
    id: 'work1',
    details: [
      {
        title: 'Senior Product Manager',
        description: [
          'Managed a portfolio of 6 in-house products, including procurement platforms, delivery tracking solutions, construction project management tools, and AI-driven design optimization tools, achieving a 95% success rate in meeting project timelines and budgets.',
          'Strengthened relationships with over 25 key stakeholders, including contractors, suppliers, and academic institutions, driving a 50% increase in business opportunities across Southeast Asia.',
          'Developed and maintained product roadmaps, balancing strategic vision with tactical execution to align with company goals.',
          'Conducted market research, competitive analysis, and customer feedback sessions to identify opportunities and drive data-driven product strategies.',
          'Accelerated time-to-market by 6 months by refining product requirements to meet local business needs, thereby shortening development timelines.',
        ],
      },
    ],
  },
  {
    company: 'DLABs',
    start: '2022',
    end: '2024',
    location: 'Singapore',
    id: 'work2',
    details: [
      {
        title: 'Product Lead',
        description: [
          'Led a multidisciplinary team of product managers, developers, and marketing specialists to drive innovation in AI ETTV Calculator, AI Chiller Plant Optimisation, and Projects, Files Management & Finance Dashboard.',
          'Launched AI Sustainability Chatbot with over 300 user sign-ups in the first month, showcasing effective go-to-market strategy and product-market fit.',
          'Oversaw the end-to-end lifecycle for 4 products, influencing vision, strategy, and development timelines while ensuring synergy across the product suite.',
          'Directed 7 market research initiatives and primary surveys to align sustainable tool development with competitive market positioning and customer needs.',
          'Introduced advanced analytics tools to enable data-driven decisions, improving customer engagement metrics by 33% through actionable insights.',
          'Collaborated with cross-functional teams to ensure alignment.',
        ],
      },
      {
        title: 'Product Manager / Software Developer',
        description: [
          'Built and launched the Urban Planning & Building Generation Tool in a year, securing S$500K in B2B contracts and enhancing client productivity by 60%.',
          'Collaborated with a cross-functional team of 10 developers to define and execute product strategy and roadmap, ensuring on-time delivery.',
          'Contributed both coding expertise and strategic leadership throughout the development lifecycle, achieving key technical and business milestones.',
          'Conducted customer validation sessions, integrating feedback to boost user satisfaction scores by 25%.',
          'Optimized product features and streamlined resource allocation, reducing expenses by 15% while maintaining quality and meeting deadlines.',
        ],
      },
    ],
  },
  {
    company: 'JTC Corporation',
    start: '2020',
    end: '2022',
    location: 'Singapore',
    id: 'work3',
    details: [
      {
        title: 'Product Manager / Product Owner',
        description: [
          'Executed comprehensive market surveys and research on industrial typology, providing valuable insights that identified untapped opportunities, informing product development strategy that anticipated market needs 5 years ahead.',
          'As Product Owner, led the inception and direction of the Industrial Building Modelling Tool, a S$500K initiative for a vendor to develop an internal tool that refined B2B client operations in the industrial real estate sector.',
          'Dual role as Product Manager and Software Developer for the Industrial Building AI Design Optimization Tool, overseeing a 4-member team to create a proof of concept, paving the way for a B2B collaboration on a SaaS product.',
          'Pioneered the creation of an in-house design product, enhancing the iterative capabilities of simulation visualization, boosting productivity by 99.99%.',
          'Facilitated a groundbreaking S$2B co-IP collaboration for the development of a one-stop all inclusive building design platform, offering strategic requirements and guidance as Product Owner to elevate the products market potential.',
          'Created a roadmap for digital transformation, aligning product strategies and organizational objectives for the department of 40-members.',
        ],
      },
    ],
  },
  {
    company: 'Code The Future',
    start: '2019',
    end: '2020',
    location: 'Singapore',
    id: 'work4',
    details: [
      {
        title: 'Product Manager',
        description: [
          'Joined an early-stage startup that focused on a dynamic tech solution for building design and text-to-speech presentation, CodeSteamer.',
          'Engineered AWS cloud architecture and designed the user flow and UI design, establishing a product roadmap and timeline for the MVP within 2 months.',
          'Developed and tested innovative scripts on HoudiniFX utilizing AWS EC2 for proof of concept in 2 weeks, showcasing technical acumen and forward-thinking product development methodologies to the investors for buy-in.',
        ],
      },
    ],
  },
  {
    company: 'National University of Singapore',
    start: '2017',
    end: '2019',
    location: 'Singapore',
    id: 'work5',
    details: [
      {
        title: 'Product Manager',
        description: [
          'Conducted exhaustive research on over 200 products to identify key functionalities beneficial for computational design learning among students.',
          'Led the design and implementation of the Mobius Modeller, a 3D procedural modelling web application, crafting user interfaces, user guides, and introducing an innovative educational tool to enhance the students learning.',
          'Facilitated workshops and seminars for over 300 students, cultivating practical skills and theoretical knowledge in computational design, evidenced by course participation reaching 100% students in year 2018.',
          'Pioneered a collaborative platform for feedback and iterative product improvements, resulting in a 40% enhancement in product functionality and user experience based on student insights.',
        ],
      },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/hanjie941',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jack-lee-hj/',
  },
]

export const EMAIL = 'hanije941@gmail.com'
