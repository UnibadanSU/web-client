import Layout from "../../components/common/Layout";
import ArticleCover from "../../components/pages/news/ArticleCover";
import Article from "../../components/pages/news/Article";
import { getArticle, getAllArticles } from "../../api/articles";

export default function News({ article }) {
  let imageUrl = article.image?.data.attributes;
  if (imageUrl) {
    imageUrl = getStrapiMedia(imageUrl);
  }
  const getDescription = (body, limit)=>{
    return body.length > limit ? body.substr(0, limit-1) + '...' : body
  }
  const seo = {
    title: article.attributes.title,
    description:getDescription(article.attributes.body, 200),
    shareImage: imageUrl || "",
  };

  return (
    <Layout seo={seo}>
      <ArticleCover image={article.attributes.image.data.attributes} />
      <Article article={article.attributes} />
    </Layout>
  );
}

export async function getStaticPaths() {
  let data = await getAllArticles();
  let articles = Array.isArray(data) ? data : [];
  let paths = articles.map((article) => ({
    params: {
      slug: article.attributes.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  let article = await getArticle(slug);
  if (!article) {
    return {
      notFound: true,
    };
  }

  article = article.data[0];

  return {
    props: {
      article: article ? article : null,
    },
    revalidate: 10
  };
}
