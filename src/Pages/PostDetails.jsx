import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getBlogPostBySlug } from "../utils/contentfulConfig";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

// Configure rich text rendering
const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="st-post-title" style={{ marginTop: '30px', marginBottom: '15px' }}>{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p style={{ marginBottom: '20px' }}>{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li style={{ marginBottom: '8px' }}>{children}</li>,
  },
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
  },
};

const PostDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        if (!slug) {
          setError('No post slug provided');
          setLoading(false);
          return;
        }
        const postData = await getBlogPostBySlug(slug);
        if (postData) {
          setPost(postData);
          // For now, we'll just set an empty array for related posts
          // You can implement fetching related posts based on tags or categories later
          setRelatedPosts([]);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    } else {
      setError('No post slug provided');
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading post...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <Link to="/blog" className="btn btn-primary mt-3">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container py-5 text-center">
        <h2>Post not found</h2>
        <Link to="/blog" className="btn btn-primary mt-3">
          Back to Blog
        </Link>
      </div>
    );
  }

  const postDate = post.date || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="st-content">
      <div
        className="st-page-heading st-dynamic-bg"
        style={{
          backgroundImage: `url('${post.img || 'https://res.cloudinary.com/db1i46uiv/image/upload/v1724352143/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display_1_lkpn2d.jpg'}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="st-page-heading-in text-center">
            <h4>
              <Link to="/blog" className="st-back-to-home">
                <Icon icon="ph:arrow-left-bold" />
                Back to Blog
              </Link>
            </h4>
            <h1 className="st-page-heading-title">
              {post.title || 'Untitled Post'}
            </h1>
            <div className="st-post-label">
              <span>
                By <Link to="#">{post.author || 'Dr. Hassan Bhojani'}</Link>
              </span>
              <span>{postDate}</span>
            </div>
          </div>
        </div>
      </div>
      {/* .st-page-heading */}
      <div className="st-height-b100 st-height-lg-b80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="st-post-details st-style1">
              {post.content ? (
                documentToReactComponents(post.content, RICHTEXT_OPTIONS)
              ) : (
                <p>No content available for this post.</p>
              )}
              
              <div className="st-height-b20 st-height-lg-b20" />
              <div className="st-height-b35 st-height-lg-b35" />
              <div className="st-height-b60 st-height-lg-b60" />
              
              {/* Navigation between posts can be implemented later */}
              <div className="st-post-btn-gropu">
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    // Implement previous post navigation
                  }}
                >
                  Previous Post
                </Link>
                <Link
                  to="#"
                  className="st-btn st-style2 st-color1 st-size-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    // Implement next post navigation
                  }}
                >
                  Next Post
                </Link>
              </div>
              <div className="st-height-b60 st-height-lg-b60" />
            </div>
          </div>
          
          {/* Sidebar with recent posts */}
          <div className="col-lg-4">
            <div className="st-widget st-sidebar-widget">
              <h3 className="st-widget-title">Recent Posts</h3>
              {relatedPosts.length > 0 ? (
                <ul className="st-post-widget-list st-mp0">
                  {relatedPosts.slice(0, 3).map((relatedPost) => (
                    <li key={relatedPost.id}>
                      <div className="st-post st-style1">
                        <Link to={`/blog/${relatedPost.id}`} className="st-post-thumb st-zoom">
                          <img 
                            src={relatedPost.img} 
                            alt={relatedPost.title} 
                            className="st-zoom-in"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/blog1.jpg';
                            }}
                          />
                        </Link>
                        <div className="st-post-info">
                          <h4 className="st-post-title">
                            <Link to={`/blog/${relatedPost.id}`}>
                              {relatedPost.title?.substring(0, 50)}{relatedPost.title?.length > 50 ? '...' : ''}
                            </Link>
                          </h4>
                          <div className="st-post-meta">
                            <span className="st-post-date">
                              {new Date(relatedPost.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No recent posts available.</p>
              )}
            </div>
            
            {/* Add more sidebar widgets as needed */}
            <div className="st-widget st-sidebar-widget st-border">
              <h3 className="st-widget-title">Categories</h3>
              <ul className="st-cat-list st-mp0">
                <li><Link to="#">Dental Health</Link></li>
                <li><Link to="#">Dental Procedures</Link></li>
                <li><Link to="#">Oral Hygiene</Link></li>
                <li><Link to="#">Dental Technology</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
