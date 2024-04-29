function Form() {
  return (
    <div className="row border" style={{ display: "flex" }}>
      <div className="col-3">
        <input type="date" style={{ marginRight: "10px" }} />
      </div>
      <div className="col-3">
        <input
          type="text"
          placeholder="Description"
          style={{ marginRight: "10px" }}
        />
      </div>
      <div className="col-3">
        <input
          type="text"
          placeholder="Category"
          style={{ marginRight: "10px" }}
        />
      </div>
      <div className="col-3">
        <input type="text" placeholder="Amount" />
      </div>
    </div>
  );
}

export default Form;
