import React from "react";
import Navbar from "../components/Navbar";
import Home from "../assets/home_icon.svg";
import { Link } from "react-router-dom";

const ITTicketSubmit = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="heading py-4 px-12 flex items-center justify-between">
        <div className="flex items-center flex-wrap space-x-4">
          <Link to="/helpcenter" aria-label="Home">
            <img src={Home} alt="Home" />
          </Link>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="space-y-2">
            <p className="text-xl font-bold text-[#05004E]">Ticket List</p>
            <p className="text-sm sm:text-base text-gray-500">
              Blitz {">"} Help Center {">"} Create a ticket
            </p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 h-[62vh] mx-10 rounded-2xl p-6 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center mt-2 mb-12">
          <h1 className="text-2xl font-bold text-indigo-800">IT Tickets</h1>
          <p className="text-sm sm:text-base text-stone-900">
            Welcome! You can raise an IT Tickets request from the options
            provided.
          </p>
        </div>
        <div className="flex w-[55%] h-[70%] p-4 ">
          <div className="bg-lime-200 w-1/2 rounded-tl-2xl rounded-bl-2xl flex items-center justify-center">
            <h2 className="text-lg font-bold text-green-800">SUCCESS!</h2>
          </div>
          <div className="bg-sky-500 w-1/2 rounded-tr-2xl rounded-br-2xl flex flex-col items-center justify-center">
            <p className="text-white text-lg font-bold">Ticket Created</p>
            <p className="text-white text-sm">ID: BL12345</p>
            <p className="text-white text-xs text-center mt-2">
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
