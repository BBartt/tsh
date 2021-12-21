import React from "react";

export const DOTS = "...";

const Pagination: React.FC<any> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}): any => {
  let paginationRange: number[] = [1, 2, 3, 5, 2, 2, 33];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={"pagination"}>
      <li className={"pagination-item"} onClick={onPrevious}>
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (String(pageNumber) === DOTS) {
          return (
            <li key={index + pageNumber} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            onClick={() => onPageChange(pageNumber)}
            className={"pagination-item"}
            key={index + pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className={"pagination-item"} onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
