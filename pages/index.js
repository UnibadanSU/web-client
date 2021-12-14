import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/index/NewsCarousel";

const Home = () => {
  return (
    <Layout>
      <section>
        <NewsCarousel />
      </section>
    </Layout>
  );
};

export default Home;
