import styled from "styled-components";

const Card = styled.div`
  padding: 30px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border-top: ${(props) => `5px solid ${props.topColor}`};
  background-color: ${(props) => props.theme.colors.cardBackground};
`;

export default Card;
