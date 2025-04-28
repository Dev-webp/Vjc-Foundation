import React from 'react'
import { blogPosts } from "../components/BlogData/BlogData";
import BlogList from '../components/BlogBox/BlogBox';

const page = () => {
  return (
  <>
  <BlogList posts={blogPosts} />
  </>
  )
}

export default page