import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Home from "../assets/home_icon.svg";
import ITTicketIcon from "../assets/it_ticket_icon.svg";
import HRTicketIcon from "../assets/hr_ticket_icon.svg";
import AccountTicketIcon from "../assets/account_ticket_icon.svg";
import BluEntMan from "../assets/bluent_man.svg"; // Corporate man SVG
import "../App.css";

const Createticket = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb and Header */}
      <div className="heading py-8 px-12 flex items-center justify-between">
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

      {/* Welcome Section */}
      <div className="py-16 px-8 m-10 lg:px-24 bg-[#F4F7FE] rounded-lg relative">
        <h1 className="text-3xl font-bold text-center mb-12 text-[#05004E]">
          Welcome to the Help Center!
        </h1>

        {/* Flex container for tickets and icon */}
        <div className="flex flex-wrap items-start justify-center gap-12">
          {/* Corporate Man */}
          <div className="hidden 2xl:block  ">
            <img
              src={BluEntMan}
              alt="Corporate Man"
              className="relative left-[2rem] bottom-[5rem]  -z-1    bottom-0 "
            />
          </div>

          {/* Ticket Options */}
          <div className="flex flex-wrap  justify-center gap-12">
            {/* IT Tickets */}
            <div className="gradient rounded-xl text-white p-6 w-[342px] h-[159px] shadow-md relative">
              <img
                src={ITTicketIcon}
                alt="IT Tickets"
                className="w-16 absolute -top-8 left-1/2 transform -translate-x-1/2"
              />
              <h2 className="text-xl font-bold text-center mt-8 mb-2">IT TICKETS</h2>
              <p className="text-center text-sm">
                Welcome! You can raise an IT Tickets request from the options provided.
              </p>
            </div>

            {/* HR Tickets */}
            <div className="gradient rounded-xl text-white p-6 w-[342px] h-[159px] shadow-md relative">
              <img
                src={HRTicketIcon}
                alt="HR Tickets"
                className="w-16 absolute -top-8 left-1/2 transform -translate-x-1/2"
              />
              <h2 className="text-xl font-bold text-center mt-8 mb-2">HR TICKETS</h2>
              <p className="text-center text-sm">
                Welcome! You can raise an HR Tickets request from the options provided.
              </p>
            </div>

            {/* Account Tickets */}
            <div className="gradient rounded-xl text-white p-6 w-[342px] h-[159px] shadow-md relative">
              <img
                src={AccountTicketIcon}
                alt="Account Tickets"
                className="w-16 absolute -top-8 left-1/2 transform -translate-x-1/2"
              />
              <h2 className="text-xl font-bold text-center mt-8 mb-2">ACCOUNT TICKETS</h2>
              <p className="text-center text-sm">
                Welcome! You can raise an Account Tickets request from the options provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createticket;