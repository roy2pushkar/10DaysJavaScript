document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn1");
  button.addEventListener("click", (e) => {
    const count = Number(e.currentTarget.innerText) + 1;
    e.currentTarget.innerText = count;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn2");
  button.addEventListener("click", (e) => {
    const count = Number(e.currentTarget.innerText) - 1;
    e.currentTarget.innerText = count;
  });
});
