import React, { useState } from "react";
import "./Modal.css";
import heart from "../Assets/heart.png";
import world from "../Assets/world.png";
import mail from "../Assets/email.png";
import agent from "../Assets/business-man.png";
import chat from "../Assets/bubble-chat.png";
import PropertyCard from "./PropertyCard";

function Modal({ card, cards }) {
  const [isModalOpena, setIsModalOpena] = useState(false);
  const [selectedCard1, setSelectedCard1] = useState(null);

  const handleOpenModal = (cardId) => {
    const selectedCard = cards.find((card) => card.id === cardId);
    setSelectedCard1(selectedCard);
    setIsModalOpena(true);
  };

  const handleCloseModal = () => {
    setSelectedCard1(null);
    setIsModalOpena(false);
  };
  return (
    <div>
      <div className="property_head">{card.property}</div>
      <hr />
      <div className="d-flex flex-row container">
        <button className="first_btn">
          <img src={heart} className="icon_button" />
          Save To Bucket
        </button>
        <button className="first_btn1">
          {" "}
          <img src={world} className="icon_button" />
          Viewing Listing Online
        </button>
        <button className="first_btn2" onClick={() => handleOpenModal(card.id)}>
          {" "}
          <img src={mail} className="icon_button" />
          Send Single Offer
        </button>
        <button className="first_btn2">
          {" "}
          <img src={agent} className="icon_button" />
          Add Agent To CRM
        </button>
        <button className="first_btn2">
          {" "}
          <img src={chat} className="icon_button" /> Start AI Auto SMS
        </button>
      </div>
      <div className={`modal1 ${isModalOpena ? "open" : ""}`}>
        {/* Modal content */}
        <div>
          <button onClick={handleCloseModal} className="cross_btn">
            X
          </button>
          {selectedCard1 && <PropertyCard card={selectedCard1} />}
        </div>
      </div>

      <div className="row d-flex flex-row justify-content-around">
        <div className="col-6">
          <div>
            <img
              src={card.image}
              alt="property"
              className="mt-5 mb-3 w-50 h-50"
            />
            <div>
              <div className="row">
                <div className="col-6">
                  <span className="below_piccss">MLS AGENT NAME:</span>
                  <br />
                  <span className="below_piccss">{card.bedroom}</span> <br />
                  <span className="below_piccss">MLS AGENT PHONE:</span>
                  <br />
                  <span className="below_piccss">{card.bedroom}</span> <br />
                  <span className="below_piccss">MLS AGENT E-MAIL:</span>
                  <br />
                  <span className="below_piccss">{card.bedroom}</span>
                </div>
                <div className="col-6">
                  <span className="below_piccss">OWNER 1 FULL NAME</span>
                  <br />
                  <span className="below_piccss">{card.bedroom}</span> <br />
                  <span className="below_piccss">OWNER 2 FULL NAME</span>
                  <br />
                  <span className="below_piccss">{card.bedroom}</span> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row mt-5">
            <div className="col-6">
              <p className="propert_financial">Property Detail</p>
              <span className="below_piccss">COUNTY</span>
              <br />
              <span className="below_piccss1">{card.bedroom}</span>
              <br />
              <span className="below_piccss">PROPERTY TYPE</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">YEAR BUILT</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">BEDROOMS</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">TOTAL BATHROOMS</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">BUILDING SQFT</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">LOT SIZE SQFT</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">VACANT</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
            </div>
            <div className="col-6">
              <p className="propert_financial">Financials</p>
              <span className="below_piccss">LIST PRICE</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">ESTVALUE</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">EST. EQUITY</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">VALUE SPREAD</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">LOAN 1 RATE</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">
                EST. REMAINING BALANCE OF OPEN LOANS
              </span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">EST. TOTAL MONTHLY PAYMENTS</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">LOAN 1 TYPE</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
              <span className="below_piccss">ESTIMATED MONTHLY RENT</span>
              <br />
              <span className="below_piccss">{card.bedroom}</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
