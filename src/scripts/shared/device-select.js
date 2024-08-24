const buttons = document.getElementsByClassName("selectOsButton");

buttons[0].onclick = () => {
    localStorage.setItem("device-type", "pc");
    alert(localStorage.getItem("device-type"));
};

buttons[1].onclick = () => {
    localStorage.setItem("device-type", "mobile");
    alert(localStorage.getItem("device-type"));
};