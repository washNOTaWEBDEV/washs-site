import React from 'react'
import BlueFullstop from './BlueFullstop';

interface Props {
    header:string;
    text:string;
}

const PageHeader = ({header, text}:Props) => {
  return (
    <div className="flex flex-row w-full py-16 bg-slate-100 items-center justify-center">
      <div className="text-center mx-20 px-96">
        <h1 className="font-mono text-5xl font-bold mb-2 ml-5">{header}<BlueFullstop /></h1>
        <div className="">
          <p className="font-serifs font-med">{text}</p>
        </div>
      </div>
    </div>
  );
}



export default PageHeader;
