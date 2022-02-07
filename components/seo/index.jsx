import Head from "next/head";

export default function Seo({ seo }) {
  return (
    <Head>
      <title>{seo.title || "UI SU"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />
      {seo.shareImage && (
        <>
          <meta property="og:image" content={seo.shareImage} />
          <meta name="twitter:image" content={seo.shareImage} />
          <meta name="image" content={seo.shareImage} />
          <meta name="twitter:card" content={seo.shareImage} />
        </>
      )}
    </Head>
  );
}
