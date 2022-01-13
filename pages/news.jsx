import Layout from "../components/common/Layout";
import PageIntroWithCover from "../components/ui/PageIntroWithCover";
import News from "../components/pages/news/News";

export default function() {
  const seo = {
    title: "University of Ibadan Student's Union | News",
    description:
      "The official news page of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <PageIntroWithCover />
      <News />
    </Layout>
  )
};
