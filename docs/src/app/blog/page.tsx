import React from 'react'
import PageHeader from '../../../components/PageHeader'
import Link from 'next/link';
import BlogLink from '../../../components/BlogLink';

export default function Blog() {
  return (
    <div>
      <div className="h-14"></div>
      <PageHeader
        header="blog"
        text="I write about typically culture, language, and generally, philosophy. Feel free to contact me if a certain post interests you."
      />

      <div className="w-full pt-5 pb-10 min-h-96 bg-slate-200/75">
        <h1 className="font-mono font-extrabold text-4xl text-center mb-4">
          Articles
        </h1>
        <div className="text-left mx-72">
          <BlogLink link="/blog" date="14/6/2024" title="The attraction to Japanese as a language: How I got hooked into language-learning" />
          <BlogLink link="/blog" date="24/6/2024" title="Applying to MEXT" />
          <BlogLink link="/blog" date="12/6/2024" title="The Evolution of Social Media: From MySpace to TikTok" />
          <BlogLink link="/blog" date="18/6/2024" title="Exploring the Cosmos: My Journey into Amateur Astronomy" />
          <BlogLink link="/blog" date="20/6/2024" title="The Rise of Plant-Based Diets: Health and Environmental Benefits" />
          <BlogLink link="/blog" date="25/6/2024" title="Urban Gardening: How to Grow Your Own Vegetables in the City" />
          <BlogLink link="/blog" date="30/6/2024" title="Understanding Blockchain: Beyond Cryptocurrency" />
          <BlogLink link="/blog" date="2/7/2024" title="The Art of Mindfulness: Techniques for a Peaceful Life" />
          <BlogLink link="/blog" date="8/7/2024" title="Virtual Reality: Transforming the Way We Experience Entertainment" />
          <BlogLink link="/blog" date="14/7/2024" title="Sustainable Fashion: How to Build an Eco-Friendly Wardrobe" />
          <BlogLink link="/blog" date="19/7/2024" title="The Power of Storytelling: Crafting Narratives that Inspire" />
          <BlogLink link="/blog" date="24/7/2024" title="Renewable Energy: Innovations Shaping Our Future" />
          <BlogLink link="/blog" date="14/6/2024" title="The attraction to Japanese as a language: How I got hooked into language-learning" />
          <BlogLink link="/blog" date="24/6/2024" title="Applying to MEXT" />
          <BlogLink link="/blog" date="12/6/2024" title="The Evolution of Social Media: From MySpace to TikTok" />
          <BlogLink link="/blog" date="18/6/2024" title="Exploring the Cosmos: My Journey into Amateur Astronomy" />
          <BlogLink link="/blog" date="20/6/2024" title="The Rise of Plant-Based Diets: Health and Environmental Benefits" />
          <BlogLink link="/blog" date="25/6/2024" title="Urban Gardening: How to Grow Your Own Vegetables in the City" />
          <BlogLink link="/blog" date="30/6/2024" title="Understanding Blockchain: Beyond Cryptocurrency" />
          <BlogLink link="/blog" date="2/7/2024" title="The Art of Mindfulness: Techniques for a Peaceful Life" />
          <BlogLink link="/blog" date="8/7/2024" title="Virtual Reality: Transforming the Way We Experience Entertainment" />

        </div>
      </div>
    </div>
  );
}
