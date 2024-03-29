import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Woohyuns Portfolio</title>
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
