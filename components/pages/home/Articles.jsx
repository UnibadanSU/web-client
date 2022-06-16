import Article from "./Article";

export default function NewsContainer({ articles, topic, link  }) {
  if (!articles) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 align-middle gap-[10px] mx-[12px] mt-[0px]">
    {/* <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-4 align-middle gap-[10px] mx-[12px] mt-[10px]"> */}
      {articles &&
        articles.length > 0 &&
        articles.map((article) => (
          <Article article={article.attributes} key={article.id} topic = {topic} link = {link}/>
        ))}
    </div>
  );
}
