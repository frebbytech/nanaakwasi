function Loading() {
  return (
    <section
      role="status"
      aria-label="Loading"
      className="fixed inset-0 flex items-center justify-center bg-bg"
    >
      <div className="loader" />
    </section>
  );
}

export default Loading;
