'use client';

import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, Target } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  badge: string;
  author: string;
  published: string;
  url: string;
  image: string | StaticImageData;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "https://shadcnblocks.com",
  posts = [
    {
      id: "post-1",
      title: "Getting Started with shadcn/ui Components",
      summary:
        "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      badge: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "post-2",
      title: "Building Accessible Web Applications",
      summary:
        "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
      label: "Accessibility",
      badge: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "post-3",
      title: "Modern Design Systems with Tailwind CSS",
      summary:
        "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
      label: "Design Systems",
      badge: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "https://shadcnblocks.com",
      image: "/images/block/placeholder-dark-1.svg",
    },
  ],
}: Blog7Props) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Floating Icons */}
          <motion.div
            className="absolute top-5 right-5 text-pacific-cyan hidden lg:block"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <BookOpen className="w-16 h-16" />
          </motion.div>
          <motion.div
            className="absolute top-10 -left-4 text-yellow-green hidden lg:block"
            animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Lightbulb className="w-20 h-20" />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 right-20 text-xanthous hidden lg:block"
            animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Users className="w-14 h-14" />
          </motion.div>
          <motion.div
            className="absolute bottom-5 -left-20 text-pacific-cyan hidden lg:block"
            animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <Target className="w-16 h-16" />
          </motion.div>

          {/* Header Section with Icon */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Badge className="h-auto py-3 px-6 text-lg bg-xanthous text-raisin-black border-xanthous hover:bg-xanthous/90">
                {tagline}
              </Badge>
            </div>
          </div>

          {/* Large Headline with Color */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
            <span className="text-raisin-black">Blog </span>
            <span className="text-raisin-black">& </span>
            <span className="text-xanthous">Resources</span>
          </h1>

          {/* Body Text */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 w-full">
          {posts.map((post, index) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_auto_1fr_auto]">
              <div className="aspect-[16/9] w-full relative">
                <Link
                  href={post.url}
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center"
                  />
                </Link>
              </div>
              <div className="px-6 pt-6">
                <Badge 
                  className={`h-5 rounded-full px-3 font-normal ${
                    index === 0 ? 'bg-pacific-cyan/20 text-pacific-cyan border-pacific-cyan/30 hover:bg-pacific-cyan/20' :
                    index === 1 ? 'bg-yellow-green/20 text-yellow-green border-yellow-green/30 hover:bg-yellow-green/20' :
                    'bg-xanthous/20 text-xanthous border-xanthous/30 hover:bg-xanthous/20'
                  }`}
                >
                  {post.badge}
                </Badge>
              </div>
              <CardHeader className="pt-3">
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link href={post.url}>
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={post.url}
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
