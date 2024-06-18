import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-52 py-7 bg-slate-400">
      <div className="">
        <h1 className="mx-auto w-fit text-3xl text-white font-extrabold font-mono">
          <Link href="/" className="bg-slate-400 px-3 z-50 select-none">
            wash&apos;s blog
          </Link>
        </h1>
        <hr className="-mt-4 z-0 w-1/2 min-w-96 mx-auto" />

      </div>
    </footer>
  );
};

export default Footer;
