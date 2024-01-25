import React from "react";
import "../styles/home.css";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="homediv">
        <div className="firstimage">
          <div className="row">
            <div className="cards"></div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <p className="phead">Console-exclusive PS5 games</p>
          <p className="phead">from PlayStation Studios</p>
          <div className="image"></div>
        </div>

        <div className="displaytext">
          <p className="spidermanhead">Marvel's Spider-Man 2</p>
          <p className="ptext">
            Spider-Men, Peter Parker and Miles Morales, return for an exciting
            new adventure in the critically acclaimed Marvel’s Spider-Man
            franchise for PS5.
          </p>
          <p className="releasetext">
            <span className="releasespan">Release Date:</span> January 05, 2024
          </p>
          <button className="spidermanbutton">Find out more</button>
        </div>
        <br />
        <br />
        <br />

        <div className="bgcolor">
          <br />
          <div className="row">
            <div className="box col-sm-6 sol-md-4 col-lg-3">
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-ghost-of-tsushima-image-block-02-en-14oct21?$600px--t$"
                className="boximg"
              />
              <p className="boxhead">Ghost of Tsushima Director's Cut</p>
              <p className="boxtext">
                Forge a new path and wage an unconventional war for the freedom
                of Tsushima in this expanded version of the open-world
                action-adventure from Sucker Punch Productions.
              </p>
              <button className="boxbutton1">Find out more</button>
            </div>
            <div className="box col-sm-6 sol-md-4 col-lg-3">
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-demons-souls-image-block-01-en-28jul21?$600px--t$"
                className="boximg"
              />
              <p className="boxhead">Demon's Souls</p>
              <p className="boxtext">
                Entirely rebuilt from the ground up, experience the unsettling
                story and ruthless combat of Demon's Souls.
              </p>
              <button className="boxbutton2">Find out more</button>
            </div>
            <div className="box col-sm-6 sol-md-4 col-lg-3">
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-spiderman-miles-morales-image-block-en-26aug22?$600px--t$"
                className="boximg"
              />
              <p className="boxhead">Marvel's Spider Man Miles Morales</p>
              <p className="boxtext">
                Experience the rise of Miles Morales as the new hero masters
                incredible, explosive new powers to become his own Spider-Man
              </p>
              <button className="boxbutton3">Find out more</button>
            </div>
            <div className="box col-sm-6 sol-md-4 col-lg-3">
              <img
                src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-horizon-forbidden-west-image-block-01-en-28jul21?$600px--t$"
                className="boximg"
              />
              <p className="boxhead">Horizon Forbidden West</p>
              <p className="boxtext">
                Explore distant lands, fight bigger and more aure-inspiring
                machines, and encounter astonishing new tribes as you to the ar
                future, post apocalyptic word of Horizon
              </p>
              <button className="boxbutton4">Find out more</button>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="phead2">More of the best games out now for</p>
          <p className="phead2_2">PS5</p>
          <div className="image2"></div>
        </div>

        <div className="container">
          <div className="displaytext">
            <p className="spidermanhead">UNCHARTED 4: A Thief's End</p>
            <p className="ptext">
              On the hunt for Captain Henry Avery’s long-lost treasure, Sam and
              Drake set off to find Libertalia, the pirate utopia deep in the
              forests of Madagascar. UNCHARTED 4: A Thief’s End takes players on
              a journey around the globe, through jungle isles, far-flung cities
              and snow-capped peaks on the search for Avery’s fortune.
            </p>
            <p className="releasetext">
              <span className="releasespan">Release Date:</span> December 10,
              2023
            </p>
            <button className="spidermanbutton">Find out more</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
