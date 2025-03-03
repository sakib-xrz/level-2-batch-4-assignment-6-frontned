"use client";

import { ReactNode } from "react";
import { Navbar } from "@/components/shared/navbar";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}
