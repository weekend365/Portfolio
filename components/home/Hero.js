import Link from "next/link";
import Animation from "./animation";

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
          남우현입니다. 이 포트폴리오는 React 프레임워크인 Next.js와
          LottieFiles, Notion Api, TailwindCSS를 활용하여 만들었습니다. 근래에는
          OpenAI API를 활용하여 사용자의 키워드에 맞춰 시를 생성해 주고 이미지를
          가져오는 개인 프로젝트를 진행 중에 있습니다. 자세한 내용은 프로젝트
          목록에 게시해놨습니다. 부족한 CS지식은 방통대 컴퓨터과학과 3학년으로
          편입해 쌓고 있으며. 개발자로서 아직 배워야 할게 많고 부족한 점도
          많기에 더 나은 developer가 되기 위해 쉬지 않고 develop하겠습니다. 긴
          글 읽어주셔서 감사합니다.
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
