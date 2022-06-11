import Layout from "../components/common/Layout";
import Executives from "../components/pages/executives/Executives";
import PageIntro from "../components/ui/PageIntro";
import { getExecutives } from "../api/executives";

export default function ExecutivesPage({ executives }) {
  const seo = {
    title: "University of Ibadan Student's Union | Executive Council",
    description: "The Executives of the University of Ibadan Student's Union",
  };
  console.log(executives)
  return (
    <Layout seo={seo}>
      <div className="my-10">
        <PageIntro text="meet your executives" />
        <Executives executives={executives} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getExecutives();
  return {
    props: {
      executives: data ? data.data : [],
    },
    revalidate: 5
  };
}
