import Skeleton from "@components/Skeleton/Skeleton";

export const CategoryPageSkeleton = () => (
  <div className="mx-40 flex flex-col">
    <Skeleton height={103} width={300} />
    <Skeleton height={42} width={400} className=" mb-12 mt-14" />
    <Skeleton height={300} />
    <Skeleton height={39} width={380} className="mb-14 mt-16" />
    <div className="flex items-center justify-center">
      <Skeleton height={163} className="mb-3" />
    </div>
    <Skeleton height={100} width={380} className="mb-16 mt-20" />
    <div className="mb-9">
      <EventGridSkeleton />
    </div>
    <Skeleton height={100} width={380} className="mb-16 mt-20" />
    <EventGridSkeleton />
  </div>
);

export const EventGridSkeleton = () => (
  <div className="flex gap-8">
    {Array(3)
      .fill(null)
      .map(() => (
        <Skeleton height={320} width={290} />
      ))}
  </div>
);
