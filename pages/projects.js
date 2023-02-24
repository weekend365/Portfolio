import Layout from "../components/Layout";
import { DATABASE_ID, TOKEN } from "../config";
import Head from "next/head";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  console.log(projects);

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
          <Head>
            <title>Woohyuns Portfolio</title>
          </Head>
          <h1
            className="text-4xl font-bold sm:text-6xl
        "
          >
            Projects:
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
            {projects.results.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject} />
            ))}
          </div>
        </div>
      </Layout>
    </>
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
