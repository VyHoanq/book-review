"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import SortTableColumn from "@/components/data-column/SortTableColumn"
import ImageColumn from "@/components/data-column/ImageColumn"
import DateColumn from "@/components/data-column/DateColumn"
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
        accessorKey: "name",
        header: ({ column }) => (<SortTableColumn column={column} title="Name" />)
    },
    {
        accessorKey: "profileImageUrl",
        header: "Author Image",
        cell: ({ row }) => (<ImageColumn row={row} accessorKey="profileImageUrl" />)
    },
    {
        accessorKey: "biography",
        header: "Biography",
        cell: ({ row }) => {
            const biography = row.getValue("biography")
            return (
                <div className="line-clamp-1">
                    {biography}
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
        cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" />)
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const author = row.original
            return (<ActionColumn row={row} title="Author" endpoint={`authors/${author.id_author}`} />)
        }
    },
]
