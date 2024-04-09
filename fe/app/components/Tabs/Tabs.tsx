import Divider from "@components/Divider/Divider";
import { PropsWithChildren } from "react";
import TabElement from "./TabElement/TabElement";
import { TabsProps } from "./Tabs.models";

const Tabs = ({
  tabs,
  category,
  selectedTab,
  setSelectedTab,
  children,
}: PropsWithChildren<TabsProps>) => {
  return (
    <div className="flex w-full">
      <div className="mt-40 flex w-[30%] flex-col items-start gap-20 pt-14">
        {tabs.map((e, i) => (
          <TabElement
            key={i}
            label={e}
            // className={clsx(i !== 0 && "ml-6 md:ml-28")}
            category={category}
            selected={selectedTab === i}
            onClick={() => setSelectedTab(i)}
          />
        ))}
      </div>
      <div className="flex w-[70%] gap-5 ">
        <Divider category={category} orientation="vertical" /> {children}
      </div>
    </div>
  );
};

export default Tabs;
