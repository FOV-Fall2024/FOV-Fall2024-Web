import { Component } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSideBar } from "@/components";

export class DashboardLayout extends Component {
  render() {
    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={16} className="border-r">
          <div className="h-screen">
            <AdminSideBar />
          </div>
        </ResizablePanel>
        <ResizableHandle className="hidden" />
        <ResizablePanel defaultSize={84}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={8} className="border-b">
              <div className="h-full">
                <AdminHeader />
              </div>
            </ResizablePanel>
            <ResizableHandle className="hidden" />
            <ResizablePanel defaultSize={92}>
              <ScrollArea className="h-full p-2">
                <Outlet />
              </ScrollArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  }
}

export default DashboardLayout;
