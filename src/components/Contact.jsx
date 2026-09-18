import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#0d0d0f] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-gray-500">
            GET IN TOUCH
          </p>

          <h2 className="text-2xl font-medium text-white">
            Contact <span className="text-[#e8a8e8]">me.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400">
            I'm always open to new opportunities, collaborations, and
            interesting ideas. Feel free to reach out!
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-md border border-[#302b30] bg-[#19181a] p-8">

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sumayyabelal7@gmail.com"
              className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#e8a8e8]"
            >
              <FaEnvelope className="text-lg" />
              Email
            </a>

            <a
              href="https://github.com/7pixiee"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#e8a8e8]"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sumayyabelal7"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#e8a8e8]"
            >
              <FaLinkedin className="text-lg" />
              LinkedIn
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;