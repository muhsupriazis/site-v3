import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import Link from "next/link"

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t">
          <div className="space-y-4 mt-6">
            <p className="font-light">Find me on:</p>
            <div className="flex">
              <Link className={cn(
                buttonVariants({variant: 'link', className: 'px-0'}),
                'px-0'
              )} href="https://x.com/muhsupriazis">
                <div className="flex items-start space-x-3">
                {/* <div className='w-3 h-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                </div> */}
                <span className="font-light underline">
                    X (Twitter)
                </span>
                </div>
              </Link>
              <Link className={cn(
                buttonVariants({variant: 'link'}),

              )} href="https://github.com/muhsupriazis">
                <div className="flex items-start space-x-3">
                  <div className='w-3 h-3 relative'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg> */}
                  </div>
                  <span className="font-light underline">
                    Github
                  </span>
                </div>
              </Link>
            </div>
            <p className="font-light">
              My inbox is always open. Whether you have a question or just want to say &quot;hi&quot;,
              I will try my best to get back to you!
            </p>
          </div>
          <div className="pb-7">
            <div>
              <p className="mt-8 text-neutral-600 text-[13px] dark:text-neutral-300">
                © {new Date().getFullYear()} muhsupriazis
              </p>
            </div>
          </div>
        </footer>
  )
}
