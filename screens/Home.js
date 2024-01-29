import React from "react";
import "../styles/home.css";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <div className="homediv">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.techwar.gr/wp-content/uploads/2023/11/%CE%94%CE%B9%CE%AD%CF%81%CF%81%CE%B5%CF%85%CF%83%CE%B5-%CF%84%CE%BF-%CE%AD%CF%84%CE%BF%CF%82-%CE%BA%CF%85%CE%BA%CE%BB%CE%BF%CF%86%CE%BF%CF%81%CE%AF%CE%B1%CF%82-%CF%84%CF%89%CE%BD-%CE%B5%CF%80%CF%8C%CE%BC%CE%B5%CE%BD%CF%89%CE%BD-%CF%84%CE%AF%CF%84%CE%BB%CF%89%CE%BD-%CE%B1%CF%80%CF%8C-%CE%B4%CF%85%CE%BF.jpg"
                class="d-block w-100"
                alt="first"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://4kwallpapers.com/images/wallpapers/elden-ring-2022-games-pc-games-playstation-4-xbox-series-x-3840x2160-7474.jpg"
                class="d-block w-100"
                alt="second"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.psu.com/wp/wp-content/uploads/2020/10/horizon-forbidden-west-ps4-ps5-wallpapers-06.jpg"
                class="d-block w-100"
                alt="third"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div>
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
          <div className="displaytextuncharted">
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
            <button className="unchartedbutton">Find out more</button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
