/*eslint-disable*/
import React, {useEffect, useState, useRef, useReducer} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Table from "../../components/Table/Table.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionDescription from "../../views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "../../views/AboutUsPage/Sections/SectionTeam.js";

import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

import finns from "../../assets/generated/finn-descriptions.json";



const useStyles = theme => (aboutUsStyle);


class AboutUsPage extends React.Component {
    constructor(props) {
        super(props);


        this.finnsCount = finns.length;
        this.finnsData = new Array(this.finnsCount);
        this.previousCount = 0;
        this.props.changeCounter = 0;

        this.displayFinns(this.previousCount);
        this.startTimer();
    }

    displayFinns(count) {
        for(let i = 0; i < this.finnsCount; i++) {
            this.finnsData[i] = [];
            if(i < count) {
                this.finnsData[i][0] = finns[i].id;
                this.finnsData[i][1] = finns[i].name;
                this.finnsData[i][2] = finns[i].setting;
                this.finnsData[i][3] = finns[i].handitem;
                this.finnsData[i][4] = finns[i].glasses;
                this.finnsData[i][5] = finns[i].hat;
                this.finnsData[i][6] = finns[i].says;
                this.finnsData[i][7] = finns[i].moose;
                this.finnsData[i][8] = finns[i].northernlights;
                this.finnsData[i][9] = <a href={"https://friendlyfinns.manges.fi/finn/" + finns[i].uuid} target="_blank">View this Finn</a>;
            }
            else {
                this.finnsData[i][0] = finns[i].id;
                this.finnsData[i][1] = "-";
                this.finnsData[i][2] = "-";
                this.finnsData[i][3] = "-";
                this.finnsData[i][4] = "-";
                this.finnsData[i][5] = "-";
                this.finnsData[i][6] = "-";
                this.finnsData[i][7] = "-";
                this.finnsData[i][8] = "-";
                this.finnsData[i][9] = "-";
            }
        }
    }

    startTimer() {
        window.setInterval(() => {
            let count = this.props.availableCounter.counter;
            if(this.previousCount < count) {
                this.previousCount = count;
                this.props.changeCounter++;
                this.displayFinns(this.previousCount);
                this.forceUpdate();
            }
        }, 500);
    }



    render()
    {
        const {classes} = this.props;
        return (
            <div>
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
                    <div id={"sectionsContainer"} className={classes.container} style={{"width":"unset"}}>
                        <SectionDescription />
                    </div>
                    <div id={"finnsCollectionContainer-" + this.props.changeCounter} className={classes.container} style={{"width":"unset", "padding-bottom":"30px"}}>
                        <Table
                            tableHead={[
                                "#",
                                "Name",
                                "Setting",
                                "Accessory",
                                "Glasses",
                                "Headwear",
                                "Says",
                                "Moose",
                                "Northern lights",
                                "Link"
                            ]}
                            tableData={this.finnsData}
                            customCellClasses={[
                                classes.textCenter,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                            ]}
                            customHeadCellClasses={[
                                classes.textCenter,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                                classes.textRight,
                            ]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(useStyles)(AboutUsPage);
