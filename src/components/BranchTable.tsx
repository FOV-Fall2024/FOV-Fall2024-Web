import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreHorizontal, Edit, PowerOff } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function BranchTable() {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restaurantCode: "RES01",
      restaurantPhoneNumber: "0378301007",
      restaurantName:
        "Chay Garden Vegetarian Restaurant & Coffee - Nhà hàng chay quận 3",
      address: "52 Võ Văn Tần, Phường 6, Quận 3, TP.Hồ Chí Minh",
      status: "Active",
    },
    {
      id: 2,
      restaurantCode: "RES02",
      restaurantPhoneNumber: "0365412896",
      restaurantName: "Shamballa Vegetarian Restaurant & Tea House",
      address: "17-19 Trịnh Văn Cấn, St, Quận 1, TP.Hồ Chí Minh",
      status: "Active",
    },
    {
      id: 3,
      restaurantCode: "RES02",
      restaurantPhoneNumber: "0365412896",
      restaurantName: "Shamballa Vegetarian Restaurant & Tea House",
      address: "17-19 Trịnh Văn Cấn, St, Quận 1, TP.Hồ Chí Minh",
      status: "Active",
    },
    {
      id: 4,
      restaurantCode: "RES02",
      restaurantPhoneNumber: "0365412896",
      restaurantName: "Shamballa Vegetarian Restaurant & Tea House",
      address: "17-19 Trịnh Văn Cấn, St, Quận 1, TP.Hồ Chí Minh",
      status: "Active",
    },
    {
      id: 5,
      restaurantCode: "RES02",
      restaurantPhoneNumber: "0365412896",
      restaurantName: "Shamballa Vegetarian Restaurant & Tea House",
      address: "17-19 Trịnh Văn Cấn, St, Quận 1, TP.Hồ Chí Minh",
      status: "Active",
    },
  ]);

  const [newRestaurant, setNewRestaurant] = useState({
    restaurantCode: "",
    restaurantPhoneNumber: "",
    restaurantName: "",
    address: "",
    status: "Active",
  });

  React.useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRestaurant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = restaurants.length + 1;
    setRestaurants([...restaurants, { ...newRestaurant, id: newId }]);
    setNewRestaurant({
      restaurantCode: "",
      restaurantPhoneNumber: "",
      restaurantName: "",
      address: "",
      status: "Active",
    });
  };

  return (
    <>
      <div className="float-right">
        {/* <h2 className="text-2xl font-bold text-gray-700">
          Danh sách chi nhánh nhà hàng
        </h2> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>Thêm chi nhánh mới</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Thêm chi nhánh mới</DialogTitle>
              <DialogDescription>
                Điền thông tin chi nhánh mới vào form dưới đây.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="restaurantCode" className="text-right">
                    Mã chi nhánh
                  </Label>
                  <Input
                    id="restaurantCode"
                    name="restaurantCode"
                    value={newRestaurant.restaurantCode}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="restaurantName" className="text-right">
                    Tên chi nhánh
                  </Label>
                  <Input
                    id="restaurantName"
                    name="restaurantName"
                    value={newRestaurant.restaurantName}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Địa chỉ
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={newRestaurant.address}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="restaurantPhoneNumber" className="text-right">
                    Số điện thoại
                  </Label>
                  <Input
                    id="restaurantPhoneNumber"
                    name="restaurantPhoneNumber"
                    value={newRestaurant.restaurantPhoneNumber}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Thêm chi nhánh</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableCaption className="caption-top text-2xl font-bold text-gray-700">
          Danh sách chi nhánh nhà hàng
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Mã chi nhánh</TableHead>
            <TableHead>Tên chi nhánh</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Số điện thoại</TableHead>
            <TableHead>Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[200px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[300px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-[60px]" />
                  </TableCell>
                </TableRow>
              ))
            : restaurants.map((restaurant) => (
                <TableRow key={restaurant.id}>
                  <TableCell className="font-medium text-center">
                    {restaurant.restaurantCode}
                  </TableCell>
                  <TableCell>{restaurant.restaurantName}</TableCell>
                  <TableCell>{restaurant.address}</TableCell>
                  <TableCell className="text-center">
                    {restaurant.restaurantPhoneNumber}
                  </TableCell>
                  <TableCell className="text-center">
                    {restaurant.status}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size={"icon"}
                          className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none focus-visible:ring-offset-0"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Update</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                          {/* <Power className="mr-2 h-4 w-4" /> */}
                          <PowerOff className="mr-2 h-4 w-4" />
                          <span>Deactivate</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Tổng số chi nhánh</TableCell>
            <TableCell className="text-right">{restaurants.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

export default BranchTable;
