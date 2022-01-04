import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Cover></Cover>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 180px;
  height: 140px;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 24px;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: url("/unsplash_1.png") top center/ 100% 100% no-repeat;
  border-radius: 24px;
`;
