import React from "react";
import clock from "../assets/clock.svg";
import { GiCoffeeCup } from "react-icons/gi";
import { SiIfixit } from "react-icons/si";

const NoData = (props) => {
   return (
      <section className="dashboard__section">
         {(() => {
            switch (props.code) {
               case 401:
                  return (
                     <div className="section__center">
                        <h2>
                           {" "}
                           Oh, no! <SiIfixit className="nodata__icon" />
                        </h2>
                        <p>We don't have permissions, no access code? </p>
                     </div>
                  );
               case 409:
                  return (
                     <div className="section__center">
                        <h2> Whoopsie! </h2>
                        <p>
                           We executed too many requests, let's go for a
                           coffee... <GiCoffeeCup className="nodata__icon" />
                        </p>
                     </div>
                  );
               default:
                  return (
                     <div className="dashboard__onload--data">
                        <div className="dashboard__section--img">
                           <img
                              src={clock}
                              className="dashboard__img--svg"
                              alt="dashboard"
                           ></img>
                        </div>
                        <div className="dashboard__text--header">
                           <div className="underline"></div>
                           <h1>Loading data...</h1>
                           <p>We are processing the data, please hold on!</p>
                        </div>
                     </div>
                  );
            }
         })()}
      </section>
   );
};

export default NoData;
