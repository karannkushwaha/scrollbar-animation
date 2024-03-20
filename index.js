const scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
  console.log("scrollY:- ", window.scrollY);
  console.log("scrollHeight:- ", document.body.scrollHeight);
  console.log("'innerHeight:- ", window.innerHeight);
  let per =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  console.log(per);
  scrollbar.style.width = per + "%";
});
