import React, { useState } from "react";
import Chat from "../assets/Chat";
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const FAQ = () => {
  const [expand, setExpand] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div className="mt-12 flex max-sm:flex-col gap-8">
      <div className="w-[40%] max-sm:w-full">
        <h1 className="my-2 text-xl font-bold">Frequently asked questions</h1>
        <span className="my-2 mt-2 text-stone-400">
          Here are some of our most asked questions
        </span>
        <section className="intro max-sm:hidden sm:w-full max-sm:order-2">
          <div className="action-call flex justify-between bg-slate-100 mt-12 rounded-xl p-4">
            <div className="flex flex-col items-start gap-2 ">
              <div className="font-bold flex flex-col">
                <h1>Still need help?</h1>
                <h1>We're here for you.</h1>
              </div>

              <button className="bg-black flex items-center my-4 gap-2 px-6 py-3 text-white self-start rounded-xl text-bold">
                Chat with us
              </button>
            </div>
            <div className="flex items-center">
              <Chat />
            </div>
          </div>
          <hr className="my-8 border sm:hidden" />
        </section>
      </div>
      <section className="questions w-[60%] max-sm:w-full flex flex-col max-md:order-1 gap-4">
        <div className="question-card flex gap-4 rounded-xl border-stone-200 border-2 p-4">
          <div className={`closed `}>
            <article className="flex gap-4 items-center">
              <span className="text-xl font-semibold">
                {expand.first ? (
                  <div onClick={(prev) => setExpand({ ...prev, first: false })}>
                    <RxCross2 />
                  </div>
                ) : (
                  <div onClick={(prev) => setExpand({ ...prev, first: true })}>
                    <LuPlus />
                  </div>
                )}
              </span>
              <h1 className="font-semibold">
                What should I do on my first trip to Rome?
              </h1>
            </article>
            {expand.first && (
              <h1 className="ml-9">
                Rome is packed with hidden gems. If you love art, don't miss the
                Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
                is a free museum and well worth a quick visit. If you love the
                ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
                the Domus Aurea, and the Baths of Caracalla. For even more
                hidden gems, take a tour of Trastevere, a fascinating
                neighborhood full of history and ambiance.
              </h1>
            )}
          </div>
        </div>
        <div className="question-card flex gap-4 rounded-xl border-stone-200 border-2 p-4">
          <div className={`closed `}>
            <article className="flex gap-4 items-center">
              <span className="text-xl font-semibold">
                {expand.second ? (
                  <div
                    onClick={(prev) => setExpand({ ...prev, second: false })}
                  >
                    <RxCross2 />
                  </div>
                ) : (
                  <div onClick={(prev) => setExpand({ ...prev, second: true })}>
                    <LuPlus />
                  </div>
                )}
              </span>
              <h1 className="font-semibold">
                What should I do on my second trip to Rome?
              </h1>
            </article>
            {expand.second && (
              <h1 className="ml-9">
                On your second visit to Rome, delve deeper into the city's rich
                tapestry of history and culture. Wander through the charming
                streets of Trastevere, where the vibrant atmosphere and quaint
                cafes beckon you to immerse yourself in authentic Roman
                life.Take a leisurely stroll through the lush gardens of Villa
                Borghese, pausing to admire masterpieces in the Borghese Gallery
                and soak in panoramic views of the city. Venture beyond the city
                limits to the historic Appian Way, where ancient ruins and
                archaeological sites offer a glimpse into Rome's storied past.
                Immerse yourself in Rome's vibrant cultural scene by attending a
                performance at one of its historic theaters or opera houses.
              </h1>
            )}
          </div>
        </div>
        <div className="question-card flex gap-4 rounded-xl border-stone-200 border-2 p-4">
          <div className={`closed `}>
            <article className="flex gap-4 items-center">
              <span className="text-xl font-semibold">
                {expand.third ? (
                  <div onClick={(prev) => setExpand({ ...prev, third: false })}>
                    <RxCross2 />
                  </div>
                ) : (
                  <div onClick={(prev) => setExpand({ ...prev, third: true })}>
                    <LuPlus />
                  </div>
                )}
              </span>
              <h1 className="font-semibold">
                What should I do on my third trip to Rome?
              </h1>
            </article>
            {expand.third && (
              <h1 className="ml-9">
                On your third visit to Rome, delve deeper into the city's rich
                tapestry of history and culture. Wander through the charming
                streets of Trastevere, where the vibrant atmosphere and quaint
                cafes beckon you to immerse yourself in authentic Roman
                life.Take a leisurely stroll through the lush gardens of Villa
                Borghese, pausing to admire masterpieces in the Borghese Gallery
                and soak in panoramic views of the city. Venture beyond the city
                limits to the historic Appian Way, where ancient ruins and
                archaeological sites offer a glimpse into Rome's storied past.
                Immerse yourself in Rome's vibrant cultural scene by attending a
                performance at one of its historic theaters or opera houses.
              </h1>
            )}
          </div>
        </div>
        <div className="intro max-sm:w-full sm:hidden">
          <div className="action-call flex justify-between bg-slate-100 mt-12 rounded-xl p-4">
            <div className="flex flex-col items-start gap-2 ">
              <div className="font-bold flex flex-col">
                <h1>Still need help?</h1>
                <h1>We're here for you.</h1>
              </div>

              <button className="bg-black flex items-center my-4 gap-2 px-6 py-3 text-white self-start rounded-xl text-bold">
                Chat with us
              </button>
            </div>
            <div className="flex items-center">
              <Chat />
            </div>
          </div>
          <hr className="my-8 border sm:hidden" />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
