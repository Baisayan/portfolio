import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return <main className="min-h-screen">
    <Header />
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Hero />
    </div>
  </main>;
}
