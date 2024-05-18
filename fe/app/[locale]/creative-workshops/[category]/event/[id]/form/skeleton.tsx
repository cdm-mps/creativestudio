import Skeleton from "@components/Skeleton/Skeleton";

export const FormPageSkeleton = () => (
  <div className="mx-12 flex flex-col md:mx-40">
    <div className="flex md:items-center justify-between gap-5 max-md:flex-col">
      <div>
        <Skeleton height={32} className="md:hidden" />
        <Skeleton height={32} width={350} className="max-md:hidden" />
        <Skeleton height={72} className="mt-2 md:hidden" />
        <Skeleton height={72} width={404} className="mt-2 max-md:hidden" />
      </div>
      <div className="flex flex-col justify-end md:items-end">
        <Skeleton height={72} width={118} />
        <Skeleton height={39} width={90} className="mt-2" />
      </div>
    </div>
    <div className="mt-7 flex items-center">
      <Skeleton height={63} width={63} className="mr-4 rounded-[50%]" />
      <Skeleton height={27} className="md:hidden" />
      <Skeleton height={27} width={249} className="max-md:hidden" />
    </div>
    <div className="mt-4 flex justify-center max-md:flex-col md:mt-9">
      <Skeleton height={70} width={480} className="max-md:hidden" />
      <Skeleton height={70} className="md:hidden" />
    </div>
    <div className="mt-6 flex gap-8 max-md:flex-col">
      <div className="md:w-2/3">
        <Skeleton height={754} className="max-md:hidden" />
        <Skeleton height={254} className="md:hidden" />
      </div>
      <div className="md:w-1/3">
        <Skeleton height={440} className="max-md:hidden" />
        <Skeleton height={140} className="md:hidden" />
      </div>
    </div>
  </div>
);
