import React from 'react'

type Props = {}

export default function ContactPage({}: Props) {
  return (
    
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-100 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-100 dark:border-neutral-100 dark:hover:border-neutral-100 dark:text-neutral-400"
            href="#"
          >
            Explore the Capital Product
            <span className="flex items-center gap-x-1">
              <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-100">
                Explore
              </span>
              <svg
                className="flex-shrink-0 size-4 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="mt-5 max-w-xl text-center mx-auto">
          <h1 className="block font-bold text-gray-100 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Contact
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-900 dark:text-neutral-400">
            Preline is a large open-source project, crafted with Tailwind CSS
            framework by Hmlstream.
          </p>
        </div>
        
      </div>
    </div>
  )
}