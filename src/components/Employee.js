function Employee() {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={"RENDER IMAGE"}
          alt={"RENDER PERSON NAME"}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{"RENDER NAME"}</div>
          <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
          <div className="card__detail">
            <p>{"RENDER JOB TITLE"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Employee;
