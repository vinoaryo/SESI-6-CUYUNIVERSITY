let themeCounter = 0;

const reRender = () => {
  location.reload();
};

const changeTheme = () => {
  const theme = document.querySelector("body");
  const changeThemeLimit = 5;
  const remainingThemes = changeThemeLimit - themeCounter;
  const themeChanger = document.getElementById("themeChanger");
  let info = document.getElementById("info");
  let home = document.getElementById("home");

  theme.classList.toggle("oppositeTheme");
  // Make the theme button change its text each time the theme is changed

  if (themeChanger.innerHTML === "Day") {
    themeChanger.innerHTML = "Night";
  } else {
    themeChanger.innerHTML = "Day";
  }

  // Limit changing themes to 5 times

  themeCounter += 1;
  if (themeCounter >= changeThemeLimit) {
    theme.classList.remove("oppositeTheme");
    console.log("Theme limit reached");
    info.style.color = "red";
    info.textContent = `You have reached the theme limit of ${changeThemeLimit} times.`;
    themeChanger.style.display = "none";
    home.textContent = "Restart!";
  } else {
    console.log("themeCounter: ", themeCounter);
    console.log("remainingThemes: ", remainingThemes);
    info.textContent = `You have ${remainingThemes} themes remaining.`;
  }
};

const greenMode = () => {
  const theme = document.querySelector("body");
  const themeChanger = document.getElementById("themeChanger");
  const green = document.getElementById("green");
  theme.classList.toggle("greenTheme");

  if (green.innerHTML === "Green") {
    green.innerHTML = "Night";
    themeChanger.innerHTML = "Night";
  } else {
    green.innerHTML = "Green";
    themeChanger.innerHTML = "Day";
  }
};

const redMode = () => {
  const theme = document.querySelector("body");
  const themeChanger = document.getElementById("themeChanger");
  const red = document.getElementById("red");
  theme.classList.toggle("redTheme");

  if (red.innerHTML === "Red") {
    red.innerHTML = "Night";
    themeChanger.innerHTML = "Night";
  } else {
    red.innerHTML = "Red";
    themeChanger.innerHTML = "Day";
  }
};
