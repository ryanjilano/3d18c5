import { useState } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  // Page size state - default to 15
  const [pageSize, setPageSize] = useState(15);
  // Current page state - default to 1
  const [curPage, setCurPage] = useState(1);

  // Pagination start
  const start = pageSize * curPage - pageSize;
  // Pagination end
  const end = pageSize * curPage;

  // Pagination length depends on start and end
  const currentPaginationData = blogs.posts.slice(start, end);

  // Set page size to the value clicked on and default to page 1
  const updateRowsPerPage = (pageSize) => {
    setPageSize(pageSize);
    setCurPage(1);
  };
  // Update current page
  const updatePage = (newPage) => setCurPage(newPage);

  return (
    <div>
      <Pagination
        currentPage={curPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        // Catch currentPage argument passed in from child component
        onPageChange={(newPage) => updatePage(newPage)}
        // Catch e.target.value passed in as argument from child component
        onPageSizeOptionChange={(pageSize) => updateRowsPerPage(pageSize)}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
