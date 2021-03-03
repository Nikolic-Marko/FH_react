import React, { Component } from "react";
import "./AboutHakaton.css";
import slika1 from "./img/slika1.JPG";
import slika2 from "./img/slika2.JPG";
import slika3 from "./img/slika3.JPG";
import slika4 from "./img/slika4.JPG";
import slika5 from "./img/slika5.JPG";
import slika6 from "./img/slika6.JPG";
import slika7 from "./img/slika7.JPG";
import slika8 from "./img/slika8.JPG";
import slika9 from "./img/slika9.JPG";

class AboutHakaton extends Component {
    render() {
        return (
            <div className="aboutHakaton" id="about">
                <div className="leftSide">
                    <img src={slika1} alt="slika sa takmicenja" />
                    <img src={slika2} alt="slika sa takmicenja" />
                    <img src={slika3} alt="slika sa takmicenja" />
                    <img src={slika4} alt="slika sa takmicenja" />
                    <img src={slika5} alt="slika sa takmicenja" />
                    <img src={slika6} alt="slika sa takmicenja" />
                    <img src={slika7} alt="slika sa takmicenja" />
                    <img src={slika8} alt="slika sa takmicenja" />
                    <img src={slika9} alt="slika sa takmicenja" />
                </div>
                <div className="rightSide">
                    <div className="textSection">
                        <h1>O HAKATONU</h1>
                        <p>
                            FON Hakaton je takmičenje u programiranju
                            na kome učesnici imaju 48 časova na raspolaganju da realizuju softversko rešenje
                            na zadatu temu. Odabrani timovi, sastavljeni od po 3 ili 4 člana,
                            imaće jedinstvenu priliku da u realnom okruženju
                            testiraju svoje veštine i znanja i steknu veliko iskustvo
                            koje ističe programere u budućem usavršavanju i napretku u karijeri. 
                            Na putu do osvajanja titule pobednika osmog po redu FON Hakatona, 
                            timovima će pomagati stručnjaci sa ogromnim iskustvom iz oblasti IT-a. 
                            Takmičenje će se ove godine održati od 9. do 11. aprila i to u online okruženju, 
                            preko platforme Google Meet.
                        </p>
                        <br />
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutHakaton;
