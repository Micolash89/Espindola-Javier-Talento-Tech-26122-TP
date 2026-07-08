import { useMemo } from "react";

const ITEMS_PER_PAGE = 8;

export default function useLocalPagination(items, page) {
  return useMemo(() => {
    const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    const offset = (safePage - 1) * ITEMS_PER_PAGE;
    const pageItems = items.slice(offset, offset + ITEMS_PER_PAGE);

    return { pageItems, totalPages, safePage };
  }, [items, page]);
}
