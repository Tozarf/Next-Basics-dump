import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "Pricing page",
  keywords: ["Pricing", "Price", "Cost", "Service", "Sale"],
};

export default function PricingPage() {
  return <div className="text-5xl">PricingPage</div>;
}
