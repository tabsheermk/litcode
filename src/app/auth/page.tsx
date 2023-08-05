"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import AuthModal from "@/components/Modals/AuthModal";
import { useRecoilValue } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const authModal = useRecoilValue(authModalState);

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="Hero" />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};
export default page;