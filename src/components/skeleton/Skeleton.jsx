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

export function SkeletonTableDesktop({ cont = 5 }) {
  return (
    <section className="table-dashboard">
      <h3>Productos</h3>
      <div className="table-wrapper">
        <table className="table-dashboard-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Rareza</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Activo</th>
              <th>Editar</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: cont }).map((_, i) => (
              <tr key={i}>
                <td>
                  <div className="skeleton-line skeleton-line--name" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--short" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--short" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--short" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--short" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--dot" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--btn" />
                </td>
                <td>
                  <div className="skeleton-line skeleton-line--btn" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
