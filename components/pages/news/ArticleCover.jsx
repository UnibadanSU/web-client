import { getStrapiMedia } from "../../../lib/media";

export default function ArticleCover({ image }) {
  const imageUrl = getStrapiMedia(image);
  const altText = image.alternativeText;
  return (
    <div
      style={{
        height: "300px",
        width: "100%",
      }}
      className="relative"
    >
      <img
        style={{
          borderBottomLeftRadius: "36px",
          height: "300px",
          borderBottomRightRadius: "36px",
          objectFit: "fill",
        }}
        src={imageUrl}
        alt={altText}
        className="absolute top-0 left-0 w-full overflow-hidden"
      />
    </div>
  );
}
