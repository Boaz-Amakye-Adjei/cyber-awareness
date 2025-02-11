export default function Home() {
  return (
    <div>
      <section className="h-[100svh] flex flex-col">
        <header className="md:bg-[#005288] text-white w-full pl-[32px] bg-transparent border-b border-[#005288]">
          <nav className="p justify-end flex md:block md:justify-start">
            <div className="hidden md:block">
              <ul className="flex gap-4">
                <li className="py-[12px] pr-[18px] text-[16px]">Home</li>
                <li className="py-[12px] pr-[18px] text-[16px]">About</li>
                <li className="py-[12px] pr-[18px] text-[16px]">Contact Us</li>
              </ul>
            </div>
            <button className="py-[12px] px-[18px] bg-[#005288] text-white md:hidden">
              Menu
            </button>
          </nav>
        </header>

        <section className="flex-grow h-full">
          <div className="flex justify-end items-end h-full">
            <div className="w-full py-[50px] px-[32px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)]">
              <h1 className="text-[2.8rem] md:text-[3.5rem] font-[500] text-white mb-[1rem]">
                Cybersecurity Awareness Month
              </h1>
              <p className="mb-[1rem] text-white text-[1rem] md:text-[1.5rem]">
                Creating partnerships to raise cybersecurity awareness at home
                and abroad.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="my-[2.5rem] px-[1rem] ">
        <h2 className="text-[2.25rem] font-[500]">About</h2>
        <p className="py-[1rem] text-[1.2rem]">
          Since 2004, the President of the United States and Congress have
          declared October to be Cybersecurity Awareness Month, time dedicated
          for the public and private sectors to work together to raise awareness
          about the importance of cybersecurity.
        </p>
        <p className="pb-[1rem] text-[1.2rem]">
          Over the years it has grown into a collaborative effort between
          government and industry to enhance cybersecurity awareness, encourage
          actions by the public to reduce online risk, and generate discussion
          on cyber threats on a national and global scale. October 2024 marks
          the 21st Cybersecurity Awareness Month.
        </p>
      </section>

      <section className="my-[2.5rem] px-[1rem] ">
        <h2 className="text-[2.25rem] font-[500]">Secure Our World</h2>
        <p className="py-[1rem] text-[1.2rem]">
          Starting in 2023 with the launch of CISA’s cybersecurity awareness
          program, Secure Our World is the enduring Cybersecurity Awareness
          Month theme. This theme recognizes the importance of taking daily
          action to reduce risks when online and using connected to devices.
          Organizations can use the Secure Our World theme when planning for
          this and future Cybersecurity Awareness Month campaigns.
        </p>
        <p className="pb-[1rem] text-[1.2rem]">
          Below you will find free resources to support Cybersecurity Awareness
          Month activities. In addition, we have outlined the simple actions we
          can all take not only during October, but every day throughout the
          year to stay safe online.
        </p>
      </section>
    </div>
  );
}
