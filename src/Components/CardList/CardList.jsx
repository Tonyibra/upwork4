import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import "./CardList.scss";
export const CardList = ({ countrySearch }) => {
  const profiles = useSelector(
    (state) => state.data.data?.profiles?.[1].profiles
  );
  const countriesProfile = useSelector((state) => state.data.data?.profiles);
  return (
    <div className="cardListContainer">
      {!countrySearch ? (
        <>
          {profiles?.map(
            ({
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
            }) => (
              <Card
                name={name}
                city={city}
                country={country}
                about={about}
                main_photo_link={main_photo_link}
                height={height}
                age={age}
                vip={vip}
                photo_verified={photo_verified}
                premium={premium}
                key={listing_id}
              />
            )
          )}
        </>
      ) : (
        <>
          {countriesProfile?.map(
            ({
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
            }) => (
              <Card
                name={name}
                city={city}
                country={country}
                about={about}
                main_photo_link={main_photo_link}
                height={height}
                age={age}
                vip={vip}
                photo_verified={photo_verified}
                premium={premium}
                key={listing_id}
              />
            )
          )}
        </>
      )}
    </div>
  );
};
