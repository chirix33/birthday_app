"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // autoplay local song
    const audio = new Audio("/audio.mp3");
    audio.play().catch(() => {
      /* user gesture may be required on some browsers */
    });

    // hide loader after 5s
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <motion.div
          className="w-16 h-16 bg-emerald-500 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-48 min-h-screen">

      <div className="header w-full h-96 p-24 flex flex-col gap-12 justify-center bg-emerald-50">
        <div>
          <h1 className="text-3xl lg:text-5xl">
            Happy Birthday,
          </h1>
          <span className="inline-block text-xl lg:text-3xl pb-px border-b-2 border-b-lime-950 mt-4 text-center font-bold font-nixie text-lime-950">
            Muhsin!
          </span>
        </div>
        <div className="text-xl lg:text-3xl">
          <h2>You&apos;re now <span className="pb-px border-b-2 border-b-lime-950 mt-4 text-center font-bold font-nixie text-lime-950">15 years...</span></h2>
        </div>
      </div>


      <div className="w-full min-h-96 py-16 px-24 flex flex-col gap-12 justify-center bg-cyan-950 text-amber-50">
        <div>
          <h1 className="text-2xl">
            Sneak Peak...
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "/pictures/1.jpg",
            "/pictures/2.jpg",
            "/pictures/3.jpg",
            "/pictures/4.jpg",
            "/pictures/5.jpg",
            "/pictures/6.jpg",
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Birthday photo ${idx + 1}`}
              width={300}
              height={300}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="w-full min-h-96 py-16 px-24 flex flex-col gap-12 justify-center bg-zinc-900 text-amber-50">
        <div>
          <h1 className="text-2xl">
            Message for you!
          </h1>
        </div>
        <div className="text-lg lg:text-2xl">
          <p>
            Always work hard for what you want to do in life (ofcourse, with a little bit of fun).<br />
            You are a great person and you have a great future ahead of you.<br />
            I wish you all the best in your life and may you achieve all your dreams.<br />
            I hope you have a great birthday and may you have many more to come.
            <br /><br />
            <span className="font-nixie">Remember: Put in a little more effort and pray always and you will be better than everyone!<br /></span>
          </p>
      </div>
    </div>
    </div>
  );
}
