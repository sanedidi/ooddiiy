import Collection from "@/components/Collection/Collection";
import Hero from "@/components/Hero/Hero";
import NewProducts from "@/components/NewProducts/NewProducts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Online Store</title>
        <meta name="description" content="Welcome to our online store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <NewProducts />
      <Collection />
    </>
  );
}
