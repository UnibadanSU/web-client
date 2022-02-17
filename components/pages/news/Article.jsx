import Markdown from "markdown-to-jsx";
import { DateTime } from "luxon";
import NewsBadge from "../../ui/NewsBadge";
import { getStrapiMedia } from "../../../lib/media";

export default function Article({ article }) {
  let timePublished = article.timePublished.split("-");
  const dt = new DateTime(new Date());

  let publishedAt = dt
    .set({
      year: parseInt(timePublished[0]),
      month: parseInt(timePublished[1]),
      day: parseInt(timePublished[2]),
    })
    .toFormat("LLL dd, yyyy");

  const transformImage = (src) => {
    let image = { url: src };
    return getStrapiMedia(image);
  };

  return (
    <div className="mx-[16px] mt-[25px] lg:mt-[40px] mb-[80px] lg:mx-[300px]">
      <div className="flex flex-row items-center space-x-[6px] font-bold">
        <NewsBadge title="news" />
        <NewsTime time={publishedAt} />
      </div>
      <Headline>{article.title}</Headline>
      <TextBlock>
        <Markdown
          options={{
            overrides: {
              img: {
                props: {
                  className: "w-full",
                },
              },
            },
          }}
        >
          {article.content}
        </Markdown>
      </TextBlock>
    </div>
  );
}

const Headline = ({ children }) => {
  return <h1 className="font-bold text-[1.6rem] mt-[11px] mb-[18px]">{children}</h1>;
};

const NewsTime = ({ time }) => <div className="text-[12px]">{time}</div>;

const TextBlock = ({ children }) => (
  <p className="text-justify text-[15px]">{children}</p>
);
