import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function FinnDescription(props) {
  const classes = useStyles();

  let id = props.finnId;
  let description = props.description;
  //console.log(description);

    let img = require("../../../assets/generated/"+id+".png");

  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
            <img src={img.default} style={{ maxWidth: "50%", borderRadius: "10%", boxShadow:"5px 10px 18px #888888"}}/>

        </GridItem>
          <GridItem
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >
              {description.map(data => <p style={{color:"black"}}>{data}</p>)}

          </GridItem>
      </GridContainer>
    </div>
  );
}
