import Skeleton from "@components/Skeleton/Skeleton";

export const CategoryPageSkeleton = () => (
  <div className="mx-12 flex flex-col md:mx-40">
    <Skeleton height={103} width={300} />
    <Skeleton
      height={42}
      width={400}
      className="mb-7 mt-7 max-md:hidden md:mb-12 md:mt-14"
    />
    <Skeleton height={42} className="mb-7 mt-7 md:mb-12 md:mt-14 md:hidden" />
    <Skeleton height={300} />
    <Skeleton
      height={39}
      width={380}
      className="mb-7 mt-8 max-md:hidden md:mb-14 md:mt-16"
    />
    <Skeleton height={39} className="mb-7 mt-8 md:mb-14 md:mt-16 md:hidden" />
    <div className="flex items-center justify-center">
      <Skeleton height={163} className="mb-3" />
    </div>
    <Skeleton
      height={100}
      width={380}
      className="mb-8 mt-10 max-md:hidden md:mb-16 md:mt-20"
    />
    <Skeleton height={100} className="mb-8 mt-10 md:mb-16 md:mt-20 md:hidden" />
    <div className="mb-4 md:mb-9">
      <EventGridSkeleton />
    </div>
    <Skeleton height={100} className="mb-8 mt-10 md:mb-16 md:mt-20 md:hidden" />
    <Skeleton
      height={100}
      width={380}
      className="mb-8 mt-10 max-md:hidden md:mb-16 md:mt-20"
    />
    <EventGridSkeleton />
  </div>
);

export const EventGridSkeleton = () => (
  <div className="flex gap-4 max-md:flex-col md:gap-8">
    {Array(3)
      .fill(null)
      .map(() => (
        <>
          <Skeleton height={220} className="md:hidden" />
          <Skeleton height={320} width={290} className="max-md:hidden" />
        </>
      ))}
  </div>
);
