import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function Details() {
  const location = useLocation();
  const show = location.state.show;
  const summary = show?.summary;
  console.log(show);
  const navigate = useNavigate();
  const temp = document.createElement("p");
  temp.innerHTML = summary;
  return (
    <ShowDetails>
      <Image onClick={() => (window.location.href = show.officialSite)}>
        <img
          src={show.image?.original}
          alt={show.name}
          style={{ width: "100%", height: "100vh" }}
        />
        <PlayCircle>
          <PlayCircleOutlineIcon style={playCircle} />
        </PlayCircle>
      </Image>
      <Description>
        <Title>{show.name}</Title>
        <Line />
        <Summary id="summary">
          <span>Description</span> <br />
          {temp.textContent}
        </Summary>
        <Info>
          {show?.language && <p>Language : {show?.language}</p>}
          {show.rating.average && (
            <p>Rating : {show.rating.average ? show.rating.average : 6}</p>
          )}
          {show?.network?.name && <p>Studios : {show?.network?.name}</p>}
          {show?.premiered && <p>Premiered : {show?.premiered}</p>}
          {show?.schedule?.days && show?.schedule?.time && (
            <p>
              Aired Timing : {show.schedule.days + ", " + show.schedule.time}
            </p>
          )}
          {show?.runtime && <p>Duration : {show?.runtime + " min."}</p>}
          {show?.status && <p>Status : {show.status}</p>}
          {show?.genres && <p>Genre : {show.genres.join(", ")}</p>}
        </Info>
        <Button
          onClick={() => navigate("/bookTicket", { state: { show: show } })}
        >
          Book Ticket
        </Button>
      </Description>
    </ShowDetails>
  );
}

export default Details;

const PlayCircle = styled.div`
  ${"" /* z-index: 1; */}
  display: none;
`;

const Image = styled.div`
  flex-basis: 40%;

  &:hover img {
    opacity: 0.3;
  }
  &:hover ${PlayCircle} {
    display: block;
    opacity: 1;
  }
  cursor: pointer;
`;

const ShowDetails = styled.div`
  width: 100%;
  display: flex;
  background: black;
  padding: 40px 0px;
  justify-content: space-evenly;
`;

const Description = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: white;
  padding: 20px 20px 40px;
  gap: 20px;
  p {
    color: white;
    margin-top: 5px;
    font-weight: 500;
  }
  p:first-child {
    font-weight: bold;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 210px;
    height: 295px;
  }
  margin: 30px;
  text-align: center;
  cursor: pointer;
  &:hover ${PlayCircle} {
    display: block;
  }
  &:hover ${Image} {
    opacity: 0.3;
  }
  position: relative;
  min-width: 210px;
  min-height: 345.4px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
  margin: 10px 0;
  color: white;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: grey;
`;

const Summary = styled.div`
  font-size: 14px;
  span {
    font-size: 16px;
    color: white;
    margin-top: 5px;
    font-weight: bold;
  }
`;

const playCircle = {
  color: "white",
  position: "absolute",
  "font-size": "170px",
  top: "290px",
  left: "230px",
};

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  p {
    flex-basis: 45%;
  }
`;

const Button = styled.div`
  background: white;
  color: black;
  height: 25px;
  width: 150px;
  margin-top: 50px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 10px 0px;
  border-radius: 21px;
  cursor: pointer;
`;
