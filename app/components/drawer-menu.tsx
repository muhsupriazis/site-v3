'use client';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

import {
  BookMarked,
  Code,
  FileCode2,
  Github,
  Menu,
  PencilLine,
  Smile
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function DrawerMenu() {
  const router = useRouter()

  return (
  <Drawer>
    <DrawerTrigger className={buttonVariants({variant: 'ghost', size: 'icon'})}>
      <Menu className="h-6 w-6" />
    </DrawerTrigger>
    <DrawerContent className="px-6">
      <DrawerHeader className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src="https://pbs.twimg.com/profile_images/1748919772560187392/PsGzbR4u_400x400.jpg" />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
        <div>
          <DrawerTitle className="font-semibold text-md text-left">Muhammad Supri</DrawerTitle>
          <DrawerDescription className="text-left">
            <span className="text-sm">
              Web Developer
            </span>
          </DrawerDescription>
        </div>
      </DrawerHeader>
      <div className="flex px-4 flex-col space-y-4">
        <div>
          <span className="text-[13px] mb-2 block font-light">Menu</span>
          <div className="flex flex-col space-y-4">
          <DrawerClose onClick={() => router.push('/')} className={'text-left font-light'} >
            <div className="flex items-center">
              <Smile className="h-4 w-4" />
              <span className="ml-2">Profile</span>
            </div>
          </DrawerClose>
          <DrawerClose onClick={() => router.push('/blog')} className={'text-left font-light'}>
            <div className="flex items-center">
              <PencilLine className="h-4 w-4" />
              <span className="ml-2">Writing</span>
            </div>
          </DrawerClose>
          <DrawerClose onClick={() => router.push('/book')} className={'text-left font-light '}>
            <div className="flex items-center">
              <BookMarked className="h-4 w-4" />
              <span className="ml-2">Reading</span>
            </div>
          </DrawerClose>
          <DrawerClose onClick={() => router.push('/resume.pdf')} className={'text-left font-light '}>
            <div className="flex items-center">
              <FileCode2 className="h-4 w-4" />
              <span className="ml-2">Resume</span>
            </div>
          </DrawerClose>
          {/* <DrawerClose onClick={() => router.push('/project')} className={'text-left font-light '}>
            <div className="flex items-center">
              <Code className="h-4 w-4" />
              <span className="ml-2">Project</span>
            </div>
          </DrawerClose> */}
          </div>
        </div>
        <hr className="h-[1px]" />
        <div>
          <span className="text-[13px] mb-2 block font-light">Online</span>
          <div className="flex flex-col space-y-4">
          <DrawerClose onClick={() => router.push('https://github.com/muhsupriazis')} className={'text-left font-light'}>
            <div className="flex items-center">
              <Github className="h-4 w-4" />
              <span className="ml-2">Github</span>
            </div> 
          </DrawerClose>
          <DrawerClose onClick={() => router.push('https://x.com/muhsupriazis')} className={'text-left font-light '}>
            <div className="flex items-center">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
              </div>
              <span className="ml-2">X (Twitter)</span>
            </div>
          </DrawerClose>
          </div>
        </div>
        <hr className="h-[1px]"/>
      </div>
      <DrawerFooter>
        <p className="my-3 text-neutral-600 text-[13px] text-center dark:text-neutral-300">
            © {new Date().getFullYear()} muhsupriazis
        </p>
      </DrawerFooter>
    </DrawerContent>
</Drawer>
  )
}