import { Link, useLocation, useSearchParams } from "react-router-dom";

function Pagination({ totalPage = 5 }: { totalPage: number }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const category = searchParams.get("category");

  return (
    <div>
      <ul className="flex my-8 items-center justify-center">
        {Array.from({ length: totalPage }, (_, index) => (
          <li key={index + 1}>
            {category ? (
              <Link
                to={`${location.pathname}?category=${category}&page=${
                  index + 1
                }`}
                className={`border border-solid border-[#e6e6e6] rounded-lg block px-4 py-2 mx-1 ${
                  currentPage === (index + 1).toString()
                    ? "bg-[#CA9C5E] text-white"
                    : "text-black"
                }`}
              >
                {index + 1}
              </Link>
            ) : (
              <Link
                to={`${location.pathname}?page=${index + 1}`}
                className={`border border-solid border-[#e6e6e6] rounded-lg block px-4 py-2 mx-1 ${
                  currentPage === (index + 1).toString()
                    ? "bg-[#CA9C5E] text-white"
                    : "text-black"
                }`}
              >
                {index + 1}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
