import Layout from "../components/common/Layout";
import PageIntro from "../components/ui/PageIntro";
import TrendingNews from "../components/pages/trending/TrendingNews";
import { getStudentsUnionPress } from "../api/studentsUnionPress";

export default function SU_Corner({articles}) {
  const seo = {
    title: "University of Ibadan Student's Union | SU Corner",
    description:
      "The official website of the University of Ibadan Student's Union",
  };
 
  return (
    <Layout seo={seo}>
      <PageIntro text="Student union press corner" />
      <TrendingNews title = {'SU Press'} articles = {articles} link = {'students-union-press-club'} />
    </Layout>
  );
}
export const getStaticProps = async ()=>{
  const data = await getStudentsUnionPress()
  return{
    props:{
      articles: data ? data.data : []
    },
    revalidate: 10
  }

}
