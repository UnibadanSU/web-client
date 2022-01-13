import Card from "../components/Card/Card";
import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/index/NewsCarousel";
import styled from "styled-components";
import { createClient } from "contentful";


export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "news" });

  return {
    props: {
      news: res.items,
    }
  }
}

const Home = ({news}) => {
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
