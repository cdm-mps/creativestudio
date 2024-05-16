import Skeleton from "@components/Skeleton/Skeleton";
import React from "react";

export const HomePageSkeleton = () => {
  return (
    <>
      {/* // <div */}
      {/* //   id="news-slider-section"
      //   className="mx-6 flex flex-col gap-14 pt-8 md:mx-40 md:pt-24"
      // >
      //   <Skeleton width={250} height={206} />
      //   <Skeleton height={384} />
      // </div> */}
      {/* // <div className="mt-32 w-full md:mt-[139px] md:pt-[100px]">
      //   <div className="mx-6 md:mx-40">
      //     <Skeleton width={250} height={206} />
      //   </div>
      //   <div className="mx-6 pt-16 md:mx-40 md:pt-48">
      //     <Skeleton height={494} />
      //   </div>
      // </div>
      // <div className="mx-6 pt-16 text-center md:mx-40 md:my-48">
      //   <Skeleton height={72} />
      // </div>
      // <div className="mx-6 pt-16 md:mx-40 md:mb-[104px]"> */}
      <div className="mx-9 flex flex-col gap-8">
        <Skeleton width={250} height={206} />
        <div className="flex gap-14 ">
          <Skeleton height={400} width={400} />
          <Skeleton height={400} width={400} />
          <Skeleton height={400} width={400} />
        </div>
      </div>
      <div className="ml-9 mr-16 mt-64 flex items-center gap-10">
        <Skeleton width={250} height={206} />
        <Skeleton height={494} />
      </div>
      <div className="mx-9 my-48 flex justify-center">
        <Skeleton height={72} width={800} />
      </div>
      <div className="mx-9 mb-[104px]">
        <Skeleton height={115} />
      </div>
    </>
  );
};
