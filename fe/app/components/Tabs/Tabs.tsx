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
    <div className="flex gap-12">
      <div className="flex flex-shrink-0 flex-grow flex-col items-start gap-6 pt-14">
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
