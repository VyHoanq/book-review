"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import ImageColumn from "../../../components/data-column/ImageColumn"
import DateColumn from "../../../components/data-column/DateColumn"
import SortTableColumn from '../../../components/data-column/SortTableColumn'
import ActionColumn from '../../../components/data-column/ActionColumn'

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
        header: ({ column }) => (<SortTableColumn column={column} title="title" />)
    },
    {
        accessorKey: "imageUrl",
        header: "Category Image",
        cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
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
        cell: ({ row }) => (<DateColumn row={row} accessorKey={"createdAt"} />)
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const category = row.original
            return (<ActionColumn row={row} title="Category" endpoint={`categories/${category.id_category}`} />)
        }
    },
]
