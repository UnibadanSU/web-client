import styled from "styled-components";
import Image from "next/image";
import profilePic from "../../public/me.jpg"

const Profile = () => {
  return (
    <>
      <ProfileContainer>
        <Picture src={profilePic} alt={"executive picture"}/>
      </ProfileContainer>
      <Name>Oluwasomidotun Oladipupo</Name>
      <Title>President</Title>
    </>
  )
};

export default Profile;

const ProfileContainer = styled.div`
  width: 151px;
  height: 151px;
  margin: 10px 20px 20px;
`

const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid;
  border-image-source: linear-gradient(179.66deg, #E30000 0.29%, #FFFFFF 70.13%);
`;

const Name = styled.text`
  font-family: Inter, sans-serif;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 11px;
  letter-spacing: 0em;
  text-align: center;
  flex-wrap: nowrap;
`;

const Title = styled.text``;