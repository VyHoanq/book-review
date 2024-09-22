"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "@/components/data-column/DateColumn"
import ImageColumn from "@/components/data-column/ImageColumn"
import SortTableColumn from "@/components/data-column/SortTableColumn"
import ActionColumn from "@/components/data-column/ActionColumn"

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
        header: ({ column }) => (<SortTableColumn column={column} title="Title" />)
    },
    {
        accessorKey: "imageUrl",
        header: "Book Image",
        cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />),

    },

    {
        accessorKey: "isActive",
        header: "IsActive",
    },
    {
        accessorKey: "createdAt",
        header: "Date Created",
        cell: ({ row }) => (<DateColumn row={row}  accessorKey={"createdAt"}  />),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const book = row.original
            return (
            <ActionColumn 
            row={row} 
            title="Book" 
            editEndpoint={`book-management/updated/${book.id}`}
            endpoint={`books/${book.id}`} />)
        }
    },
]
