const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

let isDarkMode = false;

function darkMode() {
    moon.style.opacity = "1"
    document.body.style.backgroundColor = "black";
    moon.style.right = "0px";
    isDarkMode = true;
    document.getElementById("controller").style.transform = "translateX(35px)";
}

function lightMode() {
    document.body.style.backgroundColor = "white";
    isDarkMode = false;
    moon.style.right = "-100px";
    setTimeout(() => {
        moon.style.opacity = "0"
    }, 1000);
}

function changeTheme() {
    if (!isDarkMode) {
        darkMode();
    }
    else {
        document.getElementById("controller").style.transform = "translateX(0)";
        lightMode();
    }
}

function handleEvents(event) {
    let target = event.target;
    let fetchId = target.id;
    let fetchClass = target.classList.value;
    console.log("Target:", target);
    console.log("iD:", fetchId);
    console.log("Class:" ,fetchClass);

    if (fetchId == "controller" || fetchId == "theme-controller" || fetchClass == "mode-img") {
        changeTheme();
    }
}

document.addEventListener('click', handleEvents);