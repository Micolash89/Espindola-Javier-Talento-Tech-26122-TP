import "./Skeleton.css";

export default function Skeleton({ count = 1 }) {
  return Array.from({ length: count }, (_, i) => (
    <div key={i} className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-info">
        <div className="skeleton-line skeleton-line--title" />
        <div className="skeleton-line skeleton-line--text" />
        <div className="skeleton-line skeleton-line--price" />
      </div>
    </div>
  ));
}


export function SkeletonSearchBar() {
  return (
    <div className="skeleton-search-bar">
      <div className="skeleton-line skeleton-line--search" />
    </div>
  );
}