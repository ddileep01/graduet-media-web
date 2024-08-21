"use client";
import { useParams } from "next/navigation";
import DetailedBlog from "@/components/Blog/detailedBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const BlogDetails = () => {
  const params = useParams();
  const id = params?.id;
  const blogId = Array.isArray(id) ? id[0] : id;
  const blog = blogData.find((blog) => blog.id === parseInt(blogId || ""));
  if (!blog) {
    return <p>blog not found</p>;
  }

  return (
    <>
      <Breadcrumb
        pageName={`blog ${blog.id} detailed View `}
        description={`Viewing blog "${blog.title}"`}
      />
      <div className="container">
        <DetailedBlog blog={blog} />
      </div>
    </>
  );
};

export default BlogDetails;
