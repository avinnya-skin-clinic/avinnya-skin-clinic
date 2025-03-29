'use client';

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "../ui/button";
import { AlignLeft, PanelLeft } from "lucide-react";
import { Separator } from "../ui/separator";

interface CustomTriggerProps {
    open: boolean;
}

export function CustomTrigger(props: CustomTriggerProps) {
    const { toggleSidebar } = useSidebar();

    return (
        <Button variant={'link'} className=" cursor-pointer h-fit w-full flex justify-start items-center" onClick={toggleSidebar}>
            <PanelLeft className=" max-md:hidden"/>
            <Separator orientation="vertical" className=" max-md:hidden"/>
            <span className=" max-md:hidden">
            {!props.open ? "Open Sidebar" : "Close Sidebar"}
            </span>
            <AlignLeft className=" md:hidden" />
        </Button>
    );
}
