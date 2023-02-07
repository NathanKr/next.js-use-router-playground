import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRef } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const currentPageIndex = 2;

  return (
    <>
      <main>
        Main page
        <br />
        <p>current page index : {currentPageIndex}</p>
        <br />
        <button
          onClick={() => {
            const nextIndex = currentPageIndex+1;
            router.push(`/page${nextIndex}`);
          }}
        >
          Increment and navigate to page
        </button>
        <br />
      </main>
    </>
  );
};

export default Home;
