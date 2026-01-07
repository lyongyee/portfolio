'use client';

import Image from "next/image";
import { useEffect } from 'react';
import HomeContainer from "./components/home";
import WorksContainer from "./components/works";

export default function Home() {
  return (
    
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex flex-col w-full px-8 sm:px-16">
        <HomeContainer />
        <WorksContainer />
      </main>
    </div>
  );
}