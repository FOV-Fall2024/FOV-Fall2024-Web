import React from "react";
import { FoodList, Pagination } from "@/components";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

function MenuPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <div className="overflow-x-auto">
        <ul className="flex my-4 lg:gap-8 justify-center items-center lg:my-8 min-w-max ">
          <li>
            <Button
              asChild
              className={`bg-transparent text-black hover:bg-transparent text-lg ${
                category === "khaiVi" &&
                "border-solid border-2 border-[#CA9C5E]"
              }`}
            >
              <Link to={"/menu?category=khaiVi&page=1"}>Khai Vị</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className={`bg-transparent text-black hover:bg-transparent text-lg ${
                category === "monChinh" &&
                "border-solid border-2 border-[#CA9C5E]"
              }`}
            >
              <Link to={"/menu?category=monChinh&page=1"}>Món Chính</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className={`bg-transparent text-black hover:bg-transparent text-lg ${
                category === "trangMieng" &&
                "border-solid border-2 border-[#CA9C5E]"
              }`}
            >
              <Link to={"/menu?category=trangMieng&page=1"}>Tráng Miệng</Link>
            </Button>
          </li>
          <li>
            <Button
              asChild
              className={`bg-transparent text-black hover:bg-transparent text-lg ${
                category === "doUong" &&
                "border-solid border-2 border-[#CA9C5E]"
              }`}
            >
              <Link to={"/menu?category=doUong&page=1"}>Đồ Uống</Link>
            </Button>
          </li>
        </ul>
      </div>
      <FoodList />
      <Pagination totalPage={5} />
    </div>
  );
}

export default MenuPage;
