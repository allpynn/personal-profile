import React from "react";
import ProfileCard from "./Reactbits/ProfileCard.jsx";
import { Code2, Server } from "lucide-react"; // ganti icon biar konsisten
import fotoProfile from "../assets/image/fotoprofile.png";
import Grain from "../assets/image/Grain.jpg";

const About = () => {
  return (
    <section id="about" className="pt-10 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="text-center mb-2">
          <p className="text-purple-500 text-sm font-medium tracking-[0.3em] uppercase mb10">
            Biography
          </p>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-5">
            Who am I?
          </h2>
          <div className="w-1 h-20 bg-purple-500 mx-auto"></div>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="flex justify-center items-center min-h-[65vh] bg-transparent">
            <ProfileCard
              name="Alvin Khoirul"
              title="Frontend Developer & UI/UX Designer"
              avatarUrl={fotoProfile}
              iconUrl={fotoProfile}
              grainUrl={Grain}
            />
          </div>

          {/* About Text */}
          <div>
            <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-white md:text-4xl lg:text-6xl">
              <span className="underline underline-offset-4 decoration-8 decoration-purple-500">
                About Me
              </span>
            </h1>

            <p className="text-gray-400 mb-6">
              Hello, I'm
              <span className="font-semibold text-white"> Alvin Khoirul</span>,
              an undergraduate Informatics student with a strong passion for
              technology and software development. I have hands-on experience in
              PHP, JavaScript, and SQL, and I often work with frameworks such as
              Laravel and React to build modern, responsive, and efficient web
              applications.
            </p>

            <p className="text-gray-400 mb-6">
              Beyond backend development, I also enjoy exploring frontend
              technologies and UI/UX principles to craft seamless and engaging
              user experiences.
            </p>

            <p className="text-gray-400 mb-10">
              My journey in software development is fueled by curiosity and
              continuous learning. I believe technology is not only about
              writing code but also about solving problems, collaborating with
              others, and creating meaningful impact.
            </p>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-hover bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition">
                <Code2 className="text-purple-400 mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-400 text-sm">
                  HTML, CSS, JavaScript, React, Tailwind
                </p>
              </div>

              <div className="card-hover bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition">
                <Server className="text-purple-400 mb-4" size={32} />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Backend Development
                </h4>
                <p className="text-gray-400 text-sm">Python, PHP, MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
