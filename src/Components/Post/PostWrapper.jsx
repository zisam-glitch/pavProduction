import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Post from './Post';

const PostWrapper = ({ data }) => {
  const post = data.slice(0, 3);
  return (
    <section id="blog">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading title="Read Latest Articles"
        subTitle="Discover the latest news and insights on oral health, cosmetic dentistry, and more at <br/> Pav Dental's blog. Stay informed and improve your smile!" />
      <div className="container">
        <div className="row">
          {
            post.map((element, index) => (
              <Post {...element} key={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PostWrapper;
