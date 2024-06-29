import React from "react";
import { Link } from "react-router-dom";
import sped_logo from "../assets/sped.png";
import luis_picture from "../assets/luis_correia_gomes.png";
import your_picture from "../assets/luis_correia_gomes.png"; // Replace with your actual picture path
import "./Contributors.css";

const Contributors = () => {
  return (
    <div className="contributors">
      <div className="contributor">
        <div className="contributor-image">
          <img src={luis_picture} alt="Portrait of Luis Pinto" />
        </div>
        <div className="contributor-info">
          <h2>Luis Pinto</h2>
          <p>
            My name is Luís Correia Gomes, and at 30 years old, I am in the
            final year of my residency at Instituto Português de Oncologia de
            Lisboa Francisco Gentil in Portugal and a member of the Young
            Portuguese National Endoscopic Committee (SPED). During the early
            stages of my endoscopic training, I encountered difficulties in
            finding a comprehensive endoscopic atlas. This challenge inspired me
            to start collecting endoscopic images from the beginning of my
            career with the goal of creating a valuable repository to assist all
            endoscopists.
          </p>
        </div>
      </div>

      <div className="contributor">
        <div className="contributor-image">
          <img src={sped_logo} alt="SPED Logo" />
        </div>
        <div className="contributor-info">
          <h2>Portuguese Society of Digestive Endoscopy (SPED)</h2>
          <p>
            The Portuguese Society of Digestive Endoscopy (SPED) is a
            scientific, non-profit, and public utility association that brings
            together doctors and other health professionals who practice or are
            interested in digestive endoscopy in Portugal. Founded in 1979, SPED
            aims to: 
            </p>
            <ul>
            <li>Promote the development of digestive endoscopy in service
            to the health of the Portuguese population;</li>
            <li> Disseminate updated
            ideas, knowledge, and research in the field of digestive endoscopy;
            Stimulate research in digestive endoscopy;</li>
            <li>Pathologistromote national and
            international contacts and exchanges among various professionals
            involved in digestive endoscopy;</li>
            <li> Develop educational activities
            leading to the training and improvement of doctors and other
            technicians in digestive endoscopy;</li>
            <li>Contribute to the establishment
            of training and practice standards in digestive endoscopy.</li>
            </ul>

            SPED is affiliated with the European Society of Gastrointestinal Endoscopy
            and the World Endoscopy Organization. This atlas was created during
            the mandate of Prof. Susana Lopes in the biennium 2023-2025,
            reflecting SPED's commitment to fostering educational resources and
            enhancing the practice of digestive endoscopy.
        </div>
      </div>

      <div className="contributor">
        <div className="contributor-image">
          <img src={your_picture} alt="Your Portrait" />
        </div>
        <div className="contributor-info">
          <h2>Your Name</h2>
          <p>
            Your bio here. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="back-button-container">
        <Link to="/" className="back-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contributors;
