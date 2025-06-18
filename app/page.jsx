"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAG1AlZ_Q6xs2F5yto8CuUvbG83TAUia7XzprbySnTFEBXCyfDni9rCqOpbuRg2kb5KIRDT_d5N-ZJTnM&components=hosted-buttons&enable-funding=venmo&currency=USD";
    script.onload = () => {
      window.paypal
        .HostedButtons({
          hostedButtonId: "WU4R32EETBY98",
        })
        .render("#paypal-container-WU4R32EETBY98");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-extrabold mb-4 text-center">💼 Passive AI Business Kit</h1>

      <p className="text-md mb-6 max-w-xl text-center">
        Pay once. Receive weekly AI-generated micro-business kits, branding, and marketing packs.
        Zero experience needed. This is your passive business engine.
      </p>

      <div id="paypal-container-WU4R32EETBY98" className="mb-6" />

      <Card className="mb-4 w-full max-w-xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🔍 What's Included:</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>20 AI-researched niche business kits</li>
            <li>Logos, names, and brand design ideas</li>
            <li>Landing page and email copy</li>
            <li>Marketing templates + promo captions</li>
            <li>3x bonus kits: trending tokens, low cap gems, micro SaaS</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full max-w-xl">
        <CardContent className="p-4 text-sm text-gray-700">
          Delivered within 12 hours via private link. No upsells. No subscriptions. Just lifetime access to your first launch engine.
        </CardContent>
      </Card>
    </div>
  );
}
