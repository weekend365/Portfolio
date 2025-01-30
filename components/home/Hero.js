import Link from "next/link";
import Animation from "./Animation";

export default function Hero() {
  return (
    <>
      {" "}
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          Welcome to my Portfolio.
        </h1>
        <p className="mb-8 leading-relaxed">
          유저 친화적인 웹앱을 만들고자 하는 프론트엔드 개발자 남우현입니다. 이
          포트폴리오는 React 프레임워크인 Next.js와 LottieFiles, Notion Api,
          TailwindCSS를 활용하여 만들었고 Vercel을 활용해 서버리스(Serverless)
          환경에서 배포했습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">Go to projects</button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
