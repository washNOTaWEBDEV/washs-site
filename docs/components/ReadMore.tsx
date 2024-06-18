import Link from 'next/link';
import React from 'react'

const ReadMore = () => {
  return (
    <div className="flex w-full bg-slate-100 items-center justify-center">
      <div className="mx-60 mt-14 mb-16">
        <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-100 border-8 border-double border-gray-300 shadow-sm">
          <div className="-mt-5">
            <h1 className=" font-mono text-3xl z-40 bg-slate-100 rounded-xl px-2">
              I have a blog!
            </h1>
          </div>

          <div className="px-12 py-5 text-center">
            <p className="font-sans text-med">
              It was only some centuries ago when we were still living in
              feudalistic societies. We served our lords, ploughed their lands,
              made <span className="italic">their</span> food which{" "}
              <span className="italic">we</span> grew, paying for our very
              existence with our labour. But born free we are, and freed we
              were, from our chains; many of us came to possess our{" "}
              <span className="italic">own</span> plots of land. Now, with
              centuries of social and economic change along with a plethora of
              previously unimaginable technological advancements, we have
              arrived in the digital age. Deemed to be the great equaliser which
              would bring power back into the hands of ordinary men, the
              internet emerged, and quickly it became a household essential,
              accessible to man via his preferred handheld device. Yet, with all
              these new gadgets at our disposal, we must ponder if anything of
              significance has changed at all. Comrades, are we not once again
              slaves to our overlords every time we use a social media site? To
              Facebook, Instagram, Tiktok—subject to the abitrary constraints
              and illegitimate rule of technology conglomorates? I daresay, we
              are landless once again. This is ludicrous. Madness at its finest!
              Absolutely blasphemous! Where did we go so wrong? Have we become
              Nietzsche&apos;s last man and lost our drive for self-determinism? I
              have had enough of being a digital landless peasant! I shall
              revolt and declare this very plot of land right here to be my
              property and mine alone, where supreme authority over it shall
              reside eternally in me, and I alone shall dictate the content
              showcased and their media. As for this site:{" "}
              <span className="italic">L&apos;État, c&apos;est moi.</span>
            </p>
          </div>

          <div className="-mb-8 z-40">
            <Link href='/blog'>
            <button className=" font-mono text-2xl bg-slate-200 hover:bg-slate-300 px-5 py-2 border-4 rounded-2xl border-slate-300 hover:border-slate-400/50 shadow-md">
              Read blog
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



export default ReadMore;
