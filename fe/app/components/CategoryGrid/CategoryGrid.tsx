import CategoryElement from "@/app/components/CategoryElement/CategoryElement";

const CategoryGrid = () => {
  return (
    <div className="flex-col">
      <div className="flex">
        <CategoryElement category="edition" />
        <CategoryElement category="masterclass" />
        <CategoryElement category="creative-talks" />
      </div>
      <div className="flex">
        <CategoryElement category="workshop" />
        <CategoryElement category="artistic-residence" />
        <CategoryElement category="business-workshop" />
      </div>
    </div>
  );
};

export default CategoryGrid;
