"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Property = {
  id: number;
  nombre: string;
  tipo: string;
  cuartos: string;
  banos: string;
  metros: number;
  ciudad: string;
  estado: string;
};

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nombre",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "ciudad",
    header: "Ciudad",
  },
  {
    accessorKey: "estado",
    header: "Estado",
  },
  {
    accessorKey: "metros",
    header: "Metros",
  },
  {
    accessorKey: "cuartos",
    header: "Cuartos",
  },
  {
    accessorKey: "banos",
    header: "Baños",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const property = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(property.nombre)}
            >
              Copiar nombre de casa
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver propiedad</DropdownMenuItem>
            <DropdownMenuItem>Editar propiedad</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
