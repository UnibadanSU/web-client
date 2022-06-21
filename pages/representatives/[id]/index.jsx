import { getRepresentatives, getRepresentative } from "../../../api/representatives";
import Layout from "../../../components/common/Layout";
import Profile from "../../../components/Profile/Profile";
import { useRouter } from "next/router";

const Representative = ({representative})=>{
  const router = useRouter()
  const getDescription = (body, limit)=>{
    return body.length > limit ? body.substr(0, limit-1) + '...' : body
  }
  const seo = {
    title: representative ? representative.attributes.name : '',
    description: representative && representative.about ? getDescription(representative.about): ''
    // shareImage: representative ? imageUrl : "",
  };
    console.log(representative)
    if(router.isFallback){
      return (
        <div>Loading</div>
      )
    }
    return (
      <Layout seo = {seo} >
         <Profile details = {representative.attributes}/>
      </Layout>
       
    )
}

export async function getStaticPaths() {
    let data = await getRepresentatives();
    let representatives = Array.isArray(data.data) ? data.data : [];
    let paths = representatives.map((representative) => ({
      params: {
        id: toString(representative.id)
      },
    }));
    return { paths, fallback: true };
  }
  
  export async function getStaticProps({ params }) {
    const { id } = params;
    let representative = await getRepresentative(id);
    if (!representative) {
      return {
        notFound: true,
      };
    }
  
    representative = representative.data[0];
  
    return {
      props: {
        representative: representative ? representative : null,
      },
      revalidate: 10
    };
  }
  export default Representative