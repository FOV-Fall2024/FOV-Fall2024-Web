import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Minus, Plus, ShoppingCart } from "lucide-react";

function FoodDetailPage() {
  const { foodId } = useParams<{ foodId: string }>();
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const ingredients = [
    "Fresh salmon fillet ",
    "Unsalted butter ",
    "Fresh lemon juice ",
    "Lemon zest ",
    "Garlic ",
    "Fresh dill ",
    "Salt",
    "Black pepper",
    "Olive oil ",
    "White wine ",
    "Capers ",
    "Shallot ",
    "Dijon mustard ",
    "Heavy cream ",
    "Parsley ",
    "Lemon slices ",
    "Asparagus spears ",
    "Cherry tomatoes ",
    "Baby spinach ",
    "Parmesan cheese ",
    "Pine nuts ",
    "Balsamic glaze ",
  ];

  return (
    // <div className="container p-4 grid grid-cols-1 place-content-center lg:grid-cols-2">
    //   <Carousel className="w-full max-w-xl h-fit">
    //     <CarouselContent>
    //       {Array.from({ length: 5 }).map((_, index) => (
    //         <CarouselItem key={index}>
    //           <div className="aspect-square w-full max-w-2xl mx-auto overflow-hidden rounded-lg">
    //             <img
    //               src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/6a0df908-a609-43ba-a1bd-8cf07c019ff0/bun-cha-gio-chay-jpg"
    //               alt="Bún chả giò chay"
    //               className="object-cover w-full h-full"
    //             />
    //           </div>
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselPrevious />
    //     <CarouselNext />
    //   </Carousel>

    //   <Card className="border-none">
    //     <CardHeader className="py-0">
    //       <CardTitle className="text-2xl font-bold">Bún chả giò chay</CardTitle>
    //     </CardHeader>
    //     <CardContent className="space-y-6">
    //       <div>25.000đ</div>
    //       <div>
    //         <div className="flex items-center gap-4">
    //           <div className="flex items-center gap-2">
    //             <Button
    //               variant="outline"
    //               size="icon"
    //               onClick={decreaseQuantity}
    //               aria-label="Decrease quantity"
    //             >
    //               <Minus className="h-4 w-4" />
    //             </Button>
    //             <span className="w-12 text-center text-lg font-semibold">
    //               {quantity}
    //             </span>
    //             <Button
    //               variant="outline"
    //               size="icon"
    //               onClick={increaseQuantity}
    //               aria-label="Increase quantity"
    //             >
    //               <Plus className="h-4 w-4" />
    //             </Button>
    //           </div>
    //           <Button>
    //             <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
    //           </Button>
    //         </div>
    //         <div>
    //           <h3 className="text-lg font-semibold mb-2">Chi tiết sản phẩm</h3>
    //           <p className="text-gray-600">
    //             Với màu sắc và nguyên liệu đa dạng, món Bún chả giò chay không
    //             chỉ bắt mắt về hình thức mà vị còn ngon tuyệt. Sẵn sàng chinh
    //             phục những em nhỏ kén ăn. Điều đặc biệt nhất là món ăn vẫn giữ
    //             được màu sắc tự nhiên của từng nguyên liệu. Không chỉ ngon miệng
    //             mà còn rất tốt cho sức khỏe vì được làm từ các loại rau củ tự
    //             nhiên. Bạn có thể hoàn toàn yên tâm khi sử dụng. Không cần tìm
    //             đâu xa, Tiệm Chay đã mang Bún chả giò chay đến rồi! Vừa ngon vừa
    //             túi tiền với sự thuận lợi của việc mua sắm trực tuyến, nó sẽ có
    //             mặt ngay trước cửa nhà bạn!
    //           </p>
    //         </div>
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold mb-2">Thành phần món ăn</h3>
    //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //           {Array.from({ length: Math.ceil(ingredients.length / 10) }).map(
    //             (_, columnIndex) => (
    //               <ul
    //                 key={columnIndex}
    //                 className="list-disc list-inside space-y-1 text-gray-600"
    //               >
    //                 {ingredients
    //                   .slice(columnIndex * 10, (columnIndex + 1) * 10)
    //                   .map((ingredient, index) => (
    //                     <li key={index}>{ingredient}</li>
    //                   ))}
    //               </ul>
    //             )
    //           )}
    //         </div>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="container p-4 grid grid-cols-1 place-items-center lg:grid-cols-2 lg:place-items-start">
      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-xl h-fit relative">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square w-full mx-auto overflow-hidden rounded-lg">
                <img
                  src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/6a0df908-a609-43ba-a1bd-8cf07c019ff0/bun-cha-gio-chay-jpg"
                  alt="Bún chả giò chay"
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10" />
      </Carousel>

      <Card className="border-none w-full max-w-xs sm:max-w-sm md:max-w-lg">
        <CardHeader className="lg:py-0">
          <CardTitle className="text-2xl font-bold">Bún chả giò chay</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-xl font-medium">25.000đ</div>
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-lg font-semibold">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="bg-[#CA9C5E] hover:bg-[#bd9158]">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 border-b pb-2">
                Chi tiết sản phẩm
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                Với màu sắc và nguyên liệu đa dạng, món Bún chả giò chay không
                chỉ bắt mắt về hình thức mà vị còn ngon tuyệt. Sẵn sàng chinh
                phục những em nhỏ kén ăn. Điều đặc biệt nhất là món ăn vẫn giữ
                được màu sắc tự nhiên của từng nguyên liệu. Không chỉ ngon miệng
                mà còn rất tốt cho sức khỏe vì được làm từ các loại rau củ tự
                nhiên. Bạn có thể hoàn toàn yên tâm khi sử dụng. Không cần tìm
                đâu xa, Tiệm Chay đã mang Bún chả giò chay đến rồi! Vừa ngon vừa
                túi tiền với sự thuận lợi của việc mua sắm trực tuyến, nó sẽ có
                mặt ngay trước cửa nhà bạn!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 border-b pb-2">
              Thành phần món ăn
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: Math.ceil(ingredients.length / 10) }).map(
                (_, columnIndex) => (
                  <ul
                    key={columnIndex}
                    className="list-disc list-inside space-y-2 text-gray-700"
                  >
                    {ingredients
                      .slice(columnIndex * 10, (columnIndex + 1) * 10)
                      .map((ingredient, index) => (
                        <li key={index} className="leading-relaxed">
                          {ingredient}
                        </li>
                      ))}
                  </ul>
                )
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FoodDetailPage;
