import Card from "../components/Card";
import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/home/NewsCarousel";
import CardContainer from "../components/pages/home/CardContainer";
import BannerSection from "../components/common/bannersection";
import { useState, useEffect } from "react";
import { database } from "../api/data";


const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    database.getAllArticles().then(a => console.log(a))
  }, []);

  // const news = [
  //   {
  //     id: 2,
  //     title: "Second Article",
  //     subtitle: "",
  //     slug: "second-article",
  //     body: "Hi. I have created a website. I have django rest framework for backend. Django has nothing to do with the frontend. It only provides API.I use nextJS for frontend. Now, I need to deploy this. I need the django and nextjs to run on same droplet. How can I do this? I have previously done django+react combo. But, django + next js is different. someone pls guide me",
  //     meta_description: "",
  //     date_created: "2022-03-24T08:12:29.942293Z",
  //     date_modified: "2022-03-24T08:12:29.942319Z",
  //     image: null,
  //     publish_date: "2022-03-24T09:11:00Z",
  //     published: true,
  //     author: 1,
  //     tags: [],
  //   },
  //   {
  //     id: 1,
  //     title: "An Article",
  //     subtitle: "",
  //     slug: "article",
  //     body: "Get started with Cloudinary by uploading some of your media. You can add upload functionality to your applications using our APIs and SDKs. Alternatively, you can upload using the Media Library or from the command line using the Cloudinary CLI.",
  //     meta_description: "",
  //     date_created: "2022-03-18T10:27:23.194240Z",
  //     date_modified: "2022-03-18T10:27:23.194260Z",
  //     image:
  //       "https://res.cloudinary.com/unibadansu/image/upload/v1/media/images/articles/dynamic-wang-Rl6pvYRMzF8-unsplash_lqjbmc",
  //     publish_date: "2022-03-18T10:26:38Z",
  //     published: true,
  //     author: 1,
  //     tags: [2],
  //   },
  // ];

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
          {articles.map((article, index) => (
            <Card headline={article.title} key={index} />
          ))}
        </CardContainer>
      </div>
    </Layout>
  );
};

export default Home;
