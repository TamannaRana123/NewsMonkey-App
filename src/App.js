import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=6;
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
          <Routes>
            <Route exact path="/"element={<News setProgress={this.setProgress}  key="general" pagesize={6} country={"in"} category={"general"} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="bussiness" pagesize={6} country={"in"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pagesize={6} country={"in"} category={"entertainment"} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pagesize={6} country={"in"} category={"health"} />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pagesize={6} country={"in"} category={"general"} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pagesize={6} country={"in"} category={"science"} />} />
            <Route exact  path="/sports" element={<News setProgress={this.setProgress}  key="sports" pagesize={6} country={"in"} category={"sports"} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pagesize={6} country={"in"} category={"technology"} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
