import React, { useState, useEffect } from 'react';
import PostWrapper from "../Components/Post/PostWrapper";
import { Helmet } from 'react-helmet-async';
import { getBlogPosts } from '../utils/contentfulConfig';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await getBlogPosts();
        setPosts(blogPosts);
      } catch (err) {
        console.error('Failed to fetch blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        {error}
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Read Our Expert Tips, Guides & Dental Blogs</title>
        <meta name="description" content="Explore expert dental tips, guides, and blogs created to help you maintain a healthy and confident smile. Read our latest articles now." />
      </Helmet>
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>

      {posts.length > 0 ? (
        <PostWrapper data={posts} />
      ) : (
        <div className="text-center py-5">
          <p>No blog posts found.</p>
        </div>
      )}
      <div className="st-height-b125 st-height-lg-b80" id="home"></div>
    </>
  );
}
