const chosen = document.querySelectorAll(".zA");

for (let i = 2; i <= chosen.length; i += 3) {
  chosen[i].style.display = "none";
}
