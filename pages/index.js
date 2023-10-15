import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Navbar from "./components/navbar";

export default function Posts() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/posts")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        router.push("/error");
      });
  }, []);

  const calculateTotalPages = () => {
    return Math.ceil(posts.length / postsPerPage);
  };

  const getPostsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderTable = () => {
    const postsForCurrentPage = getPostsForCurrentPage();

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Title</th>
            <th className="text-center">Description</th>
          </tr>
        </thead>
        <tbody>
          {postsForCurrentPage.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link href={`/posts/${post.id}`}>
                  <div className="text-blue-500 underline cursor-pointer">
                    {post.title}
                  </div>
                </Link>
              </td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const renderPagination = () => {
    const totalPages = calculateTotalPages();

    return (
      <div className="flex justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`btn btn-primary ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <img
          src="/synapsis_logo.png"
          alt="Company Logo"
          className="w-20 h-20 mr-5"
        />
        <h1 className="text-center fw-bold display-5 justify-center">
          BLOG POST LIST
        </h1>
      </div>
      <h1 className="fw-bold display-7">Muhammad Rifqi Zaidan</h1>
      <h1 className="fw-bold display-8">Universitas Diponegoro</h1>
      <br />
      {renderTable()}
      {renderPagination()}
    </div>
  );
}
