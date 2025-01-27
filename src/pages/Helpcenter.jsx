import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Home from "../assets/home_icon.svg";
import Add from "../assets/down.svg";
import SearchIcon from "../assets/search_icon.svg"; // Add your search icon here
import "../App.css";

const TicketTable = ({ tickets }) => {
  return (
    <table className="table-auto rounded-lg w-full text-center border-collapse">
      <thead>
        <tr className="bg-[#5B4DEE] text-white text-sm">
          <th className="py-2 px-4 border border-white">Category</th>
          <th className="py-2 px-4 border border-white">ID</th>
          <th className="py-2 px-4 border border-white">Title</th>
          <th className="py-2 px-4 border border-white">Status</th>
          <th className="py-2 px-4 border border-white">Tag</th>
          <th className="py-2 px-4 border border-white">Reporter</th>
          <th className="py-2 px-4 border border-white">Assignee</th>
          <th className="py-2 px-4 border border-white">Approval Status</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {tickets.map((ticket, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border border-white bg-[#EBEFFF]">
              {ticket.category}
            </td>
            <td className="py-2 px-4 border border-white bg-[#D2DCFF]">
              {ticket.id}
            </td>
            <td className="py-2 px-4 border border-white bg-[#EBEFFF]">
              {ticket.title}
            </td>
            <td className="py-2 px-4 border border-white bg-[#D2DCFF]">
              {ticket.status}
            </td>
            <td className="py-2 px-4 border border-white bg-[#EBEFFF]">
              {ticket.tag}
            </td>
            <td className="py-2 px-4 border border-white bg-[#D2DCFF]">
              {ticket.reporter}
            </td>
            <td className="py-2 px-4 border border-white bg-[#EBEFFF]">
              {ticket.assignee}
            </td>
            <td className="py-2 px-4 border border-white bg-[#D2DCFF]">
              {ticket.approvalStatus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Helpcenter = () => {
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    category: index % 2 === 0 ? "Common Requests" : "Technical Support",
    id: `BLI${1234 + index}`,
    title: `Ticket Title ${index + 1}`,
    status:
      index % 3 === 0
        ? "Approved"
        : index % 3 === 1
        ? "Pending"
        : "In Progress",
    tag: index % 2 === 0 ? "Dinesh, Sunil" : "Rahul, Priya",
    reporter: `Reporter ${index + 1}`,
    assignee: `Assignee ${index + 1}`,
    approvalStatus: index % 2 === 0 ? "Approved" : "Pending",
  }));

  const [tickets, setTickets] = useState(dummyData);
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default is "All"
  const [currentPage, setCurrentPage] = useState(1);

  const handleStatusChange = (e) => setStatusFilter(e.target.value);
  const handleCategoryChange = (e) => setCategoryFilter(e.target.value);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleItemsPerPageChange = (e) => {
    const value = e.target.value;
    setItemsPerPage(value === "all" ? "" : Number(value)); // Set to empty string for "All", otherwise parse the number
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const filteredTickets = tickets.filter(
    (ticket) =>
      (statusFilter === "" || ticket.status === statusFilter) &&
      (categoryFilter === "" || ticket.category === categoryFilter) &&
      (searchQuery === "" ||
        ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Calculate the total number of pages
  const totalPages =
    itemsPerPage === ""
      ? 1
      : Math.ceil(filteredTickets.length / Number(itemsPerPage));

  // Get tickets for the current page
  const paginatedTickets =
    itemsPerPage === ""
      ? filteredTickets
      : filteredTickets.slice(
          (currentPage - 1) * Number(itemsPerPage),
          currentPage * Number(itemsPerPage)
        );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="heading py-8 px-12 flex items-center justify-between">
        <div className="flex items-center flex-wrap space-x-4">
          <Link to="/helpcenter">
            <img src={Home} alt="Home" />
          </Link>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="space-y-2">
            <p className="text-xl font-bold text-[#05004E]">Ticket List</p>
            <p className="text-sm sm:text-base text-gray-500">
              Blitz {">"} Help Center
            </p>
          </div>
        </div>

        <Link to="/create-ticket">
          <button className="flex items-center justify-center gap-8 green-gradient text-xs w-48 font-normal h-10 text-white rounded-lg px-4">
            <span>Create New Ticket</span>
            <img src={Add} alt="Add Icon" className="w-6 h-6" />
          </button>
        </Link>
      </div>

      <div className="filters py-4 px-12 flex flex-row-reverse gap-4 items-center flex-wrap">
        <select
          className="border w-48 border-green-500 rounded-lg px-3 py-2 text-gray-700"
          value={itemsPerPage === "" ? "all" : itemsPerPage} // Show "all" when displaying all entries
          onChange={handleItemsPerPageChange}
        >
          <option value={10}>10</option> {/* Default value */}
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value="all">All</option> {/* Option to display all entries */}
        </select>

        <select
          className="border w-48 border-green-500 rounded-lg px-3 py-2 text-gray-700"
          value={statusFilter}
          onChange={handleStatusChange}
        >
          <option value="">Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
        </select>

        <select
          className="border w-48 border-green-500 rounded-lg px-3 py-2 text-gray-700"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">Category</option>
          <option value="Common Requests">Common Requests</option>
          <option value="Technical Support">Technical Support</option>
        </select>

        <div className="flex w-70 items-center border border-green-500 rounded-lg px-2 py-2 w-full sm:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by title, ID, or tags"
            className="w-full focus:outline-none"
          />
          <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-2" />
        </div>
      </div>

      <div className="py-4 mx-8">
        <TicketTable tickets={paginatedTickets} />
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-[#5B4DEE] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpcenter;
