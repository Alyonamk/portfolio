!function(){var e=document.querySelectorAll(".slider-project"),t=document.querySelectorAll(".controlls"),n=0;function c(t){e[n].classList.remove("active"),e[t].classList.add("active"),n=t}t.forEach((function(t){t.addEventListener("click",(function(){if(event.target.classList.contains("prev")){var t=n-1;t<0&&(t=e.length-1),c(t)}else if(event.target.classList.contains("next")){var s=n+1;s>=e.length&&(s=0),c(s)}}))})),c(n)}();
//# sourceMappingURL=index.6fa83572.js.map
