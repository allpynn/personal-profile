import React from "react";
import logo from "../assets/image/logo.png";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 pt-9 pb-8 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div class="flex flex-col items-start fade-in-up">
            <div class="mb-6">
              <img
                src={logo}
                alt="Logo"
                class="w-25 h-28 logo-glow transition-all duration-300 hover:scale-110"
              />
            </div>
            <h3 class="text-xl font-bold text-white mb-3 gradient-text">
              Alvin Khoirul
            </h3>
            <p class="text-sm leading-relaxed text-gray-400 max-w-xs">
              Membangun solusi digital modern dengan sentuhan desain dan
              fungsionalitas yang maksimal untuk masa depan yang lebih baik.
            </p>
          </div>

          <div class="fade-in-up">
            <h4 class="text-xl font-bold text-white mb-6 flex items-center">
              <i class="fas fa-compass mr-2 text-purple-500"></i>
              Navigasi
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#home"
                  class="nav-link text-gray-300 hover:text-purple-500 transition flex items-center group"
                >
                  <i class="fas fa-home mr-3 text-sm group-hover:text-purple-500 transition"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#profile"
                  class="nav-link text-gray-300 hover:text-purple-500 transition flex items-center group"
                >
                  <i class="fas fa-user mr-3 text-sm group-hover:text-purple-500 transition"></i>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  class="nav-link text-gray-300 hover:text-purple-500 transition flex items-center group"
                >
                  <i class="fas fa-code mr-3 text-sm group-hover:text-purple-500 transition"></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  class="nav-link text-gray-300 hover:text-purple-500 transition flex items-center group"
                >
                  <i class="fas fa-briefcase mr-3 text-sm group-hover:text-purple-500 transition"></i>
                  <span>Experience</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="fade-in-up">
            <h4 class="text-xl font-bold text-white mb-6 flex items-center">
              <i class="fas fa-share-alt mr-2 text-purple-500"></i>
              Terhubung
            </h4>
            <p class="text-sm mb-6 text-gray-400">
              Mari berkolaborasi dan berbagi inspirasi di platform berikut:
            </p>
            <div class="flex space-x-4">
              <a
                href="https://github.com/allpynn"
                target="_blank"
                rel="noopener"
                class="social-icon bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white p-3 rounded-full text-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/alvinkhoirul"
                rel="noopener"
                target="_blank"
                class="social-icon bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white p-3 rounded-full text-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/alviin.riz"
                rel="noopener"
                target="_blank"
                class="social-icon bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white p-3 rounded-full text-lg border border-gray-700 hover:border-pink-500 transition-all duration-300"
                title="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://discord.gg/vREhBBzyGa"
                rel="noopener"
                target="_blank"
                class="social-icon bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white p-3 rounded-full text-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                title="Discord"
              >
                <i class="fab fa-discord"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-16 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div class="flex items-center mb-4 md:mb-0">
              <i class="fas fa-coffee mr-2 text-amber-500"></i>
              <span>
                © 2025 Alvin Khoirul. Dibuat dengan semangat dan secangkir kopi.
              </span>
            </div>
            <div class="flex items-center space-x-6 text-xs">
              <span class="flex items-center">
                <i class="fas fa-heart text-red-500 mr-1"></i>
                Made with love
              </span>
              <span class="flex items-center">
                <i class="fas fa-code text-blue-400 mr-1"></i>
                Clean Code
              </span>
              <span class="flex items-center">
                <i class="fas fa-mobile-alt text-green-500 mr-1"></i>
                Responsive
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
