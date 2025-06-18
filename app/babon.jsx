"use client";
import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function BABON() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=BAAG1AlZ_Q6xs2F5yto8CuUvbG83TAUia7XzprbySnTFEBXCyfDni9rCqOpbuRg2kb5KIRDT_d5N-ZJTnM&components=hosted-buttons&enable-funding=venmo&currency=USD";
      script.onload = () => {
        window.paypal.HostedButtons({ hostedButtonId: "WU4R32EETBY98" }).render("#paypal-container-WU4R32EETBY98");
      };
      document.body.appendChild(script);
    }
  }, [submitted]);

  return (
    <div className="p-4 grid gap-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center">BABON - Be A Business Owner Now</h1>
      {!submitted && <div id="paypal-container-WU4R32EETBY98" className="mt-4" />}
    </div>
  );
}
