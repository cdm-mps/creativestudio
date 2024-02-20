import Skeleton from "@components/Skeleton/Skeleton";

export const EventPageSkeleton = () => (
  <div className="mx-40 flex flex-col">
    <div className="flex justify-between">
      <div>
        <Skeleton height={32} width={229} />
        <Skeleton height={72} width={404} className="mt-2" />
      </div>
      <div className="flex flex-col items-end justify-end">
        <Skeleton height={72} width={118} />
        <Skeleton height={39} width={90} className="mt-2" />
        <Skeleton height={34} width={156} className="mt-2" />
      </div>
    </div>
    <Skeleton height={500} className="mt-16" />
    <Skeleton height={150} width={1130} className="mx-14 mt-16" />
    <div className="mx-14 mt-16 flex justify-between">
      <div className="flex items-center">
        <Skeleton height={63} width={63} className="mr-4 rounded-[50%]" />
        <Skeleton height={27} width={249} />
      </div>
      <Skeleton height={62} width={328} />
    </div>
    <Skeleton height={83} width={350} className="mx-14 mb-16 mt-20" />
    <div className="flex flex-col gap-8">
      {Array(3)
        .fill(null)
        .map(() => (
          <div className="mx-14 mt-1 flex items-center justify-between">
            <Skeleton height={52} width={52} className="mr-8" />
            <Skeleton height={28} width={193} className="mr-8" />
            <Skeleton height={2} className="mr-8" />
            <Skeleton height={35} width={100} />
          </div>
        ))}
    </div>
  </div>
);
