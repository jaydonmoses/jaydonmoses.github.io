import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
      <nav className="p-4 bg-black bg-opacity-60 fixed w-full top-0 flex justify-around">
        <Link href="#resume" className="text-lg font-semibold">Resume</Link>
        <Link href="#projects" className="text-lg font-semibold">Projects</Link>
        <Link href="#contact" className="text-lg font-semibold">Contact Me</Link>
      </nav>
      
      <section id="resume" className="min-h-screen flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="text-lg mt-4">Jaydon Moses | Computer Science & Biology Student</p>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-10 bg-blue-800">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg mt-4">A showcase of my latest work and research.</p>
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-10 bg-indigo-800">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-lg mt-4">Email: jaydon.10.moses@gmail.com</p>
      </section>
    </div>
  );
}
