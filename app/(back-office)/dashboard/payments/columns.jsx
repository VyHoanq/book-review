"use client"

import React from "react"
import Image from "next/image"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DateColumn from "../../../components/data-column/DateColumn"
import ActionColumn from "../../../components/data-column/ActionColumn"

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4 " />
                </Button>
            )
        },
    },
    {
        accessorKey: "imageUrl",
        header: "Category Image",
        cell: ({ row }) => {
            const imageUrl = row.getValue("imageUrl")
            return (
                <div className="shrink-0">
                    <Image src={imageUrl} className="w-24 h-24 rounded-full object-cover" width={556} height={556} />
                </div>
            )
        },
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => {
            const description = row.getValue("description")
            return (
                <div className="line-clamp-1">
                    {description}
                </div>
            )
        },
    },
    {
        accessorKey: "isActive",
        header: "IsActive",
    },
    {
        accessorKey: "createdAt",
        header: "Date Created",
        cell: ({ row }) => (<DateColumn row={row}  accessorKey={"createdAt"}/>)
    },
    {
        id: "actions",
        cell: ({ row }) => (<ActionColumn row={row} title="payment"/>)
    },
]
