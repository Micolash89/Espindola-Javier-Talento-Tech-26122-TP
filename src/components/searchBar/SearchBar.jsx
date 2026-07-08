import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const handleChange = (e) => {
    const value = e.target.value;
    const next = new URLSearchParams(searchParams);

    if (value) {
      next.set("search", value);
    } else {
      next.delete("search");
    }

    next.delete("page");
    setSearchParams(next);
  };

  return (
    <div className="search-bar">
      <Search size={16} className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        placeholder="Buscar productos..."
        aria-label="Buscar productos"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
