import Skeleton from "@components/Skeleton/Skeleton";

export const EventPageSkeleton = () => (
  <div className="mx-12 flex flex-col md:mx-40">
    <div className="flex justify-between max-md:flex-col">
      <div>
        <Skeleton height={32} width={229} />
        <Skeleton height={72} className="mt-2 max-md:hidden" />
        <Skeleton height={72} className="mt-2 md:hidden" />
      </div>
      <div className="mt-6 flex flex-col justify-end md:items-end">
        <Skeleton height={72} width={118} />
        <Skeleton height={39} width={90} className="mt-1 md:mt-2" />
        <Skeleton height={34} width={156} className="mt-1 md:mt-2" />
      </div>
    </div>
    <Skeleton height={500} className="mt-8 md:mt-16" />
    <Skeleton
      height={150}
      width={1130}
      className="mx-4 mt-8 max-md:hidden md:mx-14 md:mt-16"
    />
    <Skeleton height={150} className="mx-4 mt-8 md:mx-14 md:mt-16 md:hidden" />
    <div className="mx-4 mt-8 flex justify-between max-md:flex-col md:mx-14 md:mt-16">
      <div className="flex items-center max-md:mb-6">
        <Skeleton
          height={63}
          width={63}
          className="mr-2 rounded-[50%] md:mr-4"
        />
        <Skeleton height={27} width={249} className="max-md:hidden" />
        <Skeleton height={27} className="md:hidden" />
      </div>
      <Skeleton height={62} width={328} className="max-md:hidden" />
      <Skeleton height={62} className="md:hidden" />
    </div>
    <Skeleton
      height={83}
      width={350}
      className="mx-4 mb-8 mt-10 max-md:hidden md:mx-14 md:mb-16 md:mt-20"
    />
    <Skeleton
      height={83}
      className="mx-4 mb-8 mt-10 md:mx-14 md:mb-16 md:mt-20 md:hidden"
    />
    <div className="flex flex-col gap-4 md:gap-8">
      {Array(3)
        .fill(null)
        .map(() => (
          <div className="mx-4 mt-1 flex items-center justify-between md:mx-14">
            <Skeleton height={52} width={52} className="mr-4 md:mr-8" />
            <Skeleton height={28} width={100} className="md:mr-8 md:hidden" />
            <Skeleton height={28} width={193} className="md:mr-8 max-md:hidden" />
            <Skeleton height={2} className="mr-4 md:mr-8" />
            <Skeleton height={35} width={100} className="max-md:hidden" />
            <Skeleton height={35} width={80} className="md:hidden" />
          </div>
        ))}
    </div>
  </div>
);
