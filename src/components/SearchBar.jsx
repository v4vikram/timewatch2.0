"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronRightIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { products } from "@/data/products";

import { flattenProducts } from "@/lib/flattenProducts";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const allProducts = flattenProducts(products);
  const router = useRouter();

  useEffect(() => {
    const down = (e) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (product) => {
    const url = `/products/${product.categoryName}/${product.subCategoryName}/${product.productName}`;
    router.push(url);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-between gap-2 px-3 py-2 border. rounded-sm w-full text-sm hover:bg-muted. transition"
      >
        <div className="flex items-center gap-x-2">
          <Search className="w-6 h-6 text-primary cursor-pointer" />
          {/* Search Products... */}
        </div>
        {/* 🧠 Shortcut Hint */}
        {/* <p className="text-muted-foreground text-sm">
          <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex items-center gap-1 rounded-full border py-1.5 px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
            <span className="text-xs">ctrl J</span>
          </kbd>
        </p> */}
      </button>

      {/* 💬 Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {allProducts?.map((p, index) => (
              <CommandItem
                key={index}
                onSelect={() => handleSelect(p)}
                className="cursor-pointer"
              >
                <ChevronRightIcon className="mr-2 h-4 w-4" />
                {p.productName}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
