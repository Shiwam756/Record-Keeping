import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const changeData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  const removeData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <Button onClick={changeData} variant="contained" color="success">
            <AddBoxIcon />
          </Button>
        </Stack>
      </div>
      <div className="data_items">
        <div className="data">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((currentElement, index) => {
          return (
            <div className="data fields" key={index}>
              <h4>{currentElement.name}</h4>
              <h4>{currentElement.email}</h4>
              <Button onClick={removeData} variant="contained" color="error">
                <HighlightOffIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
