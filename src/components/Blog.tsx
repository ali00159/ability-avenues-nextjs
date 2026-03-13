import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Blog7 } from "@/components/ui/blog7";
const Blog = () => {
  const blogData = {
    tagline: "Latest Updates",
    heading: "Blog & Resources",
    description:
      "Stay informed with the latest insights on ABA therapy, child development, and evidence-based treatment approaches. Discover helpful resources for families navigating autism spectrum disorders.",
    buttonText: "Explore all posts",
    buttonUrl: "/blog",
    posts: [
      {
        id: "how-to-choose-aba-provider-minnesota",
        title: "How to Choose an ABA Therapy Provider in Minnesota: A Parent's Checklist",
        summary:
          "Learn how to choose the right ABA therapy provider in Minnesota. A parent's guide to credentials, insurance, EIDBI, and key questions to ask before starting.",
        label: "Education",
        badge: "ABA Services",
        author: "Ability Avenues Team",
        published: "13 Mar 2026",
        url: "/blog/how-to-choose-aba-provider-minnesota",
        image: "/images/blog-placeholder.jpg",
      },
      {
        id: "early-signs-autism-toddlers-minnesota",
        title: "Early Signs of Autism in Toddlers: A Minnesota Parent's Guide",
        summary:
          "Learn the early signs of autism in toddlers, when to talk to your pediatrician, and how Minnesota families can access screening, evaluation, and support.",
        label: "Education",
        badge: "Autism Awareness",
        author: "Ability Avenues Team",
        published: "7 Mar 2026",
        url: "/blog/early-signs-autism-toddlers-minnesota",
        image: "/images/early-signs-blog-cover.png",
      },
      {
        id: "what-is-eidbi-minnesota",
        title: "What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families",
        summary:
          "Wondering what EIDBI is in Minnesota? Learn how this autism benefit works, who qualifies, and how it helps Minneapolis families access ABA and related supports.",
        label: "Education",
        badge: "EIDBI",
        author: "Ability Avenues Team",
        published: "15 Jan 2025",
        url: "/blog/what-is-eidbi-minnesota",
        image: "/images/what-is-eidbi-blog.png",
      },
      {
        id: "eidbi-vs-aba-minnesota",
        title: "EIDBI vs ABA: How Minnesota's Program Helps Families Access ABA Therapy",
        summary:
          "Confused by EIDBI vs ABA? See how Minnesota's EIDBI benefit helps families access ABA therapy, what's covered, and simple next steps in Minneapolis.",
        label: "Education",
        badge: "EIDBI",
        author: "Ability Avenues Team",
        published: "5 Nov 2025",
        url: "/blog/eidbi-vs-aba-minnesota",
        image: "/images/eidbi-blog-cover.jpg",
      },
      {
        id: "in-home-vs-center-based-aba-minneapolis",
        title: "What's the Difference Between In-Home and Center-Based ABA Therapy?",
        summary:
          "We compare in-home vs center-based ABA—pros/cons, who thrives where, and a simple checklist to choose what fits your family.",
        label: "Education",
        badge: "ABA Services",
        author: "Ability Avenues Team",
        published: "5 Nov 2025",
        url: "/blog/in-home-vs-center-based-aba-minneapolis",
        image: "/images/center-based-vs-in-home-blog-cover.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Blog7 {...blogData} />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
