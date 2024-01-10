import { DetailsProps } from "@components/Details/Details.models";
import Divider from "@components/Divider/Divider";
import { useTranslations } from "next-intl";

const Details = ({
  entity,
  paymentReference,
  descriptive,
  amount,
  category,
}: DetailsProps) => {
  const t = useTranslations("Components.Details");
  return (
    <div className="flex gap-5">
      <Divider orientation="vertical" category={category} />
      <div className="flex flex-col gap-2">
        <p className="flex gap-1 text-sm">
          <span className="font-bold">{t("entity")}:</span>
          {entity}
        </p>
        <p className="flex gap-1 text-sm">
          <span className="font-bold">{t("paymentReference")}:</span>
          {paymentReference}
        </p>
        <p className="flex gap-1 text-sm">
          <span className="font-bold">{t("descriptive")}:</span>
          {descriptive}
        </p>
        <p className="flex gap-1 text-sm">
          <span className="font-bold">{t("amount")}:</span>
          {amount}€
        </p>
      </div>
    </div>
  );
};

export default Details;
