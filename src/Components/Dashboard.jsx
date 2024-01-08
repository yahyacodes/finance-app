import React from "react";
import { BiMoney } from "react-icons/bi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { FcBullish } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-100 mx-auto">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 xl:gap-40">
        <div className="">
          <div className="flex gap-2 text-lg">
            <BiMoney className="w-12 h-12 p-2 border rounded-full border-green-500 items-center justify-center text-green-500" />
            <h1 className="text-3xl font-bold text-green-500 mt-2">Income</h1>
          </div>

          <div className="flex flex-col md:flex-row md:max-w-md">
            <Link to="/income">
              <FcBullish className="text-[20rem]" />
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2">
            <BiMoneyWithdraw className="w-12 h-12 p-2 border rounded-full border-red-500 items-center justify-center text-red-500" />
            <h1 className="text-3xl font-bold text-red-500 mt-2">Expenses</h1>
          </div>

          <div className="flex flex-col md:flex-row md:max-w-md">
            <Link to="/expenses">
              <FcBearish className="text-[20rem]" />
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2">
            <BiDollar className="w-12 h-12 p-2 border rounded-full border-orange-400 items-center justify-center text-orange-400" />
            <h1 className="text-3xl font-bold text-orange-400 mt-2">Savings</h1>
          </div>

          <div className="flex flex-col md:flex-row md:max-w-md">
            <Link to="/savings">
              <FcLibrary className="text-[22rem]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
