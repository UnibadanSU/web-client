import { getExecutives, getExecutive } from "../../../api/executives";
import Layout from "../../../components/common/Layout";
import Profile from "../../../components/Profile/Profile";
import { useRouter } from "next/router";

const Executive = ({executive})=>{
  const router = useRouter()
  const getDescription = (body, limit)=>{
    return body.length > limit ? body.substr(0, limit-1) + '...' : body
  }
  const seo = {
    title: executive ? executive.attributes.name : '',
    description: 'jdkdk'
    // shareImage: executive ? imageUrl : "",
  };
    console.log(executive)
    if(router.isFallback){
      return (
        <div>Loading</div>
      )
    }
    return (
      <Layout seo = {seo} >
         <Profile details = {executive.attributes} />
      </Layout>
       
    )
}

export async function getStaticPaths() {
    let data = await getExecutives();
    let executives = Array.isArray(data.data) ? data.data : [];
    let paths = executives.map((executive) => ({
      params: {
        id: toString(executive.id)
      },
    }));
    return { paths, fallback: true };
  }
  
  export async function getStaticProps({ params }) {
    const { id } = params;
    let executive = await getExecutive(id);
    if (!executive) {
      return {
        notFound: true,
      };
    }
  
    executive = executive.data[0];
  
    return {
      props: {
        executive: executive ? executive : null,
      },
      revalidate: 10
    };
  }
  export default Executive