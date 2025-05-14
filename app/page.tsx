'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  ERP_PRODUCTS,
  DESIGN_AUTOMATION,
} from './data'
import { useState } from 'react'
import { ProductDialog } from '@/components/ui/product-dialog'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

interface WorkExperienceDetail {
  title: string;
  description: string[];
}

interface WorkExperience {
  company: string;
  start: string;
  end: string;
  location: string;
  id: string;
  details: WorkExperienceDetail[];
}

function WorkExperienceItem({ job, isExpanded, onExpand }: { job: WorkExperience, isExpanded: boolean, onExpand: () => void }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30 cursor-pointer"
      onClick={onExpand}
    >
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />
      <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="relative flex w-full flex-row justify-between">
          <div>
            <h4 className="font-normal dark:text-zinc-100">
              {job.company}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400">
              {job.start} - {job.end}
            </p>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400">
            {job.location}
          </p>
        </div>
        {isExpanded && (
          <div className="mt-4">
            {job.details.map((detail: WorkExperienceDetail, index: number) => (
              <div key={index} className="mb-2">
                <h5 className="font-normal dark:text-zinc-100">
                  {detail.title}
                </h5>
                <ul className="list-disc pl-5 text-zinc-500 dark:text-zinc-400">
                  {detail.description.map((point: string, idx: number) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Personal() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Create separate state for each product category
  const [aiProductIndex, setAiProductIndex] = useState(0);
  const [erpProductIndex, setErpProductIndex] = useState(0);
  const [designProductIndex, setDesignProductIndex] = useState(0);

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Navigation handlers for each product category
  const navigateAiProducts = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setAiProductIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    } else {
      setAiProductIndex((prev) => (prev + 1) % PROJECTS.length);
    }
  };

  const navigateErpProducts = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setErpProductIndex((prev) => (prev - 1 + ERP_PRODUCTS.length) % ERP_PRODUCTS.length);
    } else {
      setErpProductIndex((prev) => (prev + 1) % ERP_PRODUCTS.length);
    }
  };

  const navigateDesignProducts = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setDesignProductIndex((prev) => (prev - 1 + DESIGN_AUTOMATION.length) % DESIGN_AUTOMATION.length);
    } else {
      setDesignProductIndex((prev) => (prev + 1) % DESIGN_AUTOMATION.length);
    }
  };

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="mb-8"
      >
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="-mt-6"
      >
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">AI Products</h3>
        <div className="overflow-hidden">
          <div className="projects-container flex animate-scroll gap-6">
            {PROJECTS.map((project, index) => (
              <div
                key={`${project.name}-${index}`}
                className="w-[calc(100%-2rem)] shrink-0 snap-center space-y-2 sm:w-[calc(50%-1.5rem)]"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProductDialog 
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    description={project.description}
                    productIndex={index}
                    totalProducts={PROJECTS.length}
                    onPrevious={() => navigateAiProducts('prev')}
                    onNext={() => navigateAiProducts('next')}
                  />
                </div>
                <div className="px-1">
                  <span className="font-base relative inline-block text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate projects for scrolling animation */}
            {PROJECTS.concat(PROJECTS, PROJECTS, PROJECTS, PROJECTS, PROJECTS, PROJECTS, PROJECTS, PROJECTS, PROJECTS).map((project, index) => (
              <div
                key={`dup-${project.name}-${index}`}
                className="w-[calc(100%-2rem)] shrink-0 snap-center space-y-2 sm:w-[calc(50%-1.5rem)]"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProductDialog 
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    description={project.description}
                    productIndex={index % PROJECTS.length}
                    totalProducts={PROJECTS.length}
                    onPrevious={() => navigateAiProducts('prev')}
                    onNext={() => navigateAiProducts('next')}
                  />
                </div>
                <div className="px-1">
                  <span className="font-base relative inline-block text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">ERP Products</h3>
        <div className="overflow-hidden">
          <div className="projects-container flex animate-scroll gap-6">
            {ERP_PRODUCTS.map((project, index) => (
              <div
                key={`${project.name}-${index}`}
                className="w-[calc(100%-2rem)] shrink-0 snap-center space-y-2 sm:w-[calc(50%-1.5rem)]"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProductDialog 
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    description={project.description}
                    productIndex={index}
                    totalProducts={ERP_PRODUCTS.length}
                    onPrevious={() => navigateErpProducts('prev')}
                    onNext={() => navigateErpProducts('next')}
                  />
                </div>
                <div className="px-1">
                  <span className="font-base relative inline-block text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate products for scrolling animation */}
            {ERP_PRODUCTS.concat(ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS, ERP_PRODUCTS).map((project, index) => (
              <div
                key={`dup-${project.name}-${index}`}
                className="w-[calc(100%-2rem)] shrink-0 snap-center space-y-2 sm:w-[calc(50%-1.5rem)]"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProductDialog 
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    description={project.description}
                    productIndex={index % ERP_PRODUCTS.length}
                    totalProducts={ERP_PRODUCTS.length}
                    onPrevious={() => navigateErpProducts('prev')}
                    onNext={() => navigateErpProducts('next')}
                  />
                </div>
                <div className="px-1">
                  <span className="font-base relative inline-block text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Design Automation</h3>
        <div className="overflow-hidden">
          <div className="projects-container flex animate-scroll gap-6">
            {DESIGN_AUTOMATION.map((project, index) => (
              <div
                key={`${project.name}-${index}`}
                className="w-[calc(100%-2rem)] shrink-0 snap-center space-y-2 sm:w-[calc(50%-1.5rem)]"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProductDialog 
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    description={project.description}
                    productIndex={index}
                    totalProducts={DESIGN_AUTOMATION.length}
                    onPrevious={() => navigateDesignProducts('prev')}
                    onNext={() => navigateDesignProducts('next')}
                  />
                </div>
                <div className="px-1">
                  <span className="font-base relative inline-block text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate products for scrolling animation */}
            {DESIGN_AUTOMATION.concat(DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION, DESIGN_AUTOMATION).map((project, index) => (
              <div
                key={`dup-${project.name}-${index}`}
                className="w-[calc(100%-2rem)] shrink-0 snap-center space-y-2 sm:w-[calc(50%-1.5rem)]"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProductDialog 
                    src={project.image}
                    alt={project.name}
                    title={project.name}
                    description={project.description}
                    productIndex={index % DESIGN_AUTOMATION.length}
                    totalProducts={DESIGN_AUTOMATION.length}
                    onPrevious={() => navigateDesignProducts('prev')}
                    onNext={() => navigateDesignProducts('next')}
                  />
                </div>
                <div className="px-1">
                  <span className="font-base relative inline-block text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </span>
                  <p className="text-base text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <WorkExperienceItem 
              key={job.id} 
              job={job} 
              isExpanded={expandedId === job.id} 
              onExpand={() => handleExpand(job.id)}
            />
          ))}
        </div>
      </motion.section>

      {/* Comment out Skills section */}
      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Skills</h3>
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold">Artificial Intelligence</h4>
          <ul className="list-disc pl-5">
            <li>Generative AI</li>
            <li>OpenAI, LLM</li>
            <li>Pinecone</li>
            <li>LangChain</li>
          </ul>
          <h4 className="font-semibold">Product Management</h4>
          <ul className="list-disc pl-5">
            <li>Data-driven decisions</li>
            <li>Strategic planning</li>
            <li>Product research</li>
            <li>Design thinking</li>
            <li>Agile methodology</li>
            <li>Stakeholder relationships</li>
            <li>People development</li>
          </ul>
          <h4 className="font-semibold">Software Development</h4>
          <ul className="list-disc pl-5">
            <li>C#, Python, SQL</li>
            <li>API integration</li>
            <li>Cloud architecture</li>
            <li>Git version control</li>
          </ul>
          <h4 className="font-semibold">Languages</h4>
          <ul className="list-disc pl-5">
            <li>English</li>
            <li>Chinese</li>
          </ul>
        </div>
      </motion.section> */}

      {/* Comment out Awards section */}
      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Awards</h3>
        <ul className="list-disc pl-5">
          <li>Friends of Our Heartlands Silver Award (2023)</li>
          <li>MTI Public Service Covid-19 Recognition Award (2020) - Foreign Workers' Dorm Design Project</li>
          <li>NUS Student Achievement Gold Award (2017) - Smile Village Community Engagement Project</li>
          <li>ASEAN Undergraduate Scholarship (2014-2018)</li>
          <li>A*STAR ASEAN Scholarship (2010-2013)</li>
        </ul>
      </motion.section> */}

      {/* Comment out Certifications section */}
      {/* <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Certifications</h3>
        <ul className="list-disc pl-5">
          <li><a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/f73ab902a055435696734bc20408f128" target="_blank">AWS CCP</a></li>
          <li><a href="https://www.credly.com/badges/eb6f3ef8-00c7-4ef3-bb26-6ca48d0e0610" target="_blank">PSPO II</a></li>
        </ul>
      </motion.section> */}

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-500 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
