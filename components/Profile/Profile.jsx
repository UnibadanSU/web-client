import styled from "styled-components";
import Image from "next/image";
import profilePic from "../../public/me.jpg"
import { getStrapiMedia } from "../../lib/media";

const Profile = ({details}) => {
  let imageUrl = details.image.data.attributes;
  if (imageUrl) {
    imageUrl = getStrapiMedia(imageUrl);
  }
  return (
    <>
      {/* <ProfileContainer> */}
        {/* <Picture src={profilePic} alt={"executive picture"}/>
        <Name>Oluwasomidotun Oladipupo</Name>
      <Title>President</Title> */}
      <div className="flex h-screen w-screen">
  <div className="m-auto">
  <div className="max-w-[219px] mx-auto">
      <img
      layout="fill"
        src={imageUrl}
        alt={details.name}
        className="mx-auto rounded-circle h-[7.563rem] w-[7.563rem]"
      /></div>
      <p className="text-center text-[15px]">{details.name}</p>
      <p className="text-center text-custom-red text-sm">{details.position}</p>
      <p className="text-center text-custom-red text-sm">{details.contact}</p>
      <p className="text-center text-red-500 text-sm">{details.about && details.about}</p>
    
  </div>
</div>
      {/* </ProfileContainer> */}
     
    </>
  )
};

export default Profile;

// const ProfileContainer = styled.div`
//   width: 300px;
//   height: 300px;
//   margin: 10px 20px 20px;
// `

// const Picture = styled(Image)`
//   width: 300px;
 
//   border-radius: 50%;
//   border: 4px solid;
//   border-image-source: linear-gradient(179.66deg, #E30000 0.29%, #FFFFFF 70.13%);
// `;

// const Name = styled.text`
//   font-family: Inter, sans-serif;
//   font-size: 9px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 11px;
//   letter-spacing: 0em;
//   text-align: center;
//   flex-wrap: nowrap;
// `;

// const Title = styled.text``;