// import React, { useState } from "react";
// import "./PropertyComponent.css";
// import stopshop from "../Assets/stopshop_mainlogo.svg";
// import bed from "../Assets/bed.svg";
// import shower from "../Assets/shower.svg";
// import area from "../Assets/area.svg";
// function PropertyComponent() {
//   const [minQuery, setMinQuery] = useState("");
//   const [maxQuery, setMaxQuery] = useState("");
//   const [minbed, setMinbed] = useState("");
//   const [maxbed, setMaxbed] = useState("");
//   const [minshower, setMinshower] = useState("");
//   const [maxshower, setMaxshower] = useState("");
//   const [property, setProperty] = useState("");
//   const cards = [
//     {
//       id: 1,
//       property: "311 S Gomez Ave Apt B Tampa, FL 33609",

//       image: stopshop,
//       bedroom: 12,
//       shower: 6,
//       area: 8008,
//       listprice: 500,
//       est: 4900,
//     },
//     {
//       id: 2,
//       property: "162 S Gomez Ave Apt B Tampa, FL 33609",

//       image: stopshop,
//       bedroom: 2,
//       shower: 16,
//       area: 108,
//       listprice: 500,
//       est: 4900,
//     },
//     {
//       id: 3,
//       property: "160 S Gomez Ave Apt B Tampa, FL 33609",

//       image: stopshop,
//       bedroom: 22,
//       shower: 26,
//       area: 8,
//       listprice: 500,
//       est: 4900,
//     },
//     {
//       id: 4,
//       property: "311 S Gomez Ave Apt B Tampa, FL 33609",

//       image: stopshop,
//       bedroom: 32,
//       shower: 36,
//       area: 800,
//       listprice: 500,
//       est: 4900,
//     },
//   ];

//   const handleMinInputChange = (event) => {
//     setMinQuery(event.target.value);
//   };

//   const handleMaxInputChange = (event) => {
//     setMaxQuery(event.target.value);
//   };

//   const handleMinBed = (event) => {
//     setMinbed(event.target.value);
//   };

//   const handleMaxBed = (event) => {
//     setMaxbed(event.target.value);
//   };
//   const handleMinShower = (event) => {
//     setMinshower(event.target.value);
//   };

//   const handleMaxShower = (event) => {
//     setMaxshower(event.target.value);
//   };
//   const handleProperty = (event) => {
//     setProperty(event.target.value);
//   };

//   //   const filteredCards = cards.filter(
//   //     (card) =>
//   //       //   (card.property.toLowerCase().includes(minQuery.toLowerCase()) ||
//   //       //     card.content.toLowerCase().includes(minQuery.toLowerCase())) &&
//   //       //   (card.property.toLowerCase().includes(maxQuery.toLowerCase()) ||
//   //       //     card.content.toLowerCase().includes(maxQuery.toLowerCase()))
//   //       card.area.toLowerCase().includes(minQuery.toLowerCase()) &&
//   //       card.area.toLowerCase().includes(maxQuery.toLowerCase()) &&
//   //       parseInt(card.area) < parseInt(minQuery)
//   //   );
//   const filteredCards = cards.filter(
//     (card) =>
//       (maxQuery === "" || parseInt(card.area) >= parseInt(maxQuery)) &&
//       (minQuery === "" || parseInt(card.area) <= parseInt(minQuery)) &&
//       (maxbed === "" || parseInt(card.bedroom) >= parseInt(maxbed)) &&
//       (minbed === "" || parseInt(card.bedroom) <= parseInt(minbed)) &&
//       (maxshower === "" || parseInt(card.shower) >= parseInt(maxshower)) &&
//       (minshower === "" || parseInt(card.shower) <= parseInt(minshower)) &&
//       card.property.toLowerCase().includes(property.toLowerCase())
//   );

//   return (
//     <div className="property_mainn">
//       <div className="property_main">
//         <div className="form-group">
//           <label htmlFor="minInput" className="email_address">
//             BUILDING SQ FT (MIN)
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="exampleInputEmail1"
//             value={minQuery}
//             onChange={handleMinInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="maxInput" className="email_address">
//             BUILDING SQ FT (MAX)
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="exampleInputEmail1"
//             value={maxQuery}
//             onChange={handleMaxInputChange}
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputEmail1" className="email_address">
//             BEDROOMS (MIN)
//           </label>
//           <input
//             type="number"
//             class="form-control"
//             id="exampleInputEmail1"
//             value={minbed}
//             onChange={handleMinBed}
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1" className="email_address">
//             BEDROOMS (MAX)
//           </label>
//           <input
//             type="number"
//             class="form-control"
//             id="exampleInputPassword1"
//             value={maxbed}
//             onChange={handleMaxBed}
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputEmail1" className="email_address">
//             BATHROOMS (MIN)
//           </label>
//           <input
//             type="number"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             value={minshower}
//             onChange={handleMinShower}
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1" className="email_address">
//             BATHROOMS (MAX)
//           </label>
//           <input
//             type="number"
//             class="form-control"
//             id="exampleInputPassword1"
//             value={maxshower}
//             onChange={handleMaxShower}
//           />
//         </div>
//       </div>
//       <div className="property_main">
//         <div class="form-group">
//           <label for="exampleInputEmail1" className="email_address">
//             EQUITY % (MIN)
//           </label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1" className="email_address">
//             EQUITY % (MAX)
//           </label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputEmail1" className="email_address">
//             EQUITY $ (MIN)
//           </label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1" className="email_address">
//             EQUITY $ (MAX)
//           </label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1" className="email_address">
//             MAX INTEREST RATE %
//           </label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//       </div>

//       <div className="property_main">
//         <div className="form-group">
//           <label htmlFor="propertyType" className="email_address">
//             PROPERTY TYPE(OPTIONAL)
//           </label>
//           <select
//             type="text"
//             class="form-control"
//             id="exampleInputPassword1"
//             value=""
//             onChange=""
//           >
//             <option>Select Property Type</option>

//             <option value="house">House</option>
//             <option value="apartment">Apartment</option>
//             <option value="condo">Condo</option>
//             <option value="townhouse">Townhouse</option>
//           </select>
//         </div>

//         <div class="form-group">
//           <label for="exampleInputPassword1" className="email_address">
//             SEARCH ADDRESS
//           </label>
//           <input
//             type="text"
//             class="form-control"
//             id="exampleInputPassword1"
//             value={property}
//             onChange={handleProperty}
//           />
//         </div>
//       </div>
//       <h1>On Market Properties</h1>
//       <div className="App">
//         <div className="card-container">
//           {filteredCards.map((card) => (
//             <div key={card.id} className="card">
//               <img src={card.image} alt="property image" />
//               <div className="circle_content">
//                 <span className="circle_con">
//                   Value Spread
//                   <br />${card.bedroom}
//                 </span>
//               </div>
//               <div className="card_belowmain pt-3">
//                 <strong>Property Address:</strong> <br />{" "}
//                 <span>{card.property}</span>
//                 <div class="d-flex flex-row justify-content-between">
//                   <div class="p-2 ">
//                     <strong>Bedrooms</strong>
//                     <p>
//                       <img src={bed} alt="bed" className="social_icons" />
//                       {card.bedroom}
//                     </p>
//                   </div>
//                   <div class="p-2 ">
//                     <strong>Bathrooms</strong>

//                     <p>
//                       <img src={shower} alt="shower" className="social_icons" />
//                       {card.shower}
//                     </p>
//                   </div>
//                   <div class="p-2 ">
//                     <strong>Building Sqft</strong>

//                     <p>
//                       <img src={area} alt="area" className="social_icons" />
//                       {card.area}
//                     </p>
//                   </div>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                   <p>
//                     <span>
//                       <strong className="social_icons">List Price:</strong>
//                     </span>
//                     ${card.listprice}
//                   </p>
//                   <p>
//                     <span>
//                       <b className="social_icons">Est. Price:</b>
//                     </span>
//                     ${card.est}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PropertyComponent;

import React, { useState } from "react";
import "./PropertyComponent.css";
import stopshop from "../Assets/stopshop_mainlogo.svg";
import bed from "../Assets/bed.svg";
import shower from "../Assets/shower.svg";
import area from "../Assets/area.svg";
import Modal from "./Modal";
import download from "../Assets/download.jpg";
import download1 from "../Assets/download1.jpg";
import download2 from "../Assets/download2.jpg";
import download3 from "../Assets/images.jpg";
function PropertyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  const [minQuery, setMinQuery] = useState("");
  const [maxQuery, setMaxQuery] = useState("");
  const [minbed, setMinbed] = useState("");
  const [maxbed, setMaxbed] = useState("");
  const [minshower, setMinshower] = useState("");
  const [maxshower, setMaxshower] = useState("");
  const [property, setProperty] = useState("");
  const cards = [
    {
      id: 1,
      property: "311 S Gomez Ave Apt B Tampa, FL 33609",

      image: download,
      bedroom: 12,
      shower: 6,
      area: 8008,
      listprice: 500,
      est: 4900,
    },
    {
      id: 2,
      property: "162 S Gomez Ave Apt B Tampa, FL 33609",

      image: download1,
      bedroom: 2,
      shower: 16,
      area: 108,
      listprice: 500,
      est: 4900,
    },
    {
      id: 3,
      property: "160 S Gomez Ave Apt B Tampa, FL 33609",

      image: download2,
      bedroom: 22,
      shower: 26,
      area: 8,
      listprice: 500,
      est: 4900,
    },
    {
      id: 4,
      property: "311 S Gomez Ave Apt B Tampa, FL 33609",

      image: download3,
      bedroom: 32,
      shower: 36,
      area: 800,
      listprice: 500,
      est: 4900,
    },
  ];

  const handleMinInputChange = (event) => {
    setMinQuery(event.target.value);
  };

  const handleMaxInputChange = (event) => {
    setMaxQuery(event.target.value);
  };

  const handleMinBed = (event) => {
    setMinbed(event.target.value);
  };

  const handleMaxBed = (event) => {
    setMaxbed(event.target.value);
  };
  const handleMinShower = (event) => {
    setMinshower(event.target.value);
  };

  const handleMaxShower = (event) => {
    setMaxshower(event.target.value);
  };
  const handleProperty = (event) => {
    setProperty(event.target.value);
  };

  //   const filteredCards = cards.filter(
  //     (card) =>
  //       //   (card.property.toLowerCase().includes(minQuery.toLowerCase()) ||
  //       //     card.content.toLowerCase().includes(minQuery.toLowerCase())) &&
  //       //   (card.property.toLowerCase().includes(maxQuery.toLowerCase()) ||
  //       //     card.content.toLowerCase().includes(maxQuery.toLowerCase()))
  //       card.area.toLowerCase().includes(minQuery.toLowerCase()) &&
  //       card.area.toLowerCase().includes(maxQuery.toLowerCase()) &&
  //       parseInt(card.area) < parseInt(minQuery)
  //   );
  const filteredCards = cards.filter(
    (card) =>
      (maxQuery === "" || parseInt(card.area) >= parseInt(maxQuery)) &&
      (minQuery === "" || parseInt(card.area) <= parseInt(minQuery)) &&
      (maxbed === "" || parseInt(card.bedroom) >= parseInt(maxbed)) &&
      (minbed === "" || parseInt(card.bedroom) <= parseInt(minbed)) &&
      (maxshower === "" || parseInt(card.shower) >= parseInt(maxshower)) &&
      (minshower === "" || parseInt(card.shower) <= parseInt(minshower)) &&
      card.property.toLowerCase().includes(property.toLowerCase())
  );

  return (
    <div className="property_mainn">
      <div className="property_main">
        <div className="form-group">
          <label htmlFor="minInput" className="email_address">
            BUILDING SQ FT (MIN)
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            value={minQuery}
            onChange={handleMinInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxInput" className="email_address">
            BUILDING SQ FT (MAX)
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            value={maxQuery}
            onChange={handleMaxInputChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="email_address">
            BEDROOMS (MIN)
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            value={minbed}
            onChange={handleMinBed}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="email_address">
            BEDROOMS (MAX)
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={maxbed}
            onChange={handleMaxBed}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="email_address">
            BATHROOMS (MIN)
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={minshower}
            onChange={handleMinShower}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="email_address">
            BATHROOMS (MAX)
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={maxshower}
            onChange={handleMaxShower}
          />
        </div>
      </div>
      <div className="property_main">
        <div class="form-group">
          <label for="exampleInputEmail1" className="email_address">
            EQUITY % (MIN)
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="email_address">
            EQUITY % (MAX)
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" className="email_address">
            EQUITY $ (MIN)
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="email_address">
            EQUITY $ (MAX)
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" className="email_address">
            MAX INTEREST RATE %
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>

      <div className="property_main1">
        <div className="form-group sda">
          <label htmlFor="propertyType" className="email_address">
            PROPERTY TYPE(OPTIONAL)
          </label>
          <select
            type="text"
            class="form-control select_type"
            id="exampleInputPassword1"
            value=""
            onChange=""
          >
            <option>Choose</option>

            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>

        <div class="form-group search_addre">
          <label
            for="exampleInputPassword1"
            className="email_address search_label"
          >
            SEARCH ADDRESS
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={property}
            onChange={handleProperty}
          />
        </div>
      </div>
      <h1>On Market Properties</h1>
      <div className="App">
        <div className="card-container">
          {filteredCards.map((card) => (
            <div key={card.id} className="card" onClick={() => openModal(card)}>
              <img
                src={card.image}
                alt="property image"
                className="img_property"
              />
              <div className="circle_content">
                <span className="circle_con">
                  Value Spread
                  <br />
                  <span className="circle_color"> ${card.bedroom}</span>
                </span>
              </div>
              <div className="card_belowmain pt-3">
                <strong>Property Address:</strong> <br />{" "}
                <span>{card.property}</span>
                <div class="d-flex flex-row justify-content-between">
                  <div class="p-2 ">
                    <strong>Bedrooms</strong>
                    <p>
                      <img src={bed} alt="bed" className="social_icons" />
                      {card.bedroom}
                    </p>
                  </div>
                  <div class="p-2 ">
                    <strong>Bathrooms</strong>

                    <p>
                      <img src={shower} alt="shower" className="social_icons" />
                      {card.shower}
                    </p>
                  </div>
                  <div class="p-2 ">
                    <strong>Building Sqft</strong>

                    <p>
                      <img src={area} alt="area" className="social_icons" />
                      {card.area}
                    </p>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <p>
                    <span>
                      <strong className="social_icons">List Price:</strong>
                    </span>
                    ${card.listprice}
                  </p>
                  <p>
                    <span>
                      <b className="social_icons">Est. Price:</b>
                    </span>
                    ${card.est}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content container">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            {selectedCard && <Modal card={selectedCard} cards={cards} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyComponent;
