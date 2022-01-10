import Layout from "../components/common/Layout";
import AboutSection from "../components/pages/about/AboutSection";
import PageIntro from "../components/ui/PageIntro";

export default function() {
  const seo = {
    title: "University of Ibadan Student's Union | About",
    description:
      "The official website of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <PageIntro text="about ui student union" />
      <AboutSection />
    </Layout>
  )
};
