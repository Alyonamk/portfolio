const e=new IntersectionObserver((e=>{e.forEach((e=>{console.log(e),e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")}))}));document.querySelectorAll(".hidden").forEach((s=>e.observe(s)));
//# sourceMappingURL=index.c274a841.js.map
