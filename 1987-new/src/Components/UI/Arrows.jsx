export function PrewArrow({ classToUse, onClick }) {
  return (
    <div className={classToUse} style={{ cursor: "pointer" }}>
      <p onClick={onClick} data-no-modal-close="true">
        &larr;
      </p>
    </div>
  );
}

export function NextArrow({ classToUse, onClick }) {
  return (
    <div className={classToUse} style={{ cursor: "pointer" }}>
      <p onClick={onClick} data-no-modal-close="true">
        &rarr;
      </p>
    </div>
  );
}
