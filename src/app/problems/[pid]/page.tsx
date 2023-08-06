"use client";

import Topbar from "@/components/Topbar/Topbar";
import Workspace from "@/components/Workspace/Workspace";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import React from "react";

type ProblemPageProps = {
  problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
  console.log(problem);
  return (
    <div>
      <Topbar problemPage={true} />
      <Workspace problem={problem} />
    </div>
  );
};

export default ProblemPage;

//fetch the local data from the API
// SSG: Static Site Generation
// getStaticPaths: it creates the dynamic routes
export async function getStaticPaths() {
  const paths = Object.keys(problems).map((key) => ({
    params: { pid: key },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

//getStaticProps: it fetches the data for each route
export async function getStaticProps({ params }: { params: { pid: string } }) {
  const { pid } = params;
  const problem = problems[pid];
  if (!problem) {
    return {
      notFound: true,
    };
  }

  problem.handlerFunction = problem.handlerFunction.toString();

  return {
    props: {
      problem,
    },
  };
}
