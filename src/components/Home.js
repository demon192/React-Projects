import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <Shows>
      {data.map((value, index) => {
        const { score, show } = value;
        console.log(show);
        console.log(show.image?.medium);
        const summary = (show?.summary).substr(0, 100);
        console.log(summary);

        const temp = document.createElement("p");
        temp.innerHTML = summary;
        console.log(temp.textContent);
        return (
          <Card
            key={index}
            onClick={() => navigate("/details", { state: { show: show } })}
          >
            <Image>
              <img src={show.image?.medium} alt={show.name} />
            </Image>
            <Title>{show.name}</Title>
            <PlayCircle>
              <PlayCircleOutlineIcon style={playCircle} />
            </PlayCircle>
            <Description>
              <Title>{show.name}</Title>
              <Line />
              <Summary id="summary">{temp.textContent + " . . ."}</Summary>
              <p>Rating : {show.rating.average ? show.rating.average : 6}</p>
              <p>
                Date Aired : {show.premiered ? show.premiered : "Not Available"}
              </p>
              <p>Status : {show.status}</p>
              <p>Genre : {show.genres.join(", ")}</p>
            </Description>
          </Card>
        );
      })}
    </Shows>
  );
}

export default Home;

const Shows = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: black;
  padding: 30px 0 100px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: #0e0e0e;
  padding: 20px 20px 40px;
  p {
    color: white;
    margin-top: 5px;
    font-weight: 500;
  }
  p:first-child {
    font-weight: bold;
  }
  position: absolute;
  left: 70px;
  top: 170px;
  width: 100%;
  z-index: 1;
  height: auto;
  border-radius: 6px;
  display: none;
`;

const PlayCircle = styled.div`
  display: none;
`;

const Image = styled.div``;

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
  &:hover ${PlayCircle},&:hover ${Description} {
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
  font-size: 20px;
  margin: 10px 0;
  color: white;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: grey;
  color: white;
`;

const Summary = styled.div`
  font-size: 14px;
  color: white;
`;

const playCircle = {
  color: "white",
  position: "absolute",
  "font-size": "80px",
  top: "110px",
  left: "64px",
};
