"use client";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import { CustomButton } from "./CustomButton";

export const ShowMore = ({
  pageNumber,
  isNext,
}: {
  pageNumber: number;
  isNext: boolean;
}) => {
  const router = useRouter();

  const onShowMore = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathname, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          containerStyles="bg-primary-red rounded-full text-white"
          handleClick={onShowMore}
        />
      )}
      ;
    </div>
  );
};
