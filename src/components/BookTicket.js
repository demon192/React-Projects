import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  Select,
  MenuItem,
  TextField,
  FormControl,
  Button,
} from "@mui/material";

function BookTicket() {
  const location = useLocation();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const show = location.state.show;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Image>
        <img
          src={show.image?.original}
          alt={show.name}
          style={{ width: "100%", height: "100vh" }}
        />
      </Image>
      <Details>
        <Form>
          <p>Book Your Show</p>
          <p>Theater : Climax Hall</p>
          <p>Screen : Screen1</p>
          <p>
            Name : <input type="text" />
          </p>
          <p>
            Select Date : <input type="date" />
          </p>
          <p>
            Show :{" "}
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                height: "21px",
                margin: "2px",
                padding: "0px",
              }}
            >
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{
                  color: "white",
                  padding: 0,
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>10am</MenuItem>
                <MenuItem value={20}>2pm</MenuItem>
                <MenuItem value={30}>5pm</MenuItem>
              </Select>
            </FormControl>
          </p>

          <p>
            Price :{" "}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{
                  color: "white",
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={10}>Platinum, 70Rs</MenuItem>
                <MenuItem value={20}>Silver, 140Rs</MenuItem>
                <MenuItem value={30}>Gold, 200Rs</MenuItem>
              </Select>
            </FormControl>
          </p>
          <p>
            Tickets : <input type="number" />
          </p>
        </Form>
        <Button>Book Now</Button>
      </Details>
    </Wrapper>
  );
}

export default BookTicket;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background: black;
  padding: 40px 0px;
  justify-content: space-evenly;
  color: white;
`;

const Heading = styled.p``;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    width: 170px;
  }
`;

const Image = styled.div`
  flex-basis: 40%;
`;

const Details = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: white;
  padding: 20px 20px 40px;
  gap: 20px;
  background: #191717;
  p {
    color: white;
    margin-top: 5px;
    font-weight: 500;
  }
  p:first-child {
    font-weight: bold;
    font-size: 30px;
  }
`;
