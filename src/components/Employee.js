import { useState } from "react";

function Employee({ employee }) {
  const { image, name, bio, quote, title, location } = employee;

  const [showBio, setShowBio] = useState(true);

  function handleClick() {
    setShowBio((prevState) => !prevState);
    // setShowBio(!showBio);
  }
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={image}
          alt={"RENDER PERSON NAME"}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{showBio ? bio : quote}</p>
          <div className="card__detail">
            <p>{title}</p>
            <p>{location === "Scranton" ? "Electric City" : "elsewhere"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Employee;

// conditionally render whether or not the employee's location is Scranton or elsewhere. if location is "Scranton" display "Electric City" if not display "elsewhere"
