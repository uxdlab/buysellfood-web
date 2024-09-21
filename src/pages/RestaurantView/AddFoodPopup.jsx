import React, { useState } from "react";
import "./AddFoodPopup.css";
import { Link } from "react-router-dom";
import redcircle from "../../assets/redcircle.png";
import greencircle from "../../assets/greencircle.png";

const AddFoodPopup = ({ closePopup }) => {
  const [activeButton, setActiveButton] = useState("btn1");

  const [isVisibleCustomizeItem, setisVisibleCustomizeItem] = useState(false);
  const [isVisibleAddNote, setisVisibleAddNote] = useState(false);
  const [isVisibleCancel, setisVisibleCancel] = useState(true);
  const [isVisibleNote, setisVisibleNote] = useState(false);
  const [isVisibleBtnContainer, setisVisibleBtnContainer] = useState(true);

  const toggleAddbtn = () => {
    setisVisibleAddNote(!isVisibleAddNote);
    setisVisibleCancel(!isVisibleCancel);
    setisVisibleBtnContainer(!isVisibleBtnContainer);
  };

  const addnoteHandler = () => {
    setisVisibleNote(!isVisibleNote);
    setisVisibleAddNote(!isVisibleAddNote);
    setisVisibleBtnContainer(!isVisibleBtnContainer);
  };

  const buttons = [
    { id: "btn1", label: "Small", price: "$513" },
    { id: "btn2", label: "Medium", price: "$613" },
    { id: "btn3", label: "Large", price: "$713" },
    { id: "btn4", label: "Extra Large", price: "$813" },
  ];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    cheese: {},
    chicken: {},
  });

  const handleCheckboxChange = (category, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: !prev[category][option],
      },
    }));
  };
  console.log(selectedOptions);
  return (
    <div className="add-food-popup">
      <div className="food-popup">
        <div className="firstbox">
          <div className="left">
            <p>Pizza Delicious</p>
            <p style={{ color: "gray", fontSize: "14px", fontWeight: "400 " }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              molestias?{" "}
            </p>
          </div>

          <div className="right">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ofjn39gnpkzhkllfishc"
              alt="Pizza"
            />
          </div>
        </div>

        <div className="addnote-container">
          {isVisibleNote && (
            <div className="edit-container add-note-edit-btn">
              <div>
                <button onClick={addnoteHandler}>edit</button>
              </div>
              <div className="para">
                this is Lorem ipsum dolor, fsfasfsadfassit{" "}
              </div>
            </div>
          )}

          {isVisibleAddNote && (
            <div className="write-note">
              <textarea placeholder="write note"> </textarea>{" "}
              <div>
                <div className="addnote-btn-container add-note-edit-btn">
                  <button onClick={addnoteHandler}>Add Note</button>
                  <button onClick={toggleAddbtn}>cancel</button>
                </div>
              </div>
            </div>
          )}

          <div className="add-note-edit-btn">
            {isVisibleCancel && (
              <button onClick={toggleAddbtn}>Add Note</button>
            )}
          </div>
        </div>

        {isVisibleBtnContainer && (
          <div className="btn-container">
            {buttons.map((button) => (
              <div
                className="buttons"
                style={{
                  backgroundColor:
                    activeButton == button.id ? "black" : "white",
                }}
                key={button.id}
              >
                <button
                  style={{
                    backgroundColor:
                      activeButton === button.id ? "black" : "white",
                    color: activeButton === button.id ? "white" : "black",
                  }}
                  onClick={() => handleButtonClick(button.id)}
                >
                  {button.label}
                </button>
                <button
                  onClick={() => handleButtonClick(button.id)}
                  className="button-price"
                >
                  {button.price}
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="secondbox">
          <h2>Customize as per your taste</h2>
          <hr />

          <div className="label-container">
            <p>Say Cheese!</p>
            <div className="label-box">
              {[
                "Double Cheese Slice",
                "Truple Cheese Slice",
                "Loaded Cheese Slice",
              ].map((option, index) => (
                <div className="label" key={`cheese-${index}`}>
                  <label htmlFor={`cheese-${index}`}>
                    <img
                      src={greencircle}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    {option}
                  </label>
                  <p>
                    +$515
                    <input
                      type="checkbox"
                      id={`cheese-${index}`}
                      checked={!!selectedOptions.cheese[option]}
                      onChange={() => handleCheckboxChange("cheese", option)}
                    />
                  </p>
                </div>
              ))}
            </div>

            <p>Extra Chicken Piece!</p>
            <div className="label-box">
              {[
                "Double Chicken Slice",
                "Truple Chicken Slice",
                "Loaded Chicken Slice",
              ].map((option, index) => (
                <div className="label" key={`chicken-${index}`}>
                  <label htmlFor={`chicken-${index}`}>
                    <img
                      src={redcircle}
                      alt=""
                      style={{ marginRight: "10px" }}
                    />
                    {option}
                  </label>
                  <p>
                    +$515
                    <input
                      type="checkbox"
                      id={`chicken-${index}`}
                      checked={!!selectedOptions.chicken[option]}
                      onChange={() => handleCheckboxChange("chicken", option)}
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="thirdbox">
          {isVisibleCustomizeItem && (
            <div className="customize-items">
              {Object.entries(selectedOptions.cheese).map(
                ([option, isSelected]) =>
                  isSelected && <p key={option}>{option},</p>
              )}
              {Object.entries(selectedOptions.chicken).map(
                ([option, isSelected]) =>
                  isSelected && <p key={option}>{option},</p>
              )}
            </div>
          )}
          <div className="customize-container">
            <div className="customize-left">
              <p className="one">$513</p>
              <p
                onClick={() =>
                  setisVisibleCustomizeItem(!isVisibleCustomizeItem)
                }
                className="two"
              >
                View Customize Items
              </p>
            </div>
            <div className="customize-right">
              <button id="close" onClick={closePopup}>
                Close
              </button>
              <Link to="/cart">
                <button>Add item to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodPopup;
