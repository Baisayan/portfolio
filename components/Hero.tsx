"use client";

import React from "react";
import { Mail, Twitter, Github, Linkedin, Download } from "lucide-react";
// import SocialLink from "./SocialLink";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="py-12 mb-16">
      <div className="flex items-start gap-4 mb-8">
        <Image
          width={24}
          height={24}
          src="/logo.png"
          alt="Baisayan"
          className="size-16 rounded-full shrink-0 object-cover border-2 border-gray-700"
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">Baisayan Bhattacharya</h1>
          </div>
          <p className="text-gray-400">@Baisayan</p>
        </div>
      </div>

      <p className="text-gray-300 text-base leading-relaxed mb-6">
        I'm <span className="text-white font-semibold">Baisayan</span>, an{" "}
        <span className="text-white font-semibold">
          Associate Software Developer
        </span>{" "}
        based in <span className="text-white font-medium">Delhi, India</span>.
        I build{" "}
        <span className="text-white font-semibold">
          production-ready applications
        </span>{" "}
        with modern technologies.
      </p>

      <div className="space-y-3 text-sm text-gray-400 mb-8">
        <p>
          <span className="text-white font-semibold">What I do:</span>{" "}
          Developing{" "}
          <span className="text-white font-medium">Frappe/ERPNext</span>{" "}
          modules, <span className="text-white font-medium">Laravel</span>{" "}
          applications, and building{" "}
          <span className="text-white font-medium">full-stack solutions</span>{" "}
          with React, Next.js, and modern databases.
        </p>
        <p>
          <span className="text-white font-semibold">Currently:</span> Working
          at <span className="text-white font-medium">Nestorbird</span>,
          integrating third-party services, optimizing SQL queries, and
          implementing{" "}
          <span className="text-white font-medium">
            role-based access control
          </span>
          .
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="https://drive.google.com/drive/folders/1IS59Ov0PV2rX3T0EYdIJDGMetXd7X_Fy?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md hover:bg-gray-700 text-white transition-colors border border-gray-700 hover:border-pink-500/50"
          style={{ backgroundColor: "oklch(14.1% 0.005 285.823)" }}
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
        <a
          href="mailto:bbbbaisayan@gmail.com"
          className="flex items-center gap-2 px-3 py-1 text-sm rounded-md hover:bg-gray-700 text-white transition-colors border border-gray-700 hover:border-pink-500/50"
          style={{ backgroundColor: "oklch(14.1% 0.005 285.823)" }}
        >
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          Open to work for your idea
        </a>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {/* <SocialLink
          icon={Mail}
          label="Email"
        />
        <SocialLink
          icon={Twitter}
          label="Twitter"
        />
        <SocialLink
          icon={Github}
          label="GitHub"
        />
        <SocialLink
          icon={Linkedin}
          label="LinkedIn"
        /> */}
      </div>

      <div className="w-full h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
