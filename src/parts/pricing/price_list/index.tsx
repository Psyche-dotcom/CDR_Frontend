import PackageCard from "@/components/Card/package_card";
import { Package } from "@/interface/component";

interface PricingListProps {
  displayType: boolean; // true for annual, false for monthly
  monthlyPackages: any;
  annualPackages: any;
}

const PricingList: React.FC<PricingListProps> = ({
  displayType,
  monthlyPackages,
  annualPackages,
}) => {
  console.log("display type", displayType);
  return (
    <>
      {displayType ? (
        <>
          {annualPackages?.$values.length > 0 &&
            annualPackages.$values.map((item: any) => {
              const matchingMonthlyPackage = monthlyPackages?.$values.find(
                (x: any) => x.simultaneousCalls === item.simultaneousCalls
              );
              return (
                <PackageCard
                  key={item.name}
                  packageItem={item}
                  discountPackage={matchingMonthlyPackage} // for showing the monthly comparison
                />
              );
            })}
        </>
      ) : (
        <>
          {monthlyPackages?.$values.length > 0 &&
            monthlyPackages.$values.map((item: any) => (
              <PackageCard key={item.name} packageItem={item} />
            ))}
        </>
      )}
    </>
  );
};

export default PricingList;
