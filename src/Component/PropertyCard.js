import React from "react";
import "./PropertyCard.css"
function PropertyCard({ card }) {
    console.log("card",card);
    
    return (
      <div className="offer-form">
        <div>
     <button className="btn_agent">Call Agent</button>
     <button className="ml-5 btn_view">View Listing Online</button>
     </div>
     <p className="mb-5 mt-5">{card.property}</p>
     <hr/>
        <form>
           
          <label className="label_css" htmlFor="name">OFFER EXPIRATION DATE</label>
          <br/>
          <input className="input_css" type="text"/><br/>
        
          <div class="row">
    <div class="col">
      <div class="form-group">
        <label className="label_css">OFFER AMOUNT ($)
(OPTIONAL)</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label className="label_css">% OF LIST PRICE
(OPTIONAL)</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

   

    <div class="col">
     
    </div>

    <div class="col">
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label className="label_css">ESCROW DEPOSIT</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label className="label_css">INSPECTION PERIOD</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

   

    <div class="col">
    <div class="form-group">
        <label className="label_css">CLOSING DATE</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

    <div class="col">
    </div>
  </div>
  <div class="form-group">
        <label className="label_css">OTHER PERSON PROPERTY ITEMS INCLUDED
(OPTIONAL)</label><br/>
        <input className="input_css" type="text"/>
      </div>
      <div class="form-group">
        <label className="label_css">TERMS
(OPTIONAL)</label><br/>
        <input className="input_css" type="text"/>
      </div>

  <div class="row">
    <div class="col">
      <div class="form-group">
        <label className="label_css">AGENT#1 NAME</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

    <div class="col">
      <div class="form-group">
        <label className="label_css">AGENT #1 EMAIL</label>
        <input className="input_css" type="text"/>
      </div>
    </div>

   

    <div class="col">
     
    </div>

    <div class="col">
    </div>
  </div>
  
    <button className="send_offer">Send Offer</button>
  
        </form>
      </div>
    );
  }
  
export default PropertyCard;
