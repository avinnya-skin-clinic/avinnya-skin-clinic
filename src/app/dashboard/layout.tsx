'use client';

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import React from "react"
import { CustomTrigger } from "@/components/custom/SidebarTrigger";

export default function Layout({ children }: { children: React.ReactNode }) {

    const [open, setOpen] = React.useState(true);

    return (
        <SidebarProvider open={open} onOpenChange={setOpen} className=" overflow-hidden flex">
            <AppSidebar />
            <main className=" overflow-hidden flex flex-1">
                <CustomTrigger open={open} />
                {children}
            </main>
        </SidebarProvider>
    )
}
