import path from 'path';

async function turnPhotosIntoPages({ graphql, actions }) {
  const PhotoTemplate = path.resolve('./src/templates/Photos.js');
  const { data } = await graphql(`
    query {
      photos: allSanityPhotos {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.photos.nodes.forEach((photo) =>
    actions.createPage({
      path: `/${photo.slug.current}`,
      component: PhotoTemplate,
      context: {
        slug: photo.slug.current,
      },
    })
  );
}

async function turnPostsIntoPages({ graphql, actions }) {
  const PostTemplate = path.resolve('./src/templates/Posts.js');
  const { data } = await graphql(`
    query {
      posts: allSanityPosts {
        nodes {
          caption
          slug {
            current
          }
        }
      }
    }
  `);
  data.posts.nodes.forEach((post) =>
    actions.createPage({
      path: `/${post.slug.current}`,
      component: PostTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  );
}

export async function createPages(params) {
  await Promise.all([turnPhotosIntoPages(params), turnPostsIntoPages(params)]);
}
