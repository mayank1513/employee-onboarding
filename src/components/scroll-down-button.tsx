const srollToUiPortfolio = () => {
  const element = document.getElementById("ui-portfolio");
  element?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "start",
  });
};

export const ScrollDownButton = () => (
  <button className="down-btn" onClick={srollToUiPortfolio}>
    <span>❱❱❱</span>
  </button>
);
