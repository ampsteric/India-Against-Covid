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
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


class App extends Component {

  render() {
    return (
      <div>
        
        <a href="https://drive.google.com/drive/folders/17CoIr8VxLaP08Ff8eLOZ5vxwLtVInNxO?usp=sharing">
          {" "}
          {/* <div
            className="alert alert-success"
            role="alert"
            style={{ textAlign: "center" }}
          > */}
                <Alert style={{ textAlign: "center" }} severity="warning">            Click to Visit the Google drive for Photos related to Covid Resources.
!</Alert>

          {/* </div> */}
        </a>
        <Res1 />
        <Res2 />
        <Res3 />
        <Res4 />
        <Res5 />
        <Res6 />
        <Res7 />
        <Res8 />
        <Res9 />
        <Res10 />
        <Res11 />
        <Res12 />
        <Res13 />
        <Res14 />
        <Res15 />
        <Res16 />
        <Res17 />
        <Res18 />
        <Res19 />
        <Res20 />
        <Res21 />
        <Res22 />
        <Res23 />
        <Res24 />
        <Res25 />
        <Res26 />
        <Res27 />
        <Res28 />
        <Res29 />
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
