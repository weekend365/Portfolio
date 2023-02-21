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
          유저 친화적인 웹앱을 만들고자 시간과 노력을 아끼지않고 역량을 키우고
          있는 신입 프론트엔드 개발자 남우현입니다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Go to projects
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
