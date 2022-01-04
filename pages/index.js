import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/index/NewsCarousel";

const Home = () => {
  return (
    <Layout>
      <section>
        <NewsCarousel />
        <div style={{
          width: "100%",
          height: "60px",
          backgroundColor: "black",
          borderBottomLeftRadius: "26px",
          borderBottomRightRadius: "26px",
        }}/>
      </section>
    </Layout>
  );
};

export default Home;
