import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from 'lucide-react'
import DeleteBtn from '../actionBtn/DeleteBtn'
import EditBtn from '../actionBtn/EditBtn'

export default function ActionColumn({ row, title, endpoint, editEndpoint }) {
    const isActive = row.isActive
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
                {/* <button>Open Menu</button> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-50 dark:bg-slate-800">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-slate-300 hover:dark:bg-slate-600">
                    <DeleteBtn endpoint={endpoint} title={title} />
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-300 hover:dark:bg-slate-600">
                    <EditBtn title={title} editEndpoint={editEndpoint} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
