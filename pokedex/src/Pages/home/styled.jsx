import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
  max-width: 1920px;
  margin: 0px auto;
  flex-wrap: wrap;
  background-color: #5E5E5E;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

