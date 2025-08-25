import React from "react";

export default function SipWorthSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-[#3E5C48] px-4 py-32 md:py-36 rounded-4xl overflow-hidden mb-10"
      aria-labelledby="sips-heading"
    >
      {/* Heading */}
      <h2
        id="sips-heading"
        className="absolute text-left top-12 md:top-[5%] left-[30%] -translate-x-1/2 text-4xl md:text-[100px] text-[#83A184] uppercase tracking-wide font-bold z-10"
      >
        Sips Worth <br className="hidden md:block" /> Sharing
      </h2>

      {/* Main Coffee Image */}
      <img
        src="/Sip.jpg"
        alt="A delicious cup of coffee"
        className="w-full max-w-[765px] h-auto md:h-[774px] object-cover rounded-3xl z-0"
        loading="lazy"
      />

      {/* Quote Box */}
      <div className="absolute bottom-4 md:bottom-[8%] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[25%] bg-black/60 backdrop-blur p-6 md:p-8 rounded-2xl z-20 max-w-sm">
        <p className="text-beige text-sm md:text-base uppercase leading-relaxed">
          Because great coffee isn't just <br /> a drink – it's a shared <br />
          experience
        </p>
      </div>

      {/* Cookies Image Decoration */}
      <img
        src="/public/cookies.png"
        alt="Cookies next to coffee"
        className="absolute w-40 h-40 md:w-[442px] md:h-[444px] -top-4 md:-top-[4%] right-4 md:right-[8%] z-10"
        loading="lazy"
      />
    </section>
  );
}
