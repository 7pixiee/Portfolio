const Footer = () => {
  return (
    <footer className="border-t border-[#302b30] bg-[#0d0d0f] px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">

        <p>
          © 2026 <span className="text-[#e8a8e8]">Pixie.</span> All rights
          reserved.
        </p>

        <p>
          Designed & built by{" "}
          <span className="text-gray-300">
            Sumayya Belal
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;