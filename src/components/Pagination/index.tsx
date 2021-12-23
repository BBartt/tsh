import React from "react";

interface IPagination {
  pages: number;
  currentPage: number;
  onPageChange: (num: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  pages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers: JSX.Element[] = [];
  let ellipsis: boolean = false;

  if (pages <= 1) {
    return null;
  }

  const addPageToArr = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <li
          onClick={() => onPageChange(i)}
          className={`pagination-item${currentPage === i ? " selected" : ""}`}
          key={i}
        >
          {i}
        </li>
      );
    }
  };

  if (pages > 7 && pages - currentPage >= 6) ellipsis = true;

  if (ellipsis) {
    let startPage = 1;
    let siblingPage = 3;

    if (currentPage - 1 > 0) {
      startPage = currentPage - 1;
      siblingPage = currentPage + 1;
    }

    addPageToArr(startPage, siblingPage);

    pageNumbers.push(
      <li className="elipsis" key="ellipsis">
        ...
      </li>
    );

    addPageToArr(pages - 2, pages);
  } else {
    if (pages <= 7) addPageToArr(1, pages);
    else addPageToArr(pages - 6, pages);
  }

  return (
    <ul className="pagination">
      <li
        className={`pagination-item-first${
          currentPage === 1 ? " disabled" : ""
        }`}
        onClick={() => currentPage !== 1 && onPageChange(1)}
      >
        First
      </li>
      {pageNumbers}
      <li
        className={`pagination-item-last${
          currentPage === pages ? " disabled" : ""
        }`}
        onClick={() => currentPage !== pages && onPageChange(pages)}
      >
        Last
      </li>
    </ul>
  );
};

export default Pagination;
