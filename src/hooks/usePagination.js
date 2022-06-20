export const DOTS = "...";

function usePagination(pageData) {
  // Destructure data from parameter
  const { currentPage, totalCount, pageSize } = pageData;
  // Upper bound on pagination
  const numPages = Math.ceil(totalCount / pageSize);

  // If current page is 1 or 2, we can display default format
  if (currentPage < 3) {
    return [1, 2, 3, DOTS, numPages];
  }

  // If current page is not a sibling of first page (page 3 or greater)
  // or current page is not within 1 page of last page
  if (currentPage >= 3 && currentPage < numPages - 1) {
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      numPages,
    ];
  }

  // If current page is second to last page
  if (numPages - currentPage === 1) {
    return [1, DOTS, currentPage - 1, currentPage, currentPage + 1];
  }

  // If current page is last page, we can display inverse of default format
  if (currentPage === numPages) {
    return [1, DOTS, currentPage - 2, currentPage - 1, currentPage];
  }

  /*
    This hook works by dynamically creating the pagination range.
    The number of pages is calculated using the number of blogs and
    page size. Based on what page the current user is on, the pagination
    may look different. Each current page has at least 2 siblings and
    the first and last pages are always visible.
  */
}

export default usePagination;
