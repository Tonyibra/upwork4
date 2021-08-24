import "./Card.scss";

const Card = ({
  listing_id,
  name,
  city,
  country,
  about,
  main_photo_link,
  height,
  age,
  vip,
  photo_verified,
  premium,
}) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={main_photo_link} alt="mainImage" />
      </div>
      <div className="cardContent">
        <div className="personalInfo">
          <div className="girlName">
            <span>{name}</span>
          </div>
          <div className="girlLoc">
            <span>
              {city} {country}
            </span>
          </div>
        </div>
        <div className="cardPrice">
          <div className="height">
            <sp an>
              {height} {age}
              <span className="age">Years old</span>
            </sp>
          </div>
          <div className="about">
            <p>{about}</p>
          </div>
        </div>
      </div>
      <div className="cardBadges">
        {vip === 1 && (
          <div className="vip">
            <strong>VIP</strong>
          </div>
        )}
        {photo_verified === 1 && (
          <div className="vip">
            <strong>Verified</strong>
          </div>
        )}
        {premium === 1 && (
          <div className="vip">
            <strong>Premium</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
