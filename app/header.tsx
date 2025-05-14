'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-start">
        {/* Icon */}
        <Link href="/" className="mr-6 shrink-0 mt-1">
          <img
            src="/icon.png"
            alt="Homepage Icon"
            className="h-17 w-17 rounded-full"
          />
        </Link>

        {/* Text Content Container */}
        <div className="flex flex-col ml-2">
          {/* Name */}
          <span className="font-medium text-lg text-black dark:text-white">
            Mr Jack Lee
          </span>

          {/* Title */}
          <p className="text-zinc-600 dark:text-zinc-500">
            Senior Product Manager
          </p>

          {/* Description */}
          <p className="text-zinc-600 dark:text-zinc-400">
            Cloud architecture | Generative AI | Data-driven decisions
          </p>
        </div>
      </div>
    </header>
  )
}
