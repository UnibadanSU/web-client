import Layout from "../components/common/Layout";
import PageIntro from "../components/ui/PageIntro";
import TrendingNews from "../components/pages/trending/TrendingNews";

import { getAllArticles } from "../api/articles";

export default function TrendingNewsPage({articles}) {
  const seo = {
    title: "University of Ibadan Student's Union | Trending News and Events",
    description:
      "The official website of the University of Ibadan Student's Union",
  };
  console.log(articles)
  return (
    <Layout seo={seo}>
      <PageIntro text="Trending News & Events" />
      <TrendingNews title = {'news'} articles = {articles} />
    </Layout>
  );
}
export async function getStaticProps() {
  const data = await getAllArticles();
  return {
    props: {
      articles: data ? data : [],
    },
    revalidate: 10
  };
}
