import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className=" mt-[0px] h-[700px] w-[60%] mx-auto  flex items-center justify-start bg-center   "
      // style={{ backgroundImage: `url("/images/img-3.jpg")` }}
    >
      <div className="text-start animate-fade-in ">
        <h1 className="text-4xl font-thin  ">
          <span>Hai</span>
          <span className="text-[#FFC107]"> I'm</span>
        </h1>
        <h2 className="text-5xl  mt-4 flex gap-2 animate-fade-in ">
          MATHAN KUMAR
          <span className="block text-2xl font-thin mt-4">Engineer</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed animate-fade-in ">
          Creating a portfolio is a good way of growing your online presence.
          <br />
          The portfolio is used to showcase your skills and projects.
        </p>
        <hr className="border-[#FFC107] text-[#FFC107] mt-4 w-[550px] " />
        {/* className=" w-[400px] h-[600px] object-cover rounded-lg border-[#FFC107] border-r-[2px] border-solid shadow-[0_2px_12px_rgba(0,0,0,0.25)] " */}
        <div className="flex gap-4 mt-4 ">
          <Link href={""} className=" w-8  ">
            <img
              src="/linkedin.svg"
              alt="maddy-linkedin"
              title="linkedin-page"
              className=" "
            />
          </Link>
          <Link href={""} className=" w-8  ">
            <img
              src="/github.svg"
              alt="maddy-githup"
              title="github-page"
              className=" "
            />
          </Link>
          <Link href={""} className=" w-8  ">
            <img
              src="/envelope.svg"
              alt="maddy-mail"
              title="mail-page"
              className=" "
            />
          </Link>
        </div>
      </div>
      <div className=" relative inline-block animate-slide-right ">
        <Image
          src={"/images/img-hd.png"}
          width={600}
          height={100}
          alt="maddy fox"
          className=" bg-transparent mask-image animate-fade-in "
        />
      </div>
    </section>
  );
}
