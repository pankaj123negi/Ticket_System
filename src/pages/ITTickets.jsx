import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Home from "../assets/home_icon.svg";
import { FiDownloadCloud } from "react-icons/fi";
import Select from "react-select"; // Import react-select


//for custom icon from the api
const customDropdownIndicator = () => {
  return (
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
      {<FiDownloadCloud />} 
    </div>
  );
};

//to remove the cross indicator
const customClearIndicator = () => {
  return null; 
};

const ITTickets = () => {
  


  const ticketTags = [
    { value: "urgent", label: "Urgent" },
    { value: "low-priority", label: "Low Priority" },
    { value: "bug", label: "Bug" },
    { value: "feature-request", label: "Feature Request" },
  ];

  // Define fields with `isMulti` for the multi-select options
  const fields = [
    { placeholder: "Ticket Category", icon: <FiDownloadCloud />, isMulti: false, },
    { placeholder: "Priority", icon: <FiDownloadCloud />, isMulti: false,  },
    { placeholder: "Ticket Tags", icon: <FiDownloadCloud />, isMulti: true, options: ticketTags },
    { placeholder: "Due Date", icon: <FiDownloadCloud />, isMulti: false },
    { placeholder: "Title", icon: <FiDownloadCloud />, isMulti: false },
    { placeholder: "Attachments", icon: <FiDownloadCloud />, isMulti: false },
    { placeholder: "Select a system (tools)", icon: <FiDownloadCloud />, isMulti: false },
    { placeholder: "Watcher List", icon: <FiDownloadCloud />, isMulti: true,options:ticketTags },
    { placeholder: "Description", icon: <FiDownloadCloud />, isMulti: false },
  ];

  return (
    <div>
      <Navbar />
      <div className="heading py-2 px-12 flex items-center justify-between">
        <div className="flex items-center flex-wrap space-x-4">
          <Link to="/helpcenter">
            <img src={Home} alt="Home" />
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

      {/* Main Form Container */}
      <div className="bg-indigo-50 h-[70vh] mx-10 rounded-2xl p-6 flex flex-col">
        {/* Top Section: Centered Heading */}
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-2xl font-bold text-indigo-800">IT Tickets</h1>
          <p className="text-sm sm:text-base text-stone-900">
            Welcome! You can raise an IT Tickets request from the options provided.
          </p>
        </div>

        {/* Middle Section: Grid for Select Fields */}
        <div className="grid grid-cols-2 flex-grow gap-x-4 p-10">
          {fields.map((field, index) => (
            <div key={index} className="relative p-2">
              <div className="relative w-[40vw]">
                {/* Use react-select for multi-select fields */}
                {field.isMulti ? (
                  <Select
                    isMulti
                    options={field.options}
                    placeholder={field.placeholder}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    components={{
                      DropdownIndicator: customDropdownIndicator, 
                      ClearIndicator:customClearIndicator
                    }}
                  />
                ) : (
                  <select className="appearance-none w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none">
                    {/* Placeholder Option */}
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-400 italic"
                    >
                      {field.placeholder}
                    </option>
                    {/* Example Options */}
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                )}
                {/* Custom Icon (outside react-select) */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                  {field.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Buttons on Left */}
        <div className="flex gap-4 mx-8">
          <button className="px-7 py-2 bg-blue-500 text-white rounded-md">
            Send
          </button>
          <button className="px-7 py-2 bg-gray-300 text-black rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};


export default ITTickets;
