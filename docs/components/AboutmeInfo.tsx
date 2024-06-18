import React from 'react'

interface Props {
    header:string;
    text:string;
    img:any;
}

const AboutmeInfo = ({header, text, img}:Props) => {
  return (
    <div className="flex flex-row w-full min-h-96 py-28 gap-x-32 bg-slate-200 items-center justify-center">
      <div className="">
        <div className='text-left'>
          <h1 className="font-mono text-3xl">
            {header}
          </h1>
          <div className='max-w-96 mr-10'>
            <p className="font-serifs font-med text-sm">{text}</p>
          </div>
        </div>
        {/* <div className="-mb-8 z-40">
            <button className=" font-mono text-2xl bg-slate-100 hover:bg-slate-200 px-5 py-2 border-4 rounded-2xl border-slate-200 hover:border-slate-300/75 shadow-md">
              Read more
            </button>
          </div> */}
      </div>
      <div className="">{img}</div>
    </div>
  );
}



export default AboutmeInfo;
