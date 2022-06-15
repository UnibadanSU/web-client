import Link from "next/link";
import { getStrapiMedia } from "../../../lib/media";
import NewsBadge from "../../ui/NewsBadge";

const Article = ({ article, topic}) => {
  let imageUrl = article.image.data.attributes;
  if (imageUrl) {
    imageUrl = getStrapiMedia(imageUrl);
  }

  return (
    <Link passHref href={`/news/${encodeURIComponent(article.slug)}`}>
      <a>
        <div className="h-[180px] mt-[12px] hover:opacity-90 transition-opacity duration-500 ease-in-out">
          <div
            style={{
              backgroundSize: "100% 100%",
              backgroundPosition: "top center",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url('${imageUrl}')`,
            }}
            className="flex flex-col md:flex-row gap-[6px] w-full h-full text-white bg-no-repeat bg-center rounded-[16px] p-[20px]"
          >
            <NewsBadge title= {topic} />
            <div className="text-[14px] font-bold relative bottom-[4px]">
              {article.title}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Article;
