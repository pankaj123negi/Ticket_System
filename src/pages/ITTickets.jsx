import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Home from "../assets/home_icon.svg";
import Polygon from "../assets/Polygon.svg";
import Calender from "../assets/Calender.svg";
import Attachment from "../assets/Attachment.svg";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Add custom styles to override react-datepicker default width
const customStyles = `
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
    width: 100%;
  }
`;

const ITTickets = () => {
  // Previous state declarations remain the same
  const [date, setDate] = useState(null);
  const [files, setFiles] = useState([]);

  // Previous handler remains the same
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  // Previous ticketTags remain the same
  const ticketTags = [
    { value: "urgent", label: "Urgent" },
    { value: "low-priority", label: "Low Priority" },
    { value: "bug", label: "Bug" },
    { value: "feature-request", label: "Feature Request" },
  ];

  const renderField = (field) => {
    if (field.placeholder === "Due Date") {
      return (
        <>
          <style>{customStyles}</style>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            className="appearance-none w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none text-sm bg-white"
            placeholderText={field.placeholder}
            dateFormat="MM/dd/yyyy"
          />
        </>
      );
    }

    // Rest of the renderField function remains exactly the same
    if (field.placeholder === "Attachments") {
      return (
        <div className="w-full">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label 
            htmlFor="file-upload"
            className="w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 bg-white flex items-center cursor-pointer"
          >
            {files.length ? `${files.length} files selected` : field.placeholder}
          </label>
          {files.length > 0 && (
            <div className="mt-2">
              {files.map((file, i) => (
                <div key={i} className="text-sm text-gray-600">{file.name}</div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (field.isMulti) {
      return (
        <Select
          isMulti
          options={field.options}
          placeholder={field.placeholder}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      );
    }

    return (
      <select className="appearance-none w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none text-sm bg-white">
        <option value="" disabled selected>{field.placeholder}</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    );
  };

  // Rest of the component remains exactly the same
  const fields = [
    { placeholder: "Ticket Category", icon: Polygon, isMulti: false },
    { placeholder: "Priority", icon: Polygon, isMulti: false },
    { placeholder: "Ticket Tags", icon: Polygon, isMulti: true, options: ticketTags },
    { placeholder: "Due Date", icon: Calender, isMulti: false },
    { placeholder: "Title", icon: Polygon, isMulti: false },
    { placeholder: "Attachments", icon: Attachment, isMulti: false },
    { placeholder: "Select a system (tools)", icon: Polygon, isMulti: false },
    { placeholder: "Watcher List", icon: Polygon, isMulti: true, options: ticketTags },
    { placeholder: "Description", icon: Polygon, isMulti: false },
  ];

  return (
    <div>
      <Navbar />
      <div className="heading py-4 px-6 md:px-12 flex items-center justify-between">
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

      <div className="bg-indigo-50 mx-4 md:mx-10 rounded-2xl p-4 md:p-6 flex flex-col">
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-2xl font-bold text-indigo-800">IT Tickets</h1>
          <p className="text-sm sm:text-base text-stone-900 text-center">
            Welcome! You can raise an IT Tickets request from the options provided.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 p-4">
          {fields.map((field, index) => (
            <div key={index} className="relative p-1 w-full">
              <div className="relative">
                {renderField(field)}
                <div 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => {
                    if (field.placeholder === "Due Date") {
                      document.querySelector('.react-datepicker__input-container input').focus();
                    }
                  }}
                >
                  <img src={field.icon} alt="Field Icon" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mx-4">
          <button className="w-[172px] h-[40px] gradient text-white rounded-md">
            Send
          </button>
          <button className="w-[172px] h-[40px] bg-white text-black rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITTickets;