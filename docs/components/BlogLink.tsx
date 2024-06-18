import React from 'react'
import Link from 'next/link';

interface Props {
    link: string;
    date: string;
    title: string;

}

const BlogLink = ({link, date, title}: Props ) => {
  return (
    <div>
      <Link href={link} className="flex items-center font-mono hover:font-bold hover:border-l-4 hover:border-l-blue-200 pl-4 pb-1 hover:-ml-1">
        <span className="font-mono text-lg group-hover:font-bold ">{title}</span>
        <span className="text-xs ml-auto">{date} </span>
      </Link>
    </div>
  );
}

export default BlogLink;