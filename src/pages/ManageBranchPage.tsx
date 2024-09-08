import { BranchTable, Pagination } from "@/components";

function ManageBranchPage() {
  return (
    <>
      <BranchTable />
      <Pagination totalPage={1} />
    </>
  );
}

export default ManageBranchPage;
