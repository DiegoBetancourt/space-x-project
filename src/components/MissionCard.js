import React from "react";

const cutDetail = (value) => {
  if (value.length > 140) {
    return value.slice(0, 137) + "...";
  } else {
    return value;
  }
};

const MissionCard = (props) => {
  const { mission } = props;
  const details = cutDetail(mission.details);
  return (
    <div className="mission-card">
      <div className="mission-card-top">
        <h3 className="mission-card-title">{mission.title}</h3>
        <div className="mission-number">{mission.flight_number || "-"}</div>
      </div>
      <div>
        <div>{mission.event_date_utc}</div>
        <div>{details}</div>
      </div>
    </div>
  );
};

export default MissionCard;
