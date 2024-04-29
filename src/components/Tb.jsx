import React from "react";
import TransactionTable from "./TransactionTb";

function Table({ word }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <TransactionTable word={word} />
      </tbody>
    </table>
  );
}

export default Table;
