'use client';

// UI Components import
import { useEffect, useState } from 'react';
import {
    UserRoundCheck,
    UserRoundX,
    LogOut,
    UserCog
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
import { toast } from 'sonner';

// System Components import
import Link from "next/link"
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Menu items.
const items = [
    {
        title: "Approved",
        icon: UserRoundCheck,
        url: "/dashboard/approved"
    },
    {
        title: "Requested",
        icon: UserRoundX,
        url: "/dashboard/requested"
    },
    {
        title: "Admin",
        icon: UserCog,
        url: "/dashboard/admin"
    }
]

export function AppSidebar() {

    const router = useRouter()
    const [name, setName] = useState<string>('');

    useEffect(() => {
        const storedName = window.localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    // logout
    const handlelogout = async () => {
        try {
            await axios.get("/api/logout")
                .then((res) => {
                    toast.success(res.data.message || "Logout Successful!", {
                        style: {
                            "backgroundColor": "#D5F5E3",
                            "color": "black",
                            "border": "none"
                        },
                        duration: 1500
                    });
                    window.localStorage.removeItem("name");
                    router.push("/login");
                })
                .catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    };

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
                        <SidebarMenuItem className=' flex flex-row justify-between items-center'>
                                {
                                    name.length < 20
                                        ?
                                        (name === '' ? 'Username' : name)
                                        :
                                        (name === '' ? 'Username' : name.substring(0, 20) + "...")
                                }
                            <SidebarMenuButton className=' w-fit h-fit cursor-pointer hover:bg-red-500 hover:text-white' onClick={handlelogout}>
                                <LogOut className="ml-auto" />
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}
