const user = document.getElementById('user');
const userCircle = document.getElementById('circle');

user.addEventListener("mouseover", () => {
    userCircle.style.color = "#000";
});

user.addEventListener("mouseout", () => {
    userCircle.style.color = "#fff";
});