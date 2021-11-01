/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionDescription from "../../views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "../../views/AboutUsPage/Sections/SectionTeam.js";

import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
        {/*<Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />*/}
      <Parallax
        image={require("../../assets/img/sauna.jpg").default}
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Friendly Finns</h1>
              <h4>
                Each Friendly Finn NFT is a virtual resident of Finland with a unique name, portrait and a description of his hobbies.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div id={"sectionsContainer"} className={classes.container}>
          <SectionDescription />
          <SectionTeam />
        </div>
      </div>
    </div>
  );
}
