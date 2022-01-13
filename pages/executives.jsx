import Layout from "../components/common/Layout";
import Executives from "../components/pages/executives/Executives";
import PageIntro from "../components/ui/PageIntro";

export default function () {
  const seo = {
    title: "University of Ibadan Student's Union | Executive Council",
    description:
      "The official website of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <PageIntro text="meet your executives" />
      <Executives />
    </Layout>
  );
}
