import { useState } from "react";
import "../src/App.css";
import Header from "../src/components/Header";
import Search from "./components/Search";
import Form from "./components/Form";
import TransactionTb from "./components/TransactionsTb";

function App() {
  const list = [
    {
      Date: "2024-12-01",
      Description: "Phone",
      Category: "Electronics",
      Amount: "sh.150",
    },

    {
      Date: "2024-12-02",
      Description: "Hand Bag",
      Category: "Fashion",
      Amount: "sh.130",
    },

    {
      Date: "2024-12-03",
      Description: "Ring",
      Category: "Jewelry",
      Amount: "sh.250",
    },

    {
      Date: "2024-12-04",
      Description: "Chicken",
      Category: "Food",
      Amount: "sh.60",
    },

    {
      Date: "2024-12-05",
      Description: "Steak",
      Category: "Food",
      Amount: "sh.90",
    },

    {
      Date: "2024-12-06",
      Description: "Air pods",
      Category: "Electronics",
      Amount: "sh.100",
    },

    {
      Date: "2024-12-07",
      Description: "Royal Sofa Set",
      Category: "Furniture",
      Amount: "sh.150",
    },
  ];

  const [transactions, setTransactions] = useState(list);

  return (
    <div className="">
      <Header />
      <Search
        transactions={transactions}
        setTransactions={setTransactions}
        list={list}
      />
      <Form transactions={transactions} setTransactions={setTransactions} />
      <TransactionTb
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;

