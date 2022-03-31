import Card from "../components/Card";
import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/home/NewsCarousel";
import CardContainer from "../components/pages/home/CardContainer";
import BannerSection from "../components/common/bannersection";
import { useState, useEffect } from "react";
const db = require("../api/data");
const {getAllArticles} = db;


const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then(a => setArticles(a))
  }, []);

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
        <CardContainer>
          {articles.map((article, index) => (
            <Card 
              headline={article.title} 
              image={article.image} 
              key={index} 
              />
          ))}
        </CardContainer>
      </div>
    </Layout>
  );
};

export default Home;
