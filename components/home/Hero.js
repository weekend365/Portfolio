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
          TailwindCSS를 활용하여 만들었으며. 근래에는 React를 심화적으로 다루고
          있으며 방통대 컴퓨터과학과 3학년으로 편입해 전공 수업을 들으며 CS
          지식을 쌓고 있습니다. 개발자로서의 제가 가진 무기로는 데이터 범람의
          현시대에 정제된 정보를 찾아내 지식을 얻는 능력과 개발자의 길을 걷기
          전에 수년간 영업지원, 바텐더로 일하며 길렀던 커뮤니케이션 능력이라고
          생각합니다. 동료들과의 협업이란 서로가 끝없는 대화를 나누며 알아가고
          나아가며 궁극적으로 결과물을 만들어내는 과정이라고 생각하기
          때문입니다. 긴 글 읽어주셔서 감사합니다. 좋은 하루 보내세요.
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
