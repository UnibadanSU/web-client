import Layout from "../../components/common/Layout";
import ArticleCover from "../../components/pages/news/ArticleCover";
import Article from "../../components/pages/news/Article";
import { getArticle, getArticles } from "../../api/articles";

export default function ({ article }) {
  console.log(article);
  const seo = {
    title: "University of Ibadan Student's Union | News",
    description:
      "The official news page of the University of Ibadan Student's Union",
  };

  return (
    <Layout seo={seo}>
      <ArticleCover image={article.attributes.image.data.attributes} />
      <Article article={article.attributes} />
    </Layout>
  );
}

export async function getStaticPaths() {
  let data = await getArticles();
  let articles = data.data;
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
  };
}
