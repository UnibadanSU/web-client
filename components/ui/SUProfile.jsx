import { getStrapiMedia } from "../../lib/media";

export default function SUProfile({ profile }) {
  let imageUrl = profile.image.data.attributes;
  if (imageUrl) {
    imageUrl = getStrapiMedia(imageUrl);
  }

  return (
    <div className="max-w-[219px] mx-auto">
      <img
        src={imageUrl}
        alt={profile.name}
        className="mx-auto rounded-circle h-[7.563rem] w-[7.563rem]"
      />
      <p className="text-center text-[15px]">{profile.name}</p>
      <p className="text-center text-custom-red text-sm">{profile.position}</p>
    </div>
  );
}
