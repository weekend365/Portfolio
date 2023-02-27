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
          유저 친화적인 웹앱을 만들고자 하는 신입 프론트엔드 개발자
          남우현입니다. 이 포트폴리오는 Next.js와 LottieFiles, Notion Api,
          TailwindCSS를 활용하여 만들었으며. 근래에는 React로 개인 프로젝트를
          만들거나 방통대 컴퓨터과학과 3학년 편입생으로서 온라인 수업을 들으며
          CS 지식을 쌓고 있습니다. 가장 가까운 목표로는 정보처리기사, SQLD
          자격증 취득과 토익 고득점을 위해 준비하고 있으며 아직 많이 부족하지만
          더 나은 개발자가 되기 위하여 시간과 노력을 아끼지 않고 역량을
          키우겠습니다.
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
