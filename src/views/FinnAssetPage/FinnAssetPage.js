import React from "react";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import classNames from "classnames";
import FinnDescription from "../FinnAssetPage/Sections/FinnDescription";

import { useParams } from 'react-router-dom'
import data from "../../assets/generated/finn-descriptions.json";
import {makeStyles} from "@material-ui/core";
import aboutUsStyle from "../../assets/jss/material-kit-pro-react/views/aboutUsStyle";


const useStyles = makeStyles(aboutUsStyle);


export default function FinnAssetPage() {
    const { uuid } = useParams();

    //console.log("Accessing FinnAssetPage with ID: " + id);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });

    const classes = useStyles();

    let assetData = null;


    let thousands = uuid[5];
    let hundreds = uuid[11];
    let tens = uuid[28];
    let ones = uuid[31];

    let id = parseInt(thousands + hundreds + tens + ones);

    //console.log("Data length: " + data.length);

    for(let i = 0; i < data.length; i++) {
        let insp = data[i];
        //console.log(insp);
        // Don't do strict conversion here
        if(insp.id == id) {
            assetData = insp;
            break;
        }
    }

    //console.log(assetData);

    let foundId = "";
    let title = "";
    let description = "";
    //let arweave_image = "";

    if(assetData === null) {
        title = "Fictional Finn";
        description = "We're sorry, it seems this Finn is fictional (does not exist).";
        //arweave_image = "";
    }
    else {
        foundId = assetData.id;
        title = assetData.name;
        description = assetData.description;
        //arweave_image = assetData.arweave;
    }

    return (
        <div>
            <Parallax
                image={require("../../assets/img/northern_lights.jpg").default}
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
                            <h1 className={classes.title}>{title}</h1>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div id={"sectionsContainer"} className={classes.container} style={{"width":"unset"}}>
                    <FinnDescription finnId={foundId} description={description}/>
                </div>
            </div>
        </div>
    );
}
