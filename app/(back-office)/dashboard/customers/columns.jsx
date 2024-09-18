"use client"

import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import DateColumn from "../../../components/data-column/DateColumn"
import ActionColumn from "../../../components/data-column/ActionColumn"
import SortTableColumn from "../../../components/data-column/SortTableColumn"

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
        header: ({ column }) => (<SortTableColumn column={column} title="name" />)
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "createdAt",
        header: "Date Created",
        cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" />)
    },
    {
        id: "actions",
        cell: ({ row }) => (<ActionColumn row={row} title="User" />)
    },
]
