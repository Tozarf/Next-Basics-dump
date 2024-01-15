import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "Contact page",
  keywords: ["Contact", "Info", "Email", "Phone", "Location"],
};
export default function ContactPage() {
  return <div className="text-5xl">ContactPage</div>;
}
