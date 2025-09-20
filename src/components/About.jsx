import React from "react";
import ProfileCard from "./Reactbits/ProfileCard.jsx";
import fotoProfile from "../assets/image/fotoprofile.png";
import Grain from "../assets/image/Grain.jpg";

const About = () => {
  return (
    <section id="about" class="pt-2 pb-2 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              <span class="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-600">
                About Me
              </span>
            </h1>
            <p class="text-gray-400 mb-6">
              Hello, i'm
              <span class="font-semibold text-white"> Alvin Khoirul</span>, an
              undergraduate Informatics student with a strong passion for
              technology and software development. I have hands-on experience in
              PHP, JavaScript, and SQL, and I often work with frameworks such as
              Laravel and React to build modern, responsive, and efficient web
              applications.
            </p>
            <p class="text-gray-400 mb-6">
              Beyond backend development, I also enjoy exploring frontend
              technologies and UI/UX principles to craft seamless and engaging
              user experiences.
            </p>
            <p class="text-gray-400 mb-6">
              My journey in software development is fueled by curiosity and
              continuous learning. I believe technology is not only about
              writing code but also about solving problems, collaborating with
              others, and creating meaningful impact.
            </p>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="card-hover bg-gray-700 p-6 rounded-xl">
                <i class="fas fa-code text-3xl text-purple-400 mb-4"></i>
                <h4 class="text-lg font-semibold mb-2">Frontend Development</h4>
                <p class="text-gray-400 text-sm">
                  HTML, CSS, JavaScript, React, Tailwind
                </p>
              </div>
              <div class="card-hover bg-gray-700 p-6 rounded-xl">
                <i class="fas fa-server text-3xl text-purple-400 mb-4"></i>
                <h4 class="text-lg font-semibold mb-2">Backend Development</h4>
                <p class="text-gray-400 text-sm">Python, PHP, MySQL</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center min-h-[65vh] bg-transparent">
            <ProfileCard
              name="Alvin Khoirul"
              title="Frontend Developer And UI/UX Designer"
              avatarUrl={fotoProfile}
              iconUrl={fotoProfile}
              grainUrl={Grain}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
