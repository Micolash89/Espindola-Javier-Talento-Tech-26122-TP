export default function ErrorMessage({ message = "Error al cargar", actionLabel, actionHref = "/" }) {
  return (
    <div className="error-section">
      <div className="error-container">
        <h2 className="error-title">Error</h2>
        <p className="error-message">{message}</p>
        {actionLabel && actionHref && (
          <a href={actionHref} className="button-square">{actionLabel}</a>
        )}
      </div>
    </div>
  );
}
