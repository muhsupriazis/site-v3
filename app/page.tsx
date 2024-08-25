import { Tweet } from "react-tweet";
import { ReactTweet, TweetComponent } from "./components/tweet";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className='mb-4'>
        <h1 className="mb-4 flex flex-col font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
          <span>Hi, I&apos;m</span><span className='font-bold text-3xl text-[#1d1d1d] dark:text-[#cccccc]'>Muhammad Supri.</span>
        </h1>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        Welcome to my personal website. This website contains things that I have learned about programming or even random thoughts about something. 
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        You can read the posts I&apos;ve made in the &apos;<Link className="font-semibold underline" href={'/blog'}>blogs</Link>&apos; section. if you find anything wrong I&apos;d appreciate any feedback.
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        There is also a &apos;<Link className="font-semibold underline" href={'/book'}>book</Link>&apos; section that contains books that I am currently reading and have read. There are also some books that I recommend.
        </p>
        <p className="mb-4 font-light md:text-base text-[15px] leading-relaxed dark:text-[#a3a3a3] text-[#52525b]">
        Lastly, I hope you can learn something new from this page.
        </p>
      </div>
    </section>
  )
}
