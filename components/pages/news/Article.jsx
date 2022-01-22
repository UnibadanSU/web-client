import ReactMarkDown from "react-markdown";
import { DateTime } from "luxon";
import NewsBadge from "../../ui/NewsBadge";
import { getStrapiMedia } from "../../../lib/media";

export default function Article({ article }) {
  const dt = new DateTime(article.publishedAt);
  const publishedAt = dt.toLocaleString(DateTime.DATE_FULL);

  const transformImage = (src) => {
    let image = { url: src };
    return getStrapiMedia(image);
  };

  return (
    <div className="mx-[16px] mt-[25px] lg:mt-[40px] mb-[80px] lg:mx-[300px]">
      <div className="flex flex-row items-center space-x-[6px] font-bold">
        <NewsBadge title="news" />
        <NewsTime date={publishedAt} />
      </div>
      <Headline>{article.title}</Headline>
      <TextBlock>
        <ReactMarkDown transformImageUri={(src) => transformImage(src)}>
          {article.content}
        </ReactMarkDown>
      </TextBlock>
    </div>
  );
}

const Headline = ({ children }) => {
  return (
    <h1 className="font-bold text-[21px] mt-[11px] mb-[16px]">{children}</h1>
  );
};

const NewsTime = ({ date }) => <div className="text-[12px]">{date}</div>;

const TextBlock = ({ children }) => (
  <p className="text-justify text-[15px]">{children}</p>
);
