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

const customStyles = `
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
    width: 100%;
  }
`;

const ticketCategories = [
  { value: "hardware", label: "Hardware" },
  { value: "software", label: "Software" },
  { value: "network", label: "Network" },
  { value: "access-issues", label: "Access Issues" },
];

const ticketPriorities = [
  { value: "urgent", label: "Urgent" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const ticketTags = [
  { value: "bug", label: "Bug" },
  { value: "feature-request", label: "Feature Request" },
  { value: "maintenance", label: "Maintenance" },
  { value: "question", label: "Question" },
];

const systemTools = [
  { value: "jira", label: "JIRA" },
  { value: "slack", label: "Slack" },
  { value: "confluence", label: "Confluence" },
  { value: "git", label: "Git" },
];

const watcherList = [
  { value: "john-doe", label: "John Doe" },
  { value: "jane-smith", label: "Jane Smith" },
  { value: "adam-lee", label: "Adam Lee" },
  { value: "emma-jones", label: "Emma Jones" },
];

const ITTickets = () => {
  const [formData, setFormData] = useState({
    ticketCategory: null,
    priority: null,
    ticketTags: [],
    dueDate: null,
    title: "",
    attachments: [],
    systemTool: null,
    watcherList: [],
    description: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    handleInputChange("attachments", Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add form submission logic here, such as sending data to a backend API
  };

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
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col items-center mt-2">
            <h1 className="text-2xl font-bold text-indigo-800">IT Tickets</h1>
            <p className="text-sm sm:text-base text-stone-900 text-center">
              Welcome! You can raise an IT Tickets request from the options provided.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 p-4">
            {/* Ticket Category */}
            <div>
              <Select
                options={ticketCategories}
                placeholder="Ticket Category"
                onChange={(value) => handleInputChange("ticketCategory", value)}
              />
            </div>

            {/* Priority */}
            <div>
              <Select
                options={ticketPriorities}
                placeholder="Priority"
                onChange={(value) => handleInputChange("priority", value)}
              />
            </div>

            {/* Ticket Tags */}
            <div>
              <Select
                isMulti
                options={ticketTags}
                placeholder="Ticket Tags"
                onChange={(value) => handleInputChange("ticketTags", value)}
              />
            </div>

            {/* Due Date */}
            <div className="relative">
              <style>{customStyles}</style>
              <DatePicker
                selected={formData.dueDate}
                onChange={(date) => handleInputChange("dueDate", date)}
                className="appearance-none w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none text-sm bg-white"
                placeholderText="Due Date"
                dateFormat="MM/dd/yyyy"
              />
              <img
                src={Calender}
                alt="Calendar Icon"
                className="absolute right-3 w-5 h-5 top-2.5"
              />
            </div>

            {/* Title */}
            <div>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                className="w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none text-sm bg-white"
              />
            </div>

            {/* Attachments */}
            <div className="relative">
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
                {formData.attachments.length
                  ? `${formData.attachments.length} files selected`
                  : "Attachments"}
                <img
                  src={Attachment}
                  alt="Attachment Icon"
                  className="absolute right-3 w-5 h-5 top-2.5"
                />
              </label>
            </div>

            {/* System Tools */}
            <div>
              <Select
                options={systemTools}
                placeholder="Select a system (tools)"
                onChange={(value) => handleInputChange("systemTool", value)}
              />
            </div>

            {/* Watcher List */}
            <div>
              <Select
                isMulti
                options={watcherList}
                placeholder="Watcher List"
                onChange={(value) => handleInputChange("watcherList", value)}
              />
            </div>

            {/* Description */}
            <div className="relative">
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="w-full h-[40px] pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none text-sm bg-white resize-y"
              ></textarea>
            </div>
          </div>

          <div className="flex gap-4 mx-4">
            <button
              type="submit"
              className="w-[172px] h-[40px] gradient text-white rounded-md"
            >
              Send
            </button>
            <button
              type="button"
              className="w-[172px] h-[40px] bg-white text-black rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ITTickets;
