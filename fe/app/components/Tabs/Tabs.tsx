import React, { PropsWithChildren, useEffect, useState } from "react";
import TabElement from "./TabElement/TabElement";
import { TabsProps } from "./Tabs.models";
import clsx from "clsx";

const Tabs = ({
  tabs,
  category,
  selectedTab,
  setSelectedTab,
  children,
}: PropsWithChildren<TabsProps>) => {
  return (
    <>
      <div className="my-3 flex items-center justify-center">
        {tabs.map((e, i) => (
          <TabElement
            key={i}
            label={e}
            className={clsx(i !== 0 && "ml-6 md:ml-28")}
            category={category}
            selected={selectedTab === i}
            onClick={() => setSelectedTab(i)}
          />
        ))}
      </div>
      {children}
    </>
  );
};

export default Tabs;
