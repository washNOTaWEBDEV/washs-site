import React from 'react'
// import BlueFullstop from './BlueFullstop';

interface Props {
    title: string;
}

const HomepageTitle = ({ title }: Props) => {
  return (
    <div className="w-full bg-slate-100 text-center py-8 border-t-2 border-slate-300/0 ">
      <h1 className='font-bold font-mono text-5xl'>{title}</h1>
    </div>
  );
};


export default HomepageTitle;

