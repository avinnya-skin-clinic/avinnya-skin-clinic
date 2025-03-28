'use client';

import { useEffect, useState } from 'react';
import {
    UserRoundCheck,
    UserRoundX,
    User2,
    ChevronUp
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Approved",
        icon: UserRoundCheck,
        url: "/approved"
    },
    {
        title: "Requested",
        icon: UserRoundX,
        url: "/requested"
    }
]

export function AppSidebar() {

    // State to store name after checking localStorage
    const [name, setName] = useState<string>('');

    useEffect(() => {
        // Access localStorage only on the client-side
        const storedName = window.localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, []); // Empty dependency array ensures this runs only once after component mount

    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarContent className="flex flex-col justify-between">
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton>
                                        <User2 />
                                        {
                                            name.length < 20
                                                ?
                                                (name === '' ? 'Username' : name)
                                                :
                                                (name === '' ? 'Username' : name.substring(0, 20) + "...")
                                        }
                                        <ChevronUp className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    side="top"
                                    className="w-[--radix-popper-anchor-width]"
                                >
                                    <DropdownMenuItem>
                                        <span>Account</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}
