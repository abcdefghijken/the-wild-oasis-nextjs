"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/"; // Hard refresh to the homepage
  }, []);

  return <p>Signing you out...</p>;
}
