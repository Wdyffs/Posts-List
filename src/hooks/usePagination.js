import React, { useMemo } from "react";
import { getPagesArray } from "../utils/pages";

export function usePagination(totalPages) {
  const pagesArray = useMemo(() => {
    return getPagesArray(totalPages);
  }, [totalPages]);

  return pagesArray;
}
