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
          TailwindCSS를 활용하여 만들었습니다. 근래에는 사용자 경험(UX)을
          최적화하고, 성능을 개선하는 데 주력하며, 성능 문제 해결 역시 사용자
          경험에서 매우 중요한 요소로 인식하고 있습니다. 최근에는 백엔드와의
          협업 시 이해도를 높이고 효율적인 개발을 위해 백엔드 지식과 CS 지식을
          적극적으로 학습하고 있습니다. 이를 위해 SQLD 자격증을 취득하였고,
          정보처리기사 필기 시험에 합격하고 다음 실기 시험을 준비하고 있습니다.
          또한, 방송통신대학교 컴퓨터과학과 4학년에 재학 중이며, CS(컴퓨터 공학)
          기초 지식을 쌓고 다가오는 2025년도에 졸업을 앞두고 있습니다. 더 나은
          developer가 되기 위해 쉬지 않고 develop하겠습니다. 긴 글 읽어주셔서
          감사합니다.
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
