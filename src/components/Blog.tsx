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
        id: "post-1",
        title: "Understanding ABA Therapy: A Parent's Guide",
        summary:
          "Learn the fundamentals of Applied Behavior Analysis and how it can help your child develop essential skills through positive reinforcement and evidence-based interventions.",
        label: "Education",
        badge: "ABA Therapy",
        author: "STEP Program Team",
        published: "15 Jan 2025",
        url: "/blog/understanding-aba-therapy",
        image: "/images/therapy-session.jpg",
      },
      {
        id: "post-2",
        title: "The Benefits of Center-Based Therapy Programs",
        summary:
          "Discover why center-based therapy offers unique advantages for children with autism, including structured environments, peer interaction, and comprehensive support services.",
        label: "Programs",
        badge: "Center-Based",
        author: "STEP Program Team",
        published: "10 Jan 2025",
        url: "/blog/center-based-therapy-benefits",
        image: "/images/team-collaboration.jpg",
      },
      {
        id: "post-3",
        title: "Building Social Skills Through Play",
        summary:
          "Explore how therapeutic play activities can enhance communication, emotional regulation, and social interaction skills in children on the autism spectrum.",
        label: "Development",
        badge: "Social Skills",
        author: "STEP Program Team",
        published: "5 Jan 2025",
        url: "/blog/social-skills-through-play",
        image: "/images/hero-family-therapy.jpg",
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
