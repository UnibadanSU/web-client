import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/home/NewsCarousel";
import Articles from "../components/pages/home/Articles";
import BannerSection from "../components/common/bannersection";
import { getArticles } from "../api/articles";

const Home = ({ articles }) => {
  const seo = {
    title: "University of Ibadan Student's Union",
    description:
      "The official website of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <div className="mb-20">
        <NewsCarousel articles={articles} />
        <BannerSection text="Trending news and events" />
        <Articles articles={articles} />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getArticles();
  return {
    props: {
      articles: data ? data : [],
    },
  };
}

export default Home;
