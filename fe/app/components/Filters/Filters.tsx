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
  }, [filters, setResult]);

  function formatFilterResult(_key: string) {
    switch (_key) {
      case "eventType":
        return t(`Categories.${result[_key]}`);
      case "areaOfInterest":
        return t(`general.AreaOfInterest.${result[_key]}`);
      default:
        return result[_key];
    }
  }

  const handleChange = (value: string, _key: string) => {
    setResult((prev: Record<string, string | undefined>) => ({
      ...prev,
      [_key]: value,
    }));
  };

  return (
    <div className="flex flex-col items-start md:items-end">
      <div className="flex flex-wrap items-center gap-4 md:justify-end">
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
      <div className="mt-4 flex flex-wrap justify-end gap-4 md:mt-8">
        {Object.keys(result).map((_key) => (
          <React.Fragment key={"result_" + _key}>
            {result[_key] && (
              <Tag
                label={formatFilterResult(_key)!}
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
    </div>
  );
};

export default Filters;
