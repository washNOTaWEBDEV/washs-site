"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex bg-zinc-50 w-full fixed top-0 left-0 z-50 items-center h-14 border-b-2 border-b-slate-400/75"
      >
        <Link href="/" className="mr-auto px-10 py-4 hover:font-semibold">
          <h1 className="font-mono text-xl select-none">
            wash&apos;s blog
          </h1>
        </Link>

        <ul className="flex gap-x-0 mr-2 items-center">
          <Link href="/" className="pl-7 pr-5 mr-4 py-4 hover:font-semibold ">
            <li className="font-mono ">
              <p>About</p>
            </li>
          </Link>
          <Link href="/blog" className="pl-5 pr-10 mr-4 py-4 hover:font-semibold  ">
            <li className="font-mono ">
              <p>Blog</p>
            </li>
          </Link>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
