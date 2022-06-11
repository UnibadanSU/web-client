import { getRepresentatives } from "../api/representatives";
import Layout from "../components/common/Layout";
import Representatives from "../components/pages/representatives/Representatives";
import PageIntro from "../components/ui/PageIntro";

export default function RepresentativesPage({ representatives }) {
  const seo = {
    title: "University of Ibadan Student's Union | Representative Council",
    description:
      "The Representatives of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <PageIntro text="Meet ui su Representative council" />
      <Representatives representatives={representatives} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getRepresentatives();
  return {
    props: {
      representatives: data ? data.data : [],
    },
    revalidate: 10000
  };
}
