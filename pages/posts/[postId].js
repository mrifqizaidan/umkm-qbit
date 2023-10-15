import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from "../components/navbar"; 

const BlogPostDetail = () => {
  const router = useRouter();
  const { postId } = router.query; // Mengambil ID posting dari URL

  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (postId) {
      // Ambil data blog post
      fetch(`https://gorest.co.in/public/v1/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => setPostData(data.data));

      // Ambil data komentar
      fetch(`https://gorest.co.in/public/v1/comments?post_id=${postId}`)
        .then((response) => response.json())
        .then((data) => setComments(data.data));
    }
  }, [postId]);

  return (
    <div>
      <Navbar/>
      <div className="flex items-center">
        <Link href="/">
          <img src="/synapsis_logo.png" alt="Synapsis Logo" className="w-20 h-20 cursor-pointer" />
        </Link>
      </div>
      {postData ? (
        <div>
          <h1 className="text-center text-4xl font-bold">Title: {postData.title}</h1>
          <br></br>
          <p className="font-bold">Description: {postData.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <br></br>
      {comments && comments.length > 0 ? (
        <div>
          <table className="w-full table-striped">
            <thead>
              <tr className="bg-black text-white">
                <th className="text-center px-4 py-2">Name</th>
                <th className="text-center px-4 py-2">Email</th>
                <th className="text-center px-4 py-2">Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment, index) => (
                <tr key={comment.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="text-center border px-4 py-2 text-black">{comment.name}</td>
                  <td className="text-center border px-4 py-2 text-black">{comment.email}</td>
                  <td className="text-center border px-4 py-2 text-black">{comment.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No comments yet, come back later!</p>
      )}
    </div>
  );
};

export default BlogPostDetail;
