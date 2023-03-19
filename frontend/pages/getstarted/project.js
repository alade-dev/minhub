import Link from "next/link";
import React from "react";

const project = () => {
  return (
    <div className=" bg-[#1e2c2e] h-screen w-screen">
      <div className="flex items-center text-center mr-14 justify-end ">
        <Link href="/getstarted" className="mr-3">
          <button className="shadow-md bg-gray-7 00 active:bg-white active:text-gray-800 hover:bg-slate-600 appearance-none border w-80 ml-9 mr-3 mt-4 rounded py-3 px-3 font-medium text-slate-50 leading-tight  hover:shadow-outline active:shadow-lg">
            Back
          </button>
        </Link>
      </div>
      <div className=" mt-20">
        <h1 className="text-4xl  pl-48 text-slate-100 font-medium mb-4  -mt-5">
          Project Setting
        </h1>
        <p className="block text-slate-400 pl-48 text-sm font-bold mb-2 w-[960px]">
          check your deployed projects here.
        </p>
        <div className="absolute pl-48 mb-4 mt-16 items-center justify-center  ">
          <h3 className="text-slate-200 text-3xl font-bold mb-2">Projects</h3>
          <hr className="w-96 border-2 border-slate-200" />

          <div className="flex ">
            <h3 className="text-md text-slate-400 font-bold pt-3 mt-2">
              Available Project
            </h3>
            <div className="w-[960px] mt-4 ">
              {/* {to call view project} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
