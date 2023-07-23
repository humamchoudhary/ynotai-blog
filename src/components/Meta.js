import Head from "next/head";

const Meta = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
}) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta charSet="utf-8"></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title}</title>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9328291760918079"
        crossorigin="anonymous"
      ></script>
    </Head>
  );
};
Meta.defaultProps = {
  title: "YNotAI",
  keywords: "ai, ai blog, artificial intelligence",
  description:
    "YNotAi, LLC is your gateway to a healthier future, where cutting-edge technologies and boundless possibilities converge. Our mission is to illuminate the path ahead by providing a comprehensive platform that unveils tomorrow's marvels. Welcome to a one-stop destination for the latest trends, advancements, and breakthroughs in artificial intelligence, machine learning, natural language processing, metaverse, automation, quantum computing, autonomous technology, web 3, self-driving vehicles, deep learning, blockchain, internet of things, augmented reality, virtual reality, and more.",
  ogTitle: "AI writer",
};
export default Meta;
