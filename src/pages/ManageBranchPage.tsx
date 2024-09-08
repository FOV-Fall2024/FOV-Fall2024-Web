import { BranchTable, Pagination } from "@/components";
import React from "react";

function ManageBranchPage() {
  return (
    <>
      <BranchTable />
      <Pagination totalPage={1} />
    </>
  );
}

export default ManageBranchPage;
