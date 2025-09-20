import React from "react";
import PixelTransition from "./Reactbits/PixelTransition";
import HMIF from "../assets/image/HMIF.jpg";
import SMAIT from "../assets/image/AULIYA-VIDEO.jpg";
import UKM from "../assets/image/UKM-BASKET.jpg";
const Experience = () => {
  return (
    <section
      id="experience"
      class="py-20 bg-gradient-to-l from-gray-900 via-gray-900 to-purple-900"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span class="underline underline-offset-4 decoration-8 decoration-blue-500 dark:decoration-blue-600">
              Experience & Organization
            </span>
          </h1>
          <p class="text-xl text-gray-300">
            Here are some experiences that shaped my skills
          </p>
        </div>

        {/* -- Grid PixelTransition -- */}
        <div class="grid grid-cols-1 sm:grid-cols- lg:grid-cols-3 gap-5 place-items-center">
          {/* Pixel Box 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-72 h-72">
              <PixelTransition
                firstContent={
                  <img
                    src={SMAIT}
                    alt="Profile Photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "2rem",
                        color: "#ffffff",
                      }}
                    >
                      VIDEOGRAFI
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card w-full h-full"
              />
            </div>

            {/* Caption under box */}
            <p className="text-white text-lg font-semibold text-center">
              Juara 2 Lomba Videografi
              <br />
              <span className="text-gray-400 text-sm">
                Tingkat SMA Se-Balikpapan by SMAIT AL-Auliya
              </span>
            </p>
          </div>

          {/* Pixel Box 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-72 h-72">
              <PixelTransition
                firstContent={
                  <img
                    src={UKM}
                    alt="Profile Photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "2rem",
                        color: "#ffffff",
                      }}
                    >
                      UKM BASKET
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card w-full h-full"
              />
            </div>

            {/* Caption under box */}
            <p className="text-white text-lg font-semibold text-center">
              Manager <br />
              <span className="text-gray-400 text-sm">
                UKM Basket Universitas Ahmad Dahlan 2023/2025
              </span>
            </p>
          </div>

          {/* Pixel Box 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-72 h-72">
              <PixelTransition
                firstContent={
                  <img
                    src={HMIF}
                    alt="Profile Photo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 900,
                        fontSize: "2rem",
                        color: "#ffffff",
                      }}
                    >
                      HMIF
                    </p>
                  </div>
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card w-full h-full"
              />
            </div>

            {/* Caption under box */}
            <p className="text-white text-lg font-semibold text-center">
              Staff Minat Dan Bakat
              <br />
              <span className="text-gray-400 text-sm">
                Himpunan Mahasiswa Informatika 2024/2025
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
