import Card from "../components/Card";
import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/home/NewsCarousel";
import CardContainer from "../components/pages/home/CardContainer";
import BannerSection from "../components/common/bannersection";

const Home = () => {
  const seo = {
    title: "University of Ibadan Student's Union",
    description:
      "The official website of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <div className="mb-20">
        <NewsCarousel />
        <BannerSection text="Trending news and events" />
        <CardContainer>
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
          <Card headline="Motorbike belonging to Late Michael Jackson to be sold for $5.8 Million" />
        </CardContainer>
      </div>
    </Layout>
  );
};

export default Home;
