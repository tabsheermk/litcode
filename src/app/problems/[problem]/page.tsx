"use client";

import Topbar from "@/components/Topbar/Topbar";
import React from "react";

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  return (
    <div>
      <Topbar problemPage={true} />
      <h1>Problem Page</h1>
    </div>
  );
};

export default ProblemPage;
