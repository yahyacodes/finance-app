import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BiMoney } from "react-icons/bi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";

const Sidebar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-full hidden xl:block bg-divBg space-y-8 sm:w-80">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8 py-4 border-b mb-5">
            <a href="#" className="flex-none">
              <h1 className="text-3xl font-bold text-gray-100">Finance App</h1>
            </a>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="px-4 text-sm font-medium flex-1">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-x-2 text-gray-100 p-2 rounded-lg font-bold text-lg  hover:bg-gray-900 active:bg-gray-900 duration-150"
                >
                  <div className="text-gray-500 text-2xl">
                    {" "}
                    <BiSolidDashboard />
                  </div>
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/income"
                  className="flex items-center gap-x-2 text-gray-100 p-2 rounded-lg font-bold text-lg  hover:bg-gray-900 active:bg-gray-900 duration-150"
                >
                  <div className="text-gray-500 text-2xl">
                    <BiMoney />
                  </div>
                  Income
                </Link>
              </li>

              <li>
                <Link
                  to="/expenses"
                  className="flex items-center gap-x-2 text-gray-100 p-2 rounded-lg font-bold text-lg  hover:bg-gray-900 active:bg-gray-900 duration-150"
                >
                  <div className="text-gray-500 text-2xl">
                    <BiMoneyWithdraw />
                  </div>
                  Expenses
                </Link>
              </li>

              <li>
                <Link
                  to="/savings"
                  className="flex items-center gap-x-2 text-gray-100 p-2 rounded-lg font-bold text-lg  hover:bg-gray-900 active:bg-gray-900 duration-150"
                >
                  <div className="text-gray-500 text-2xl">
                    <BiDollar />
                  </div>
                  Savings
                </Link>
              </li>
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-x-2 text-gray-100 p-2 rounded-lg  hover:bg-gray-900 active:bg-gray-800 duration-150"
                  >
                    <div className="text-gray-500"> </div>
                    @yahyacodes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
