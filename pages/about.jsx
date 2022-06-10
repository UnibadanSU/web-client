import Layout from "../components/common/Layout";
import AboutSection from "../components/pages/about/AboutSection";
import PageIntro from "../components/ui/PageIntro";
import { getAboutPageContent } from "../api/about-page";

export default function AboutPage({ aboutPage }) {
  const seo = {
    title: "University of Ibadan Student's Union | About",
    description:
      "The official website of the University of Ibadan Student's Union",
  };
  console.log(aboutPage)
  return (
    <Layout seo={seo}>
      <PageIntro text="about ui student union" />
      <AboutSection aboutPage={aboutPage.attributes} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getAboutPageContent();
  return {
    props: {
      aboutPage: data ? data : {},
    },
  };
}
