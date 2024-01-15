import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "About page",
  keywords: ["About", "Fausto", "Info"],
};
export default function AboutPage() {
  return <div className="text-7xl">AboutPage</div>;
}
