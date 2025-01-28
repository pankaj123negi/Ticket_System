import React from "react";
import Navbar from "../components/Navbar";
import Home from "../assets/home_icon.svg";
import TickIcon from "../assets/tick.svg"; // Assuming the tick icon SVG is saved here
import Stars from "../assets/stars.svg"; // Assuming the stars SVG is saved here
import { Link } from "react-router-dom";

const ITTicketSubmit = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar />
      <div className="heading py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center flex-wrap space-x-4">
          <Link to="/helpcenter" aria-label="Home">
            <img src={Home} alt="Home" className="w-6 h-6" />
          </Link>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="space-y-2">
            <p className="text-xl font-bold text-[#05004E]">Ticket List</p>
            <p className="text-sm sm:text-base text-gray-500">
              Blitz {">"} Help Center {">"} Create a ticket {">"} IT ticket
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 mx-4 md:mx-10 rounded-2xl p-8 flex flex-col justify-center items-center shadow-lg">
        <div className="flex flex-col items-center mt-2 mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-800">
            IT Tickets
          </h1>
          <p className="text-sm sm:text-base text-stone-900 max-w-[80%]">
            Welcome! You can raise an IT Tickets request from the options
            provided.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full max-w-[838px] h-auto md:h-[320px] shadow-lg rounded-2xl overflow-hidden">
          {/* Left Gradient Section */}
          <div className="gradient w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-500">
            <img src={Stars} alt="Stars" className=" mb-4" />
            
          </div>

          {/* Right Section */}
          <div className="bg-indigo-700 w-full md:w-1/2 flex flex-col items-center justify-center space-y-3 p-6 text-white">
            <img src={TickIcon} alt="Success Tick" className="w-8 h-8" />
            <p className="text-xl md:text-2xl font-bold">Ticket Created</p>
            <p className="text-base md:text-lg">ID: BL12345</p>
            <p className="text-center text-xs md:text-sm max-w-[80%]">
              Your ticket has been successfully created. An email has been sent
              to your address with the ticket information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITTicketSubmit;
