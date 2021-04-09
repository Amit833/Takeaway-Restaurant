import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer>
      <div className="locations">
        <div>
          <h3>CHAMONIX</h3>
          <p>Heures d'ouverture : 12:00-14:30 / 18:30-22:00</p>
          <p>Téléphone : +33 (0)4 50 53 21 99 </p>
          <a href="https://www.google.com/search?q=288+RUE+JOSEPH+VALLOT%2C+CHAMONIX&oq=288+RUE+JOSEPH+VALLOT%2C+CHAMONIX&aqs=chrome..69i57j0.912j0j7&sourceid=chrome&ie=UTF-8#">
            <p>Adresse : 288 RUE JOSEPH VALLOT, CHAMONIX</p>
          </a>
        </div>

        <div>
          <h3>MEGEVE</h3>
          <p>Heures d'ouverture : 12:00-14:30 / 18:30-22:00</p>
          <p>Téléphone : +33 (0)4 50 53 21 99 </p>
          <a href="https://www.google.com/search?q=ROND+POINT+DE+LA+POSTE%2C+74120+MEGEVE&oq=ROND+POINT+DE+LA+POSTE%2C+74120+MEGEVE&aqs=chrome..69i57j33.2062j0j7&sourceid=chrome&ie=UTF-8#">
            <p>Addresse : ROND POINT DE LA POSTE, 74120 MEGEVE </p>
          </a>
        </div>
      </div>

      <div className="icons">
        <FaFacebook className="icon" />
        <SiWhatsapp className="icon" />
        <FiInstagram className="icon" />
      </div>
      <div className="reserved">
        <p>
          &#169;<span>2021 reserved By Amit-Elias-Mami</span>
        </p>
      </div>
    </footer>
  );
};
