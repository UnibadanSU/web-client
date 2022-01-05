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
      </CardContainer>
    </Layout>
  );
};

export default Home;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
