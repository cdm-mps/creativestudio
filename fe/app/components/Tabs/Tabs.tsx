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
    <div className="flex max-md:flex-col md:gap-12 gap-3">
      <div className="flex flex-shrink-0 flex-grow flex-col items-start md:gap-6 md:pt-14 ">
        {tabs.map((e, i) => (
          <TabElement
            key={i}
            label={e}
            category={category}
            selected={selectedTab === i}
            onClick={() => setSelectedTab(i)}
          />
        ))}
      </div>
      <div className="flex flex-shrink flex-grow-0">{children}</div>
    </div>
  );
};

export default Tabs;
