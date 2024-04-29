import React, { useState } from "react";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Form from "../src/components/Form";
import Table from "../src/components/Tb";

function App() {
  const [word, setWord] = useState([
    {
      date: "1/1/2001",
      description: "lorem",
      category: "food",
      amount: "sh.400",
    },
    {
      date:"2/3/2006",
      description:"sumn else",
      category:"cars",
      amount:"sh.523", 
    },
    {
      date:"",
      description:"",
      category:"",
      amount:  "",  
    },
    {
      date:"",
      description:"",
      category:"",
      amount:    "",
    }
    
  ]);

  return (
    <div>
      <Header />
      <Search word={word} setWord={setWord} array={word} />
      <Form />
      <Table word={word} />
    </div>
  );
}

export default App;
