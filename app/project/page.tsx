export const metadata = {
  title: 'Project',
  description: 'Projects that I created or maintaining.',
}

export default function Page() {
  return (
    <section>
      <div className='border-b mb-4'>
        <h1 className="font-semibold md:text-4xl text-2xl md:mb-8 mb-4 tracking-tighter">Projects</h1>
        <p className="mb-4 font-light text-[15px] leading-relaxed md:text-base dark:text-[#a3a3a3] text-[#52525b]">Projects that I created or maintaining.</p>
      </div>
      <div>
        <p className="mb-4 font-light text-[15px] leading-relaxed md:text-base dark:text-[#a3a3a3] text-[#52525b]">
          For now, there is no project that I can show you. I&apos;m still learning and exploring new things. I hope I can show you something soon.
        </p>
      </div>
    </section>
  )
}
