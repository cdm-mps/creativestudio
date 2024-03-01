"use client";

import { Select } from "antd";
import React, { useEffect } from "react";
import { FiltersProps } from "./Filters.models";
import { Tag } from "./components/Tag/Tag";
import { useTranslations } from "next-intl";

const Filters = ({ filters, result, setResult }: FiltersProps) => {
  const t = useTranslations();

  useEffect(() => {
    setResult(
      filters.reduce(
        (prev, current) => {
          return { ...prev, [current._key]: undefined };
        },
        {} as Record<string, string | undefined>,
      ),
    );
  }, []);

  function formatFilterResult(label: string, _key: string) {
    switch (_key) {
      case "eventType":
        return t(`Categories.${label}`);
      case "areaOfInterest":
        return t(`general.AreaOfInterest.${label}`);
      default:
        return label;
    }
  }

  const handleChange = (label: string, _key: string) => {
    setResult((prev: Record<string, string | undefined>) => ({
      ...prev,
      [_key]: formatFilterResult(label, _key),
    }));
  };
  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-wrap items-center justify-end gap-4">
        {filters.map((filter, i) => (
          <Select
            key={"filter_" + i}
            optionFilterProp="children"
            onChange={(value) => handleChange(value, filter._key)}
            value={result[filter._key]}
            className="mb-3 w-80 uppercase md:w-96"
            popupClassName="uppercase"
            popupMatchSelectWidth={false}
            {...filter}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-end gap-4">
        {Object.keys(result).map((_key) => (
          <React.Fragment key={"result_" + _key}>
            {result[_key] && (
              <Tag
                label={result[_key]!}
                onClick={() => {
                  setResult((prev: Record<string, string | undefined>) => ({
                    ...prev,
                    [_key]: undefined,
                  }));
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* <span className="cursor-pointer font-league-gothic text-xl uppercase underline hover:opacity-80">
        {t("filter")}
      </span> */}
    </div>
  );
};

export default Filters;
