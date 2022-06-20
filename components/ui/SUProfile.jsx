import Link from "next/link";
import { getStrapiMedia } from "../../lib/media";

export default function SUProfile({ profile, link, id }) {
  let imageUrl = profile.image.data.attributes;
  if (imageUrl) {
    imageUrl = getStrapiMedia(imageUrl);
  }

  return (
    <Link passHref href={`/${link}/${encodeURIComponent(id)}`}>
       <div className="max-w-[219px] mx-auto">
      <img
        src={imageUrl}
        alt={profile.name}
        className="mx-auto rounded-circle h-[7.563rem] w-[7.563rem]"
      />
      <p className="text-center text-[15px]">{profile.name}</p>
      <p className="text-center text-custom-red text-sm">{profile.position}</p>
      <p className="text-center text-custom-red text-sm">{profile.contact}</p>
      <p className="text-center text-custom-red text-sm">{profile.about && profile.about}</p>
    </div>
    </Link>
   
  );
}
