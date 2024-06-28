const Attribution = () => {
  const spanStyle = "block text-black dark:text-dark-blue-100";

  return (
    <div className="pt-4 py-8 px-4 text-xs text-center bg-light-gray-50 dark:bg-dark-blue-900">
      <span className={spanStyle}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3e52a3" }}
        >
          Frontend Mentor.
        </a>
      </span>
      <span className={spanStyle}>
        Coded by{" "}
        <a
          href="https://github.com/johnjanieltr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#3e52a3" }}
        >
          John Janiel Tr.
        </a>
      </span>
    </div>
  );
};

export default Attribution;
