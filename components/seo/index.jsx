import Head from "next/head";

export default function Seo({ seo }) {
  return (
    <Head>
      <title>{seo.title || "UI SU"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />{" "}
    </Head>
  );
}
