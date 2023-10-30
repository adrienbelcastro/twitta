import React from "react";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

const MainComponent = () => {
  return (
    <div>
      <main className="flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
        <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
          Home
        </h1>
        <div className="border-b-[0.5px] flex items-stretch py-6 px-4 space-x-2 border-gray-600 relative ">
          <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
          <div className="flex flex-col w-full">
            <input
              className="w-full h-full bg-transparent placeholder: text-2xl placeholder:text-gray-6 00 border-b-[0.5px] outline-none border-none"
              type="text"
              placeholder="What's Happening?"
            />

            <div className="w-full justify-between items-center flex">
              <div></div>
              <div className="w-full max-w-[100px] mr-4 ">
                <button className="rounded-full m-4 bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border-b-[0.5px] p-2 flex space-x-4 border-gray-600"
            >
              <div>
                <div className="w-10 h-10 bg-slate-200 rounded full"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex item-center w-full justify-between">
                  <div className="flex item-center space-x-1 w-full">
                    <div className="font-bold">Club of Coders</div>
                    <div className="text-gray-500">@clubofcoderscom</div>
                    <div className="text-gray-500">
                      <BsDot />
                    </div>
                    <div className="text-gray-500">1 hour ago</div>
                  </div>
                  <div>
                    <BsThreeDots />
                  </div>
                </div>
                <div className="text-white text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                  fugit quae voluptatum laudantium ipsa nisi aspernatur.
                  Doloribus autem sed veniam nobis soluta culpa fugit tempore?
                  Nemo accusamus eveniet numquam. Debitis.
                </div>
                <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2 "></div>
                <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                    <BsChat />
                  </div>
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                    <AiOutlineRetweet />
                  </div>
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                    <AiOutlineHeart />
                  </div>
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                    <IoStatsChart />
                  </div>
                  <div className="rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainComponent;
