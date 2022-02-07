import Layout from "../components/common/Layout";
import PageIntro from "../components/ui/PageIntro";
import TrendingNews from "../components/pages/trending/TrendingNews";

export default function SU_Corner() {
  const seo = {
    title: "University of Ibadan Student's Union | SU Corner",
    description:
      "The official website of the University of Ibadan Student's Union",
  };
  return (
    <Layout seo={seo}>
      <PageIntro text="Student union press corner" />
      <TrendingNews />
    </Layout>
  );
}
