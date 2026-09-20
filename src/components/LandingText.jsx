const LandingText = () => {
  return (
    <div className="col-span-12 md:col-span-7 xl:col-span-9 mx-auto xl:ml-6 mt-12 md:mt-0">
      <div className="md:pr-8">
        <h1 className="flex flex-col">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,var(--primary)_0%,var(--accent)_70%,var(--secondary)_100%)]">Full Stack</span>
          <span>Web Developer<span className="text-accent">.</span></span>
        </h1>

        <div
          className="mb-6
                border-l border-accent/70
                pl-4
                font-figtree
                lg:text-[1.2rem]
                text-justify
                animate-[fadeInUp_1s_ease_0.2s_backwards]"
        >
          <p className="mb-4">
            I'm a web developer who learns best by building. I like turning
            ideas into working applications, figuring out how things work, and
            discovering something new with every project. I've worked with Vue,
            React, Node.js, Express, and MongoDB, and I'm always looking for
            ways to improve how I write and build web applications.
          </p>
          <p>
            My journey into web development started as a career change, and a
            lot of my learning has come from self-study, hands-on projects, and
            simply spending time solving problems I don't understand yet. I'm
            still growing as a developer, but I genuinely enjoy the process, and
            I'm excited to keep learning, building, and becoming better at what
            I do.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <a
            href="#projects"
            className="button-primary font-jakarta font-semibold px-6 py-2 lg:px-7 lg:py-3.5 lg:text-md "
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary font-jakarta font-semibold px-6 py-2 lg:px-7 lg:py-3.5 lg:text-md "
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
