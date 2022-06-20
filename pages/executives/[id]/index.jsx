import { getExecutives } from "../../../api/executives";
import Profile from "../../../components/Profile/Profile";

const Executive = ({executive})=>{
    console.log(executive)
    return (
        <Profile/>
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
    let executive = await getExecutives(id);
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