import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeat bg-cover bg-center">
      <div className="bg-black/30 flex flex-col justify-around items-center gap-4 py-8 xl:h-[80vh]">
        <div className="text-center">
          <h2 className="text-2xl text-white">
            Subscribe to our newsletter to get the latest trends & news
          </h2>
          <p className="text-xl text-white font-thin">Join our database NOW!</p>
        </div>
        <form className="flex flex-col xl:flex-row justify-center items-center gap-4 md:w-[86vw]">
          <input className="px-4 py-2 text-xl bg-white/30 outline-none w-full placeholder:italic placeholder:text-white text-white duration-300 hover:bg-white/40" type="text" placeholder="Name" />
          <input
            className="px-4 py-2 text-xl bg-white/30 outline-none border-none w-full placeholder:italic placeholder:text-white text-white hover:bg-white/40 duration-300"
            type="email"
            placeholder="Your E-mail"
          />
          <div className="flex justify-center">
            <button className=" rounded-full py-2 text-xl px-4  bg-white/30 outline-none border-none text-white hover:bg-white/40 duration-300">
              SUBSCRIBE
            </button>
          </div>
        </form>
        <div className="text-white flex flex-col xl:flex-row gap-8">
          <div className="flex flex-col justify-center items-center gap-4">
            <img className="w-40" src="./sign.svg" alt="" />
            <p className="text-2xl">GIVE US A CALL</p>
            <p>Office Landline: +44 5567 32 664 567</p>
            <p>Mobile: +44 5567 89 3322 332</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img className="w-40" src="./trekking.svg" alt="" />
            <p>COME & DROP BY</p>
            <p>4124 Barnes Street, Sanford, FL 32771</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img className="w-40" src="./around.svg" alt="" />
            <p>SEND US A MESSAGE</p>
            <p>youremail@gmail.com</p>
            <p>Office@yourbusinessname.com</p>
          </div>
        </div>
        <div className="px-10 text-center text-wrap">
          <p className="text-white">
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This website is made with &#10084; by <span className="text-pink-300">'Riazul_Dev'</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
