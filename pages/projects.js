import Layout from "@/components/layout";
import { DATABASE_ID, TOKEN } from "@/config";
import Head from "next/head";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <Head>
        <title>Woohyun's Portfolio</title>
      </Head>
      <h1>Projects: {projects.results.length}</h1>
      {projects.results.map((aProject) => (
        <h1>{aProject.properties.이름.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

//빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      // 베어러 시크릿 토큰
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.이름.title[0].plain_text
  );

  console.log(`projectNames: ${projectNames}`);

  return {
    props: { projects },
  };
}
