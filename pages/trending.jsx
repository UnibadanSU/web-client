import Layout from "../components/common/Layout";
import PageIntro from "../components/ui/PageIntro";
import TrendingNews from "../components/pages/trending/TrendingNews";

export default function() {
  const seo = {
    title: "University of Ibadan Student's Union | Trending News and Events",
    description:
      "The official website of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <PageIntro text="Trending News & Events"/>
      <TrendingNews />
    </Layout>
  )
}
