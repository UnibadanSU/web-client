import Layout from "../components/common/Layout";
import NewsCarousel from "../components/pages/home/NewsCarousel";
import Articles from "../components/pages/home/Articles";
import BannerSection from "../components/common/bannersection";
import { getAllArticles } from "../api/articles";

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
  const data = await getAllArticles()
  return {
    props: {
      articles: data ? data : [],
    },
    revalidate: 10
  };
}
// export const getStaticProps = async ()=>{
//   const {data} = await axios.get('https://uisu-cms.herokuapp.com/api/articles/?populate=*')
//   return {
//     props:{
//       articles: data ? data.data : []
//     }
//   }
// }

// fetch('https://uisu-cms.herokuapp.com/api/articles', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }).then(res => res.json()).then(data => console.log(data));

export default Home;
