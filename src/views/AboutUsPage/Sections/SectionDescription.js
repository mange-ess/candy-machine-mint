import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";
import samplesImg from "../../../assets/img/samples.png";
const useStyles = makeStyles(descriptionStyle);



export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
          <GridItem
              md={12}
              sm={12}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
              style={{marginBottom:"2rem"}}
          >
              <span><a href={"https://discord.gg/w5uHQSws"}>Discord</a> - <a href={"https://twitter.com/FriendlyFinns"}>Twitter</a></span>
          </GridItem>
          <GridItem
              md={12}
              sm={12}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >
              <img src={samplesImg} style={{maxHeight:"40vh", maxWidth:"80%"}}></img>
          </GridItem>
        <GridItem
          md={12}
          sm={12}
          xs={12}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
            <h2 className={classes.description} style={{color:"black"}}>
              FAQ about the Friendly Finns
            </h2>
        </GridItem>

          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

            <h3 className={classes.description} style={{color:"black"}}>
              What is the idea behind Friendly Finns?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
              The idea to make a set of NFTs about Finnish people came about in semi-heavily intoxicated state,
                in a sauna... Do we need to say any more? :D
            </p>
            <p className={classes.description} style={{color:"black"}}>
                The idea was to publish some artwork that depicts typical Finnish culture and way-of-living in a somewhat cartoonish manner.
                Although Finland is a relatively small country, some aspects of Finnish life such as sauna, nature and alcohol drinking are fairly
                well associated with Finns. This is reflected in the artwork (if it can really be called "art" is in the eye of the beholder).
            </p>
          </GridItem>
          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

            <h3 className={classes.description} style={{color:"black"}}>
                What am I getting if I buy a Friendly Finn NFT?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                Each Friendly Finn has a unique Finnish name and a unique portrait. The NFT metadata
              comes with a link to the website where the Finn is described.
            </p>
            <p className={classes.description} style={{color:"black"}}>A holder of a Friendly Finn NFT, who visits Finland for tourism, is encouraged to contact the
              creators via email (nft [at] manges.fi) and we will be happy to meet up with you and be your personal
                guide for a day. We will call you by your NFt's name and we won't let you go to sleep until you have learnt to order a drink in Finnish.
            </p>
            <p className={classes.description} style={{color:"black"}}>You will also get access to a unique piece of artwork to make your family and friends envious. We
              do recommend you to learn the pronunciation of your character's name, to further impress them.
            </p>
        </GridItem>
          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

              <h3 className={classes.description} style={{color:"black"}}>
                  Are there rare features in the NFTs?
              </h3>
              <p className={classes.description} style={{color:"black"}}>
                  Yes there are. You might see northern lights, or a moose. Possibly even both at the same time. You might see a sad Finnish man with tears in his eyes. Some of the Friendly Finns even say something.

              </p>
          </GridItem>
          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

            <h3 className={classes.description} style={{color:"black"}}>
                Are you donating to any charities?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                Yes, after we deduct all the beers, coffee and digital ink and give Mom and Pop a little something for their encouragement,
                we will donate 20% of the proceeds to charities caring for children and families in need, such as <a href="https://www.mll.fi/en">The Mannerheim League of Children Welfare</a>, <a href="https://kummit.fi">Lastenklinikoiden Kummit Ry</a> (in Finnish only), <a href="https://hopeyhdistys.fi">Hope Ry</a> (in Finnish only) and <a href="https://www.projectliv.fi/en/">Project LIV</a>.
            </p>
              <p>
                Some of the rest will probably be spent on distilling (alcohol-related pun intended) the next ideas for NFTs.
            </p>
            </GridItem>
          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

            <h3 className={classes.description} style={{color:"black"}}>
                When and how was the NFT collection released?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                The collection was released via a Candy Machine Mint starting November 12th, 2021 at 7.00 PM EEST (5.00 PM UTC).
            </p>
          </GridItem>
          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

            <h3 className={classes.description} style={{color:"black"}}>
                What is/was the original price of a Friendly Finn?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                The mint price was 0.20 SOL.
            </p>
          </GridItem>
          <GridItem
              md={6}
              sm={6}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >

            <h3 className={classes.description} style={{color:"black"}}>
                How many Friendly Finn NFTs are there?
            </h3>
            <p className={classes.description} style={{color:"black"}}>
                There are 103 unique Friendly Finns. Why 103? Because it's a prime number. In Finnish, something which is 'priima' is excellent.
                On top of that, 103 is the age of the nation of Finland (in years) at the time of this collection's release.
            </p>

        </GridItem>
          <GridItem
              md={12}
              sm={12}
              xs={12}
              className={classNames(classes.mrAuto, classes.mlAuto)}
          >
          <h2 className={classes.description} style={{color:"black"}}>
              List of Friendly Finns
          </h2>
          <p className={classes.description} style={{color:"black"}}>
              Below is a list of all the Friendly Finns. Log in with your wallet to reveal the list. Finns which have not
              been minted yet are not displayed.
          </p>
          </GridItem>
      </GridContainer>
    </div>
  );
}
