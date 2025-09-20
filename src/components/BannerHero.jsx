import React from "react";
import TextType from "./Reactbits/TextType.jsx";

const BannerHero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1707924962886-12ad20367315?q=80&w=1332&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute inset-0 opacity-40 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="text-center z-10 animate-fadeInUp">
        <div className="flex justify-center items-center min-h-screen bg-transparent">
          <TextType
            text={[
              "Hi, I'm Alvin Khoirul",
              "I build modern and responsive websites",
              "Let's create something amazing together!",
            ]}
            typingSpeed={90}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerHero;
