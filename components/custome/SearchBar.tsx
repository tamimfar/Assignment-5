"use client";

import { Input } from "@/components/ui/input";
import { useSearchStore } from "@/Store/searchStor";

export default function SearchBar() {
  const { search, setSearch } = useSearchStore();

  return (
    <Input
      placeholder="Search properties..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}