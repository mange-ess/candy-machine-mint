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

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={12}
          sm={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
            <h2 className={classes.description} style={{color:"black"}}>
              FAQ about the Friendly Finns
            </h2>

            <h3 className={classes.description} style={{color:"black"}}>
              What is the idea behind Friendly Finns?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
              The idea to make a set of NFTs about Finnish people came about in semi-heavily intoxicated state,
                in a sauna... Do we need to say any more? :D
            </p>

            <h3 className={classes.description} style={{color:"black"}}>
                What am I getting when I buy a Friendly Finn NFT?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                Each Friendly Finn has a unique Finnish name and a unique portrait. The NFT metadata
              comes with a link to the website where the Finn is described, with links to further information
              about Finland, real Finns and their way of life.
            </p>
            <p className={classes.description} style={{color:"black"}}>A holder of a Friendly Finn NFT, who visits Finland for tourism, is encouraged to contact the
              creators via email (nft [at] manges.fi) and we will be happy to meet up with you and be your personal
                guide for a day. And we won't let you go to sleep until you have learnt to order a drink in Finnish.
            </p>
            <p className={classes.description} style={{color:"black"}}>You will also get access to a unique piece of artwork to make your family and friends envious. We
              do recommend you to learn the pronunciation of your character's name, to further impress them.
            </p>

            <h3 className={classes.description} style={{color:"black"}}>
                Are you donating to any charities?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                Yes, we will donate 10% of net proceeds to charities caring for children and families in need, such as The
              Mannerheim League of Children Welfare, Lastenklinikoiden Kummit Ry, Hope Ry and Project LIV.

            </p>

            <h3 className={classes.description} style={{color:"black"}}>
                When is/was the mint?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                November 8th, 2021 at 6.00 PM EEST.
            </p>

            <h3 className={classes.description} style={{color:"black"}}>
                What is/was the original price of a Friendly Finn?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                The original price was 0.25 SOL.
            </p>

            <h3 className={classes.description} style={{color:"black"}}>
                How many Friendly Finn NFTs are there?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                There are 500 unique Friendly Finns.
            </p>

        </GridItem>
      </GridContainer>
    </div>
  );
}
