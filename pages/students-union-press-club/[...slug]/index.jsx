import Layout from "../../../components/common/Layout";
import ArticleCover from "../../../components/pages/news/ArticleCover";
import Article from "../../../components/pages/news/Article";
import { getArticle, getAllArticles } from "../../../api/articles";
import { getStudentsUnionPress, getStudentsUnionPressArticle } from "../../../api/studentsUnionPress";


import {useRouter} from 'next/router'

export default function News({ article }) {
  const router = useRouter()
  let imageUrl = article ? article.image?.data.attributes : null ;
  if (imageUrl) {
    imageUrl = getStrapiMedia(imageUrl);
  }
  const getDescription = (body, limit)=>{
    return body.length > limit ? body.substr(0, limit-1) + '...' : body
  }
  const seo = {
    title: article ? article.attributes.title : '',
    description:article ? getDescription(article.attributes.body, 200) : '',
    shareImage: article ? imageUrl : "",
  };
  console.log(article)
  if(router.isFallback){
    return (
      <div>Loading</div>
    )
  }
  return (
    <Layout seo={seo}>
      <ArticleCover image={article.attributes.image.data.attributes} />
      <Article article={article.attributes} />
    </Layout>
  );
}

export async function getStaticPaths() {
  let data = await getStudentsUnionPress();
  let articles = Array.isArray(data.data) ? data.data : [];
  let paths = articles.map((article) => ({
    params: {
      slug: [...article.attributes.slug]
    },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  let article = await getStudentsUnionPressArticle(slug);
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
