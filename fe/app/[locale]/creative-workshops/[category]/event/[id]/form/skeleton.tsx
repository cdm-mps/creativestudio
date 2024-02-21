import Skeleton from "@components/Skeleton/Skeleton";

export const FormPageSkeleton = () => (
  <div className="mx-40 flex flex-col">
    <div className="flex items-center justify-between">
      <div>
        <Skeleton height={32} width={350} />
        <Skeleton height={72} width={404} className="mt-2" />
      </div>
      <div className="flex flex-col items-end justify-end">
        <Skeleton height={72} width={118} />
        <Skeleton height={39} width={90} className="mt-2" />
      </div>
    </div>
    <div className="mt-7 flex items-center">
      <Skeleton height={63} width={63} className="mr-4 rounded-[50%]" />
      <Skeleton height={27} width={249} />
    </div>
    <div className="mt-9 flex justify-center">
      <Skeleton height={70} width={480} />
    </div>
    <div className="mt-6 flex gap-8">
      <div className="w-2/3">
        <Skeleton height={754} />
      </div>
      <div className="w-1/3">
        <Skeleton height={440} />
      </div>
    </div>
  </div>
);
