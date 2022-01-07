import Card from "../components/Card/Card";
import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/index/NewsCarousel";
import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <section>
        <NewsCarousel />
      </section>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Layout>
  );
};

export default Home;

const CardContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 50% 50%;
  justify-content: center;
`;
