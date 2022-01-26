import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </article>
          ))
        }
      </ul>
      <p>My cool posts will go in here</p>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        id
        slug
        body
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
      }
    }
  }
`;

export default BlogPage