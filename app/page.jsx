"use client";

import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4">AutoWealth AI Reports</h1>
      <p className="text-lg mb-6 max-w-xl text-center">
        Our AI scans global trends and releases data-driven mini reports with instant micro-investment alerts.
        Subscribe once — lifetime access to rotating strategies.
      </p>

      {!showContent && (
        <>
          <div id="paypal-container-WU4R32EETBY98" className="mb-6"></div>
          <Button onClick={() => setShowContent(true)} className="text-white bg-black px-6 py-2 rounded-xl">
            Skip Payment (Preview Sample)
          </Button>
        </>
      )}

      {showContent && (
        <div className="grid gap-4 max-w-xl w-full">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-2xl font-semibold">Trending Asset Snapshot</h2>
              <p className="text-sm text-gray-700">
                June 2025: Our AI identified a +312% opportunity in micro-cap AI robotics via $BOTH token. Estimated hold window: 14 days.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">What's Next?</h2>
              <p className="text-sm">
                Full access includes 3x weekly drops with pre-screened signals, market bias summaries, and capital-preserving fallback recommendations.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
