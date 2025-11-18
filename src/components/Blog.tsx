import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Blog7 } from "@/components/ui/blog7";
import centerBasedImage from "@/assets/center-based-vs-in-home-blog-cover.jpg";
import eidbiImage from "@/assets/eidbi-blog-cover.jpg";
import whatIsEidbiImage from "@/assets/what-is-eidbi-blog.jpg";

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
        id: "what-is-eidbi-minnesota",
        title: "What Is EIDBI in Minnesota? A Plain-English Guide for Minneapolis Families",
        summary:
          "Wondering what EIDBI is in Minnesota? Learn how this autism benefit works, who qualifies, and how it helps Minneapolis families access ABA and related supports.",
        label: "Education",
        badge: "EIDBI",
        author: "Ability Avenues Team",
        published: "15 Jan 2025",
        url: "/blog/what-is-eidbi-minnesota",
        image: whatIsEidbiImage,
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
        image: eidbiImage,
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
        image: centerBasedImage,
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
