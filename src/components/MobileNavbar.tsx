import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Cart from "./Cart";

function MobileNavbar() {
  return (
    <div className="lg:hidden flex items-center justify-between">
      <img
        src={logo}
        alt="Logo"
        className="aspect-square"
        width={80}
        height={80}
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size={"sm"}
            className="text-white bg-transparent gap-2 text-center"
          >
            <AlignJustify /> MENU
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="hidden">
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <nav>
            <Link to={"/"} className="block py-4 text-gray-700">
              Trang chủ
            </Link>
            <Link to={"/about"} className="block py-4 text-gray-700">
              Giới Thiệu
            </Link>
            <Link
              to={"/menu?category=khaiVi"}
              className="block py-4 text-gray-700"
            >
              Thực Đơn
            </Link>
            <Link to={"/feedback"} className="block py-4 text-gray-700">
              Đánh giá
            </Link>

            <Dialog>
              <DialogTrigger>
                <p className="block py-4 text-gray-700">Đăng nhập / Đăng ký</p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="hidden">
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="login">Đăng nhập</TabsTrigger>
                    <TabsTrigger value="register">Đăng ký</TabsTrigger>
                    <TabsTrigger value="forgotPassword">
                      Quên mật khẩu
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <SignIn />
                  </TabsContent>
                  <TabsContent value="register">
                    <SignUp />
                  </TabsContent>
                  <TabsContent value="forgotPassword">
                    <ForgotPassword />
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            <Link to={"/profile"} className="block py-4 text-gray-700">
              Profile
            </Link>

            <Cart />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
