import { Select } from "antd";
import React, { useEffect } from "react";
import { Tag } from "./components/Tag/Tag";
import { useTranslations } from "next-intl";
import { FiltersProps } from "./Filters.models";

const Filters = ({ filters, result, setResult, onClick }: FiltersProps) => {
  const t = useTranslations("Components.Filters");

  useEffect(() => {
    setResult(
      filters.reduce(
        (prev, current) => {
          return { ...prev, [current.placeholder]: undefined };
        },
        {} as Record<string, string | undefined>,
      ),
    );
  }, []);

  const handleChange = (value: string, placeholder: string) => {
    setResult((prev: Record<string, string | undefined>) => ({
      ...prev,
      [placeholder]: value,
    }));
  };
  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-wrap items-center justify-end gap-4">
        {filters.map((filter, i) => (
          <Select
            key={i}
            optionFilterProp="children"
            onChange={(value) => handleChange(value, filter.placeholder)}
            value={result[filter.placeholder]}
            className="mb-3 w-80 uppercase md:w-96"
            popupClassName="uppercase"
            popupMatchSelectWidth={false}
            {...filter}
          />
        ))}
      </div>
      <div className="mb-6 mt-8 flex flex-wrap justify-end gap-4">
        {Object.keys(result).map((placeholder) => (
          <React.Fragment>
            {result[placeholder] && (
              <Tag
                label={result[placeholder]!}
                onClick={() => {
                  setResult((prev: Record<string, string | undefined>) => ({
                    ...prev,
                    [placeholder]: undefined,
                  }));
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <span
        className="cursor-pointer font-league-gothic text-xl uppercase underline hover:opacity-80"
        onClick={onClick}
      >
        {t("filter")}
      </span>
    </div>
  );
};

export default Filters;
