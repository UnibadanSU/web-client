import Layout from "../components/common/Layout";
import Representatives from "../components/pages/representatives/Representatives";
import PageIntro from "../components/ui/PageIntro";

export default function () {
  const seo = {
    title: "University of Ibadan Student's Union | Representative Council",
    description:
      "The official website of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <PageIntro text="Meet ui su Representative council" />
      <Representatives />
    </Layout>
  );
}
