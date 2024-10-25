"use client";
import { useEffect, useState } from "react";
import Header from "@/component/MainHeader";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [headerKey, setHeaderKey] = useState(pathname);

  useEffect(() => {
    setHeaderKey(pathname);
  }, [children, pathname]);

  return (
    <>
      <Header key={headerKey} /> {/* Forces re-render with updated key */}
      {children}
    </>
  );
}
