import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({ totalPages, currentPage, changeCurrentPage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="pagination__wrapper">
      {pagesArray.map((page) => {
        return (
          <span
            onClick={() => changeCurrentPage(page)}
            className={page === currentPage ? "page page__current" : "page"}
            key={page}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
