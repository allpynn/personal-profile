import React from "react";

const Skill = () => {
  return (
    <section
      id="skills"
      class="py-16 bg-gradient-to-r from-gray-900 via-gray-900 to-purple-900"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="mb-5 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            <span class="underline underline-offset-4 decoration-8 decoration-blue-500">
              Skills & Expertise
            </span>
          </h1>
          <p class="text-lg text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* -- React -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-cyan-400 hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fab fa-react text-3xl text-cyan-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">React</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
              Beginner
            </span>
          </div>

          {/* -- Laravel -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-red-400 hover:shadow-red-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fab fa-laravel text-3xl text-red-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">Laravel</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-red-500/20 text-red-400">
              Intermediate
            </span>
          </div>

          {/* -- MySQL -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-teal-400 hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-database text-3xl text-teal-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">MySQL</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-teal-500/20 text-teal-400">
              Expert
            </span>
          </div>

          {/* -- Git -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-orange-400 hover:shadow-orange-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fab fa-git-alt text-3xl text-orange-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">Git</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-orange-500/20 text-orange-400">
              Expert
            </span>
          </div>

          {/* -- Figma -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-pink-400 hover:shadow-pink-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fab fa-figma text-3xl text-pink-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">Figma</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-pink-500/20 text-pink-400">
              Expert
            </span>
          </div>

          {/* -- Tailwind -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-sky-400 hover:shadow-sky-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-wind text-3xl text-sky-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">Tailwind</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-sky-500/20 text-sky-400">
              Expert
            </span>
          </div>

          {/* -- C++ -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-indigo-400 hover:shadow-indigo-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-code text-3xl text-indigo-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">C++</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-indigo-500/20 text-indigo-400">
              Intermediate
            </span>
          </div>

          {/* -- Python -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-yellow-400 hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fab fa-python text-3xl text-yellow-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">Python</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
              Intermediate
            </span>
          </div>

          {/* -- PHP -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-purple-400 hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fab fa-php text-3xl text-purple-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">PHP</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-purple-500/20 text-purple-400">
              Expert
            </span>
          </div>

          {/* -- Lua -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-blue-400 hover:shadow-blue-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-moon text-3xl text-blue-300"></i>
            <p class="mt-2 text-sm font-semibold text-white">Lua</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
              Beginner
            </span>
          </div>

          {/* -- Blender -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-orange-300 hover:shadow-orange-300/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-cube text-3xl text-orange-300"></i>
            <p class="mt-2 text-sm font-semibold text-white">Blender</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-orange-500/20 text-orange-300">
              Intermediate
            </span>
          </div>

          {/* -- Corel Draw -- */}
          <div
            class="flex flex-col items-center justify-center p-4 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-md
                hover:border-green-400 hover:shadow-green-400/40 hover:scale-105 transition-all duration-300"
          >
            <i class="fas fa-pen-nib text-3xl text-green-400"></i>
            <p class="mt-2 text-sm font-semibold text-white">Corel Draw</p>
            <span class="px-2 py-0.5 mt-1 text-xs rounded-full bg-green-500/20 text-green-400">
              Expert
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
