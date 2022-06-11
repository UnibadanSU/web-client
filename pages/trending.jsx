import Layout from "../components/common/Layout";
import PageIntro from "../components/ui/PageIntro";
import TrendingNews from "../components/pages/trending/TrendingNews";
import { getTrending } from "../api/trending";

export default function TrendingNewsPage({trending}) {
  const seo = {
    title: "University of Ibadan Student's Union | Trending News and Events",
    description:
      "The official website of the University of Ibadan Student's Union",
  };
  console.log(trending)
  return (
    <Layout seo={seo}>
      <PageIntro text="Trending News & Events" />
      <TrendingNews trending = {trending} />
    </Layout>
  );
}
export async function getStaticProps() {
  const data = await getTrending();
  return {
    props: {
      trending: data ? data.data : [],
    },
    revalidate: 10
  };
}
