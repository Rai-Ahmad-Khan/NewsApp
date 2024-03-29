import NavBar from "./components/NavBar";
import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {

  pageSize=15;  
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <NavBar />
          <Routes>
            <Route path="/general" element={<News key ="general" pageSize={ this.pageSize}country={"us"} category={"general"} />} />
            <Route path="/entertainment" element={<News key ="entertainment"pageSize={ this.pageSize}country={"us"} category={"entertainment"} />} />
            <Route path="/health" element={<News key ="health"pageSize={ this.pageSize}country={"us"} category={"health"} />} />
            <Route path="/science" element={<News key ="science"pageSize={ this.pageSize}country={"us"} category={"science"} />} />
            <Route path="/sports" element={<News key ="sports"pageSize={ this.pageSize}country={"us"} category={"sports"} />} />
            <Route path="/technology" element={<News key ="business"pageSize={ this.pageSize}country={"us"} category={"business"} />} />
            <Route path="/business" element={<News key ="technology"pageSize={ this.pageSize}country={"us"} category={"technology"} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

// import React from 'react'

// export default function App() {
//   return (
//     <div>

//     </div>
//   )
// }
