import Markdown from "markdown-to-jsx";
import { DateTime } from "luxon";
import NewsBadge from "../../ui/NewsBadge";
import { getStrapiMedia } from "../../../lib/media";
import { format, compareAsc, formatDistance } from 'date-fns'

export default function Article({ article }) {
  let timePublished = new Date (article.publishedAt)
  let publishedSince = formatDistance( timePublished, new Date(), {
    addSuffix: true
  })

  const transformImage = (src) => {
    let image = { url: src };
    return getStrapiMedia(image);
  };
  console.log(publishedSince)

  return (
    <div className="mx-[16px] mt-[25px] lg:mt-[40px] mb-[80px] lg:mx-[300px]">
      <div className="flex flex-row items-center space-x-[6px] font-bold">
        <NewsBadge title="news" />
        <NewsTime time={publishedSince} />
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
          {article.body}
        </Markdown>
      </TextBlock>
    </div>
  );
}

const Headline = ({ children }) => {
  return <h1 className="font-bold text-[1.6rem] mt-[11px] mb-[18px]">{children}</h1>;
};

const NewsTime = ({ time }) => <div style = {{textTransform: 'capitalize'}} className="text-[12px]">{time}</div>;

const TextBlock = ({ children }) => (
  <div className="text-justify text-[15px]">{children}</div>
);
