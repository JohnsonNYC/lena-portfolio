import styled from "styled-components";
import Text from "./Text";

const UpcomingDates = [
  { key: 1, location: "Chicago, IL", date: "March 2025" },
  { key: 2, location: "Washington DC", date: "April 2025" },
  { key: 3, location: "Philadelphia, PA", date: "May 2025" },
];

const GuestSpot = () => {
  if (!UpcomingDates.length) return null;

  return (
    <Container id="guest-spots">
      <Text color="blue" weight={900} size="xl" id="portfolio">
        Guest Spot
      </Text>
      <Wrapper>
        {UpcomingDates.map((info) => (
          <Tile key={info.key}>
            <Text size="xl">{info.location}</Text>
            <Text size="lg" font="timesNewRoman">
              {info.date}
            </Text>
          </Tile>
        ))}
      </Wrapper>
    </Container>
  );
};

export default GuestSpot;

const Container = styled.div`
  & > span {
    display: block;
    padding: 0rem 3rem;
    margin: 1rem 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  gap: 3rem;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;

    & > div {
      width: 100%;
      border: 1px solid black;
    }
  }
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
`;
