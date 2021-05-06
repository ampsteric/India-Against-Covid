import React, { Component } from "react";
import Res1 from "./Resources/Res1/Index";
import Res2 from "./Resources/Res2/Index";
import Res3 from "./Resources/Res3/Index";
import Res4 from "./Resources/Res4/Index";
import Res5 from "./Resources/Res5/Index";
import Res6 from "./Resources/Res6/Index";
import Res7 from "./Resources/Res7/Index";
import Res8 from "./Resources/Res8/Index";
import Res9 from "./Resources/Res9/Index";
import Res10 from "./Resources/Res10/Index";
import Res11 from "./Resources/Res11/Index";
import Res12 from "./Resources/Res12/Index";
import Res13 from "./Resources/Res13/Index";
import Res14 from "./Resources/Res14/Index";
import Res15 from "./Resources/Res15/Index";
import Res16 from "./Resources/Res16/Index";
import Res17 from "./Resources/Res17/Index";
import Res18 from "./Resources/Res18/Index";
import Res19 from "./Resources/Res19/Index";
import Res20 from "./Resources/Res20/Index";
import Res21 from "./Resources/Res21/Index";
import Res22 from "./Resources/Res22/Index";
import Res23 from "./Resources/Res23/Index";
import Res24 from "./Resources/Res24/Index";
import Res25 from "./Resources/Res25/Index";
import Res26 from "./Resources/Res26/Index";
import Res27 from "./Resources/Res27/Index";
import Res28 from "./Resources/Res28/Index";
import Res29 from "./Resources/Res29/Index";
import MuiAlert from "@material-ui/lab/Alert";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="https://drive.google.com/drive/folders/17CoIr8VxLaP08Ff8eLOZ5vxwLtVInNxO?usp=sharing">
          {" "}
          {/* <div
            className="alert alert-success"
            role="alert"
            style={{ textAlign: "center" }}
          > */}
          <Alert style={{ textAlign: "center" }} severity="warning">
            {" "}
            Click to Visit the Google drive for Photos related to Covid
            Resources. !
          </Alert>
          {/* </div> */}
        </a>
        <div className="div-wrapper">
          <Res1 />
        </div>{" "}
        <div className="div-wrapper">
          <Res2 />
        </div>{" "}
        <div className="div-wrapper">
          <Res3 />
        </div>{" "}
        <div className="div-wrapper">
          <Res4 />
        </div>{" "}
        <div className="div-wrapper">
          <Res5 />
        </div>{" "}
        <div className="div-wrapper">
          <Res6 />
        </div>{" "}
        <div className="div-wrapper">
          <Res7 />
        </div>{" "}
        <div className="div-wrapper">
          <Res8 />
        </div>{" "}
        <div className="div-wrapper">
          <Res9 />
        </div>{" "}
        <div className="div-wrapper">
          <Res10 />
        </div>
        <div className="div-wrapper">
          <Res11 />
        </div>
        <div className="div-wrapper">
          <Res12 />
        </div>
        <div className="div-wrapper">
          <Res13 />
        </div>
        <div className="div-wrapper">
          <Res14 />
        </div>
        <div className="div-wrapper">
          <Res15 />
        </div>
        <div className="div-wrapper">
          <Res16 />
        </div>
        <div className="div-wrapper">
          <Res17 />
        </div>
        <div className="div-wrapper">
          <Res18 />
        </div>
        <div className="div-wrapper">
          <Res19 />
        </div>
        <div className="div-wrapper">
          <Res20 />
        </div>
        <div className="div-wrapper">
          <Res21 />
        </div>
        <div className="div-wrapper">
          <Res22 />
        </div>
        <div className="div-wrapper">
          <Res23 />
        </div>
        <div className="div-wrapper">
          <Res24 />
        </div>
        <div className="div-wrapper">
          <Res25 />
        </div>
        <div className="div-wrapper">
          <Res26 />
        </div>
        <div className="div-wrapper">
          <Res27 />
        </div>
        <div className="div-wrapper">
          <Res28 />
        </div>
        <div className="div-wrapper">
          <Res29 />
        </div>
        <a href="https://github.com/ampsteric/Covid-resources">
          {" "}
          <div
            className="alert alert-primary"
            role="alert"
            style={{ textAlign: "center" }}
          >
            Click to Visit the Github repository for contributions!
          </div>
        </a>
      </div>
    );
  }
}

export default App;
