import React from "react";

function TransactionTable({ word }) {
  const value = word.map((item, index) => {
    return (
      <tr key={index + 1}>
        <td>{item.date}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
      </tr>
    );
  });

  return <>{value}</>;
}

export default TransactionTable;
