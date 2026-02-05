import { createClient } from 'contentful';

// Debug log environment variables
console.log('Contentful Config:', {
  spaceId: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN ? '***TOKEN PRESENT***' : 'TOKEN MISSING',
  host: process.env.REACT_APP_CONTENTFUL_HOST || 'cdn.contentful.com'
});

if (!process.env.REACT_APP_CONTENTFUL_SPACE_ID || !process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN) {
  console.error('Missing required Contentful environment variables');
}

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  host: process.env.REACT_APP_CONTENTFUL_HOST || 'cdn.contentful.com'
});

export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      order: '-sys.createdAt', // Sort by creation date in descending order
      select: 'fields.title,fields.description,fields.image,fields.slug,sys.id,sys.createdAt' // Only fetch needed fields
    });
    
    return response.items.map(item => {
      const { title, description, image, slug } = item.fields;
      const postSlug = slug || (title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'untitled');
      
      return {
        id: item.sys.id,
        title: title || 'Untitled',
        slug: postSlug,
        img: image?.fields?.file?.url || 'images/blog1.jpg',
        date: new Date(item.sys.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: 'Dr Bhojani',
        authorLink: "",
        subTitle: description ? description.content[0]?.content[0]?.value?.substring(0, 100) + '...' : '',
        postLink: `/blog/${postSlug}`,
        content: description // Rich text content
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: 'blog',
      'fields.slug': slug,
      limit: 1
    });
    
    if (response.items.length > 0) {
      const entry = response.items[0];
      const { title, description, image } = entry.fields;
      
      return {
        id: entry.sys.id,
        title: title || 'Untitled',
        slug: slug,
        img: image?.fields?.file?.url || 'images/blog1.jpg',
        date: new Date(entry.sys.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: 'Dr Bhojani',
        content: description,
        // Add any other fields you need for the blog post detail page
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};
