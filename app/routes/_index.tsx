import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Hero from "~/components/Hero";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <main className="bg-white">
      <Hero />
      <Link to="/blog">Blog</Link>
    </main>
  );
}
