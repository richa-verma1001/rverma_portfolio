
let themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn.addEventListener('click', switchTheme);

function switchTheme() {
  document.body.classList.toggle('light');
  document.getElementById('themeToggle_sun').classList.toggle('hide');
  document.getElementById('themeToggle_moon').classList.toggle('hide');
}