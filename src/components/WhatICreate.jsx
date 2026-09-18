import { FaCode } from "react-icons/fa";
import { RiPaintingAiFill } from "react-icons/ri";
import { GiFairyWand } from "react-icons/gi";

const WhatICreate = () => {
  const myWorks = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Web Development",
      description:
        "I build responsive web experiences using modern web technologies.",
    },
    {
      number: "02",
      icon: <RiPaintingAiFill />,
      title: "UI Development",
      description:
        "Turning designs and ideas into clean, responsive, and interactive user interfaces.",
    },
    {
      number: "03",
      icon: <GiFairyWand />,
      title: "Creative Coding",
      description:
        "Experimenting with interactions, animations, and playful ideas to make digital experiences more engaging.",
    },
  ];

  return (
    <section
      id="myWorks"
      className="w-full bg-[#111113] px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-gray-500">
            SERVICES
          </p>

          <h2 className="text-2xl font-medium text-white">
            What{" "}
            <span className="text-[#e8a8e8]">
              I do.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid w-full gap-5 md:grid-cols-3">
          {myWorks.map((work) => (
            <div
              key={work.number}
              className="group relative min-h-55 overflow-hidden rounded-md border border-[#8d668d] bg-[#19181a] p-7
               text-white transition-all duration-300 hover:bg-[#e8a8e8] hover:text-[#151315] hover:shadow-[0_0_25px_rgba(232,168,232,0.15)]"
            >
              {/* Number */}
              <span className="absolute right-4 top-2 text-5xl font-light text-white/10 transition-colors duration-300 group-hover:text-[#d49ad4]">
                {work.number}
              </span>

              {/* Icon */}
              <div className="mb-6 text-xl text-[#e8a8e8] transition-colors duration-300 group-hover:text-[#473347]">
                {work.icon}
              </div>

              {/* Title */}
              <h3 className="relative mb-4 text-base font-medium">
                {work.title}
              </h3>

              <hr className="mb-4 w-12 border-none bg-[#8d668d] h-0.5 transition-colors duration-300 group-hover:bg-[#473347]" />

              {/* Description */}
              <p className="relative text-xs leading-6 text-gray-500 transition-colors duration-300 group-hover:text-[#473347]">
                {work.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatICreate;