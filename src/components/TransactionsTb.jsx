function TransactionTable({ transactions }) {
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
        {transactions.map((list, index) => (
          <tr key={index}>
            <td>{list.Date}</td>
            <td>{list.Description}</td>
            <td>{list.Category}</td>
            <td>{list.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
