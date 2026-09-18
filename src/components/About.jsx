import profile from "../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#171719] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-gray-500">
            MY BIO
          </p>

          <h2 className="text-2xl font-medium text-white">
            About <span className="text-[#e8a8e8]">me.</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div className="flex justify-center">
            <div className="flex h-70 w-70 items-center justify-center rounded-full border border-[#8d668d]/40 bg-[#1a191b]">
              <img
                src={profile}
                alt="Pixie"
                className="w-70 opacity-70"
              />
            </div>
          </div>

          <div className="space-y-5 text-sm leading-7 text-gray-400">
            <p>
              I'm a BCA student and creative developer who enjoys bringing
              ideas to life through code, design, and experimentation.
            </p>

            <p>
              I love building interfaces that are not only functional, but
              also feel thoughtful, playful, and enjoyable to use. I'm
              currently exploring React and modern web development while
              working on projects that combine technology with creativity.
            </p>

            <p>
              When I'm not coding, you'll probably find me crocheting,
              reading, experimenting with designs, or getting lost in a new
              idea.
            </p>

            <a
              href="/resume.pdf"
              className="inline-block bg-[#e8a8e8] px-5 py-2.5 text-xs font-medium text-[#151315] transition-all duration-300 hover:bg-[#f3c4f3] hover:shadow-[0_0_20px_rgba(232,168,232,0.25)]"
            >
              View Resume ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;