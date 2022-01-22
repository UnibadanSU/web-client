import Article from "./Article";

export default function NewsContainer({ articles }) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-4 align-middle gap-[10px] mx-[12px] mt-[10px]">
      {articles &&
        articles.length > 0 &&
        articles.map((article) => (
          <Article article={article.attributes} key={article.id} />
        ))}
    </div>
  );
}
