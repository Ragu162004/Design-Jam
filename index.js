const user = document.getElementById("user");
const userCircle = document.getElementById("circle");

user.addEventListener("mouseover", () => {
  userCircle.style.color = "#000";
});

user.addEventListener("mouseout", () => {
  userCircle.style.color = "#fff";
});

let li = document.getElementById("helper").querySelectorAll(".link a");
let section = document.querySelectorAll("section");
// function activePage(){
//     let len = section.length;
//     while(--len && window.scrollY + 97 < section[len].offsetTop){}
//     li.forEach(itr => itr.classList.remove("active"));
//     li[len].classList.add("active");
// }
// activePage();
// window.addEventListener("scroll", activePage());

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height ) {
      li.forEach((links) => {
        links.classList.remove("active");
        document.querySelector('.link a[href*=' + id + ']').classList.add("active");
      });
    }
  });
};
