import { useState } from 'react'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white text-gray-900">

   {/* Navbar */}
<nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    {/* Top bar */}
    <div className="flex h-16 w-full items-center justify-between">

      {/* Logo */}
      <a
        href="#"
        className="whitespace-nowrap text-2xl font-bold tracking-tight text-gray-800"
      >
        Tylash<span className="text-emerald-500">.</span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <a
          href="#"
          className="text-sm font-medium text-gray-600 transition hover:text-emerald-500"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-sm font-medium text-gray-600 transition hover:text-emerald-500"
        >
          About
        </a>

        <a
          href="#projects"
          className="text-sm font-medium text-gray-600 transition hover:text-emerald-500"
        >
          Projects
        </a>

        <a
          href="#services"
          className="text-sm font-medium text-gray-600 transition hover:text-emerald-500"
        >
          Services
        </a>

        <a
          href="#contact"
          className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-xl text-gray-700 md:hidden"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </div>

    {/* Mobile Navigation */}
    {menuOpen && (
      <div className="border-t border-gray-100 py-4 md:hidden">
        <div className="flex flex-col gap-4">

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-gray-600 transition hover:text-emerald-500"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-gray-600 transition hover:text-emerald-500"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-gray-600 transition hover:text-emerald-500"
          >
            Projects
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-gray-600 transition hover:text-emerald-500"
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-semibold text-emerald-600"
          >
            Hire Me →
          </a>

        </div>
      </div>
    )}

  </div>
</nav>
{/* Hero */}
<section className="bg-gradient-to-br from-white via-gray-50 to-green-50 px-6 py-24">
  <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

    {/* Hero Text */}
    <div>

      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
        Software Developer
      </p>

      <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-800 md:text-6xl">
        Hello, I'm
        <span className="block text-emerald-500">
          Tylash.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        I build modern, responsive and user-friendly websites
        for businesses, individuals and personal brands.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">

        <a
          href="#projects"
          className="rounded-lg  bg-emerald-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-600"
        >
          View My Projects
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-gray-600 transition hhover:border-emerald-500 hover:text-emerald-500"
        >
          Contact Me
        </a>

      </div>

      {/* Small info */}
      <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
        <span>⚡ React</span>
        <span>💻 TypeScript</span>
        <span>🎨 Tailwind CSS</span>
      </div>

    </div>

    {/* Hero Visual */}
    <div className="flex justify-center md:justify-end">

      <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl bg-gray-800 shadow-2xl md:h-96 md:w-96">

        <div className="absolute inset-4 rounded-2xl border border-gray-600"></div>

        <div className="z-10 text-center">

          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500 text-4xl font-bold text-white shadow-lg">
            T
          </div>

          <h2 className="text-2xl font-bold text-white">
            Tylash
          </h2>

          <p className="mt-2 text-gray-300">
            Software Developer
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* About */}
<section id="about" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <div className="grid items-center gap-16 md:grid-cols-2">

      {/* Left */}
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
          About Me
        </p>

        <h2 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
          Building websites that
          <span className="text-emerald-500">
            {" "}make an impact.
          </span>
        </h2>
      </div>

      {/* Right */}
      <div>

        <p className="text-lg leading-8 text-gray-600">
          I'm a Software Development student and aspiring software
          developer passionate about creating modern and responsive
          web experiences.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          I enjoy turning ideas into simple, useful and
          user-friendly websites while continuously improving
          my skills in modern web technologies.
        </p>

        <div className="mt-8">
          <a
            href="#contact"
            className="font-semibold text-emerald-500 transition hover:text-emerald-600"
          >
            Let's work together →
          </a>
        </div>

      </div>

    </div>

  </div>
</section>
  {/* Skills */}
<section className="bg-gray-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
        My Skills
      </p>

      <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
        Technologies I Work With
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        These are some of the technologies and tools I use
        while building modern web applications.
      </p>
    </div>

    {/* Skills */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* HTML */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-sm font-bold text-orange-600">
          HTML
        </div>

        <h3 className="text-lg font-bold text-gray-800">
          HTML
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Building the structure and content of websites.
        </p>
      </div>

      {/* CSS */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
          CSS
        </div>

        <h3 className="text-lg font-bold text-gray-800">
          CSS
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Creating clean, responsive and attractive designs.
        </p>
      </div>

      {/* JavaScript */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-sm font-bold text-yellow-600">
          JS
        </div>

        <h3 className="text-lg font-bold text-gray-800">
          JavaScript
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Adding logic, functionality and interactions.
        </p>
      </div>

      {/* React */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600">
          React
        </div>

        <h3 className="text-lg font-bold text-gray-800">
          React
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Building modern and interactive web applications.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Projects */}
<section id="projects" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <div className="mb-14">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
        My Work
      </p>

      <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
        Featured Project
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-gray-600">
        Explore a shipment tracking application I'm building
        to practice modern web development and solve a practical problem.
      </p>
    </div>

    {/* Project Card */}
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm">

      <div className="grid md:grid-cols-2">

        {/* Preview */}
        <div className="flex min-h-[350px] items-center justify-center bg-emerald-50 p-8">

          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">

            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-green-300"></span>

              <div className="ml-3 h-5 flex-1 rounded-md bg-gray-100"></div>
            </div>

            {/* Mockup */}
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                  📦
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">
                    CargoTrack
                  </h3>
                  <p className="text-sm text-gray-500">
                    Shipment Tracking
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-gray-200 p-4">
                <p className="text-sm text-gray-500">
                  Track your shipments easily
                </p>

                <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-3">
                  <span className="text-sm text-gray-400">
                    Enter tracking number
                  </span>
                  <span className="rounded-md bg-emerald-500 px-3 py-2 text-xs font-semibold text-white">
                    Track
                  </span>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-gray-400">
                Shipment tracking interface concept
              </p>
            </div>

          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-8 md:p-12">

          <span className="mb-4 w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Personal Project
          </span>

          <h3 className="text-3xl font-bold text-gray-800">
            CargoTrack
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            A shipment tracking web application designed around
            helping users track deliveries and check shipment
            status across Tanzania.
          </p>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-gray-500">
            Currently developing and improving the project.
          </p>

          {/* Links to add later */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Ask About Project
            </a>
          </div>

        </div>

      </div>
    </div>

  </div>
</section>
{/* Services */}
<section id="services" className="bg-gray-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* Heading */}
    <div className="mb-14 max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
        What I Do
      </p>

      <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
        Services I Can Offer
      </h2>

      <p className="mt-4 leading-7 text-gray-600">
        I create modern, responsive websites that help
        individuals and small businesses build a professional
        online presence.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid gap-6 sm:grid-cols-2">

      {/* Service 1 */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
          🌐
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          Business Websites
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Professional websites for small businesses, shops,
          salons and personal brands.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          Discuss a project <span>→</span>
        </a>
      </div>

      {/* Service 2 */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
          🎨
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          Landing Pages
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Attractive single-page websites for products,
          services and marketing campaigns.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          Discuss a project <span>→</span>
        </a>
      </div>

      {/* Service 3 */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
          💼
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          Portfolio Websites
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          Personal websites that help students, developers
          and professionals showcase their work.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          Discuss a project <span>→</span>
        </a>
      </div>

      {/* Service 4 */}
      <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
          📅
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          Booking Website Interfaces
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          User-friendly booking pages for appointments,
          salons and other service-based businesses.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-600 transition hover:text-emerald-700"
        >
          Discuss a project <span>→</span>
        </a>
      </div>

    </div>

    <p className="mt-8 text-sm leading-6 text-gray-500">
      Services are offered according to project requirements
      and my current development experience.
    </p>

  </div>
</section>
{/* Contact */}
<section id="contact" className="bg-gray-700 px-6 py-24">
  <div className="mx-auto max-w-5xl text-center">

    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
      Get In Touch
    </p>

    <h2 className="text-4xl font-bold text-white md:text-5xl">
      Let's Build Something Together
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
      Have a project idea or need a modern website?
      I'd love to hear about it and discuss how I can help.
    </p>

    {/* Contact Buttons */}
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <a
        href="mailto:tylashmindhry@gmail.com"
        className="rounded-lg bg-emerald-500 px-7 py-3 font-semibold text-white transition hover:bg-emerald-600"
      >
        Email Me ↗
      </a>

      <a
        href="https://wa.me/905513547283"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-gray-500 px-7 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
      >
        WhatsApp ↗
      </a>

    </div>

    <div className="mt-12 border-t border-gray-700 pt-8">
      <p className="text-sm text-gray-400">
        Open to suitable freelance projects and collaborations.
      </p>
    </div>

  </div>
</section>
{/* Footer */}
<footer className="border-t border-gray-200 bg-white px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

    {/* Logo */}
    <a
      href="#"
      className="shrink-0 text-2xl font-bold tracking-tight text-gray-800"
    >
      Tylash<span className="text-emerald-500">.</span>
    </a>

    {/* Copyright */}
    <p className="text-center text-sm text-gray-500">
      © 2026 Tylash. All rights reserved.
    </p>

    {/* Back to top */}
    <a
      href="#"
      className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
    >
      Back to top ↑
    </a>

  </div>
</footer>
    </div>
  );
}

export default App;
