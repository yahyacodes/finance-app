import React, { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "./Modal";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Expenses = () => {
  const [expense, setExpense] = useState([]);
  const expensesCollectionRef = collection(db, "expenses");

  const [showModal, setShowModal] = useState(false);
  const [sourceVal, setSourceVal] = useState("");
  const [amountVal, setAmountVal] = useState("");
  const [desVal, setDesVal] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear() % 100;

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  const handleSubmit = async () => {
    const newDate = new Date();
    setCurrentDate(formatDate(newDate));
    setCurrentDate(formatDate(newDate));
    await addDoc(expensesCollectionRef, {
      amount: amountVal,
      description: desVal,
      source: sourceVal,
      date: formatDate(newDate),
    });
    window.location.reload();
  };

  const handleDelete = async (id) => {
    const deleteIncome = doc(db, "expenses", id);
    await deleteDoc(deleteIncome);
    window.location.reload();
  };

  // Fetching expenses
  useEffect(() => {
    const getExpenses = async () => {
      const data = await getDocs(expensesCollectionRef);
      setExpense(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getExpenses();
  }, []);

  const handleFormReload = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <section className="py-14">
      <Link to="/">
        <BsArrowLeftCircle className="xl:hidden text-xl text-gray-100 mb-10" />
      </Link>
      <h1 className="text-3xl font-bold text-gray-100 mx-auto">Expenses</h1>
      <div className="mt-12 shadow-sm border border-gray-600 rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-100 font-bold text-lg">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Date</td>
              <th className="py-3 px-6">Source</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">Category</th>
              <th
                className="text-right py-1.5 px-10 whitespace-nowrap flex items-center 
              gap-x-0 font-medium text-green-600 hover:text-green-500 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <div>
                  <BiPlus />
                </div>
                New Entry
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-100">
            {expense.map((data) => (
              <tr key={data.id} className="odd:bg-divBg">
                <td className="px-6 py-4 whitespace-nowrap text-md">
                  {data.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize text-md">
                  {data.source}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-md">
                  ${data.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap capitalize text-md">
                  {data.description}
                </td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-xl mb-4 text-gray-100 font-semibold">
          Add New Expense
        </h3>
        <form className="space-y-6" onSubmit={handleFormReload}>
          <div>
            <label
              htmlFor="source"
              className="block mb-2 font-medium text-gray-100"
            >
              Source
            </label>
            <input
              type="text"
              onChange={(e) => {
                setSourceVal(e.target.value);
              }}
              className="bg-color border-gray-800 text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block mb-2 font-medium text-gray-100"
            >
              Amount
            </label>
            <input
              type="number"
              onChange={(e) => {
                setAmountVal(e.target.value);
              }}
              className="bg-color border-gray-800 text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block mb-2 font-medium text-gray-100"
            >
              Description
            </label>
            <textarea
              type="text"
              rows="5"
              onChange={(e) => {
                setDesVal(e.target.value);
              }}
              className="bg-color border-gray-800 text-gray-100 text-sm rounded-lg w-full p-2.5"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-color border-gray-800 text-gray-100 text-sm rounded-lg w-full p-2.5"
          >
            Add Income
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default Expenses;
