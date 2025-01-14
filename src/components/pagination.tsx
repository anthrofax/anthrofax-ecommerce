"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface PropsType {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}

function Pagination({ currentPage, hasNext, hasPrev }: PropsType) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function createNewUrl(targetPage: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", targetPage.toString());

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-accent text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasPrev}
        onClick={() => createNewUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-accent text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-200"
        disabled={!hasNext}
        onClick={() => createNewUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;