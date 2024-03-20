
// 스크롤 이벤트 리스너
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("btn-back-to-top").style.display = "block"; 
  } else  {  
    document.getElementById("btn-back-to-top").style.display = "none";
  }
});

// 클릭 시 페이지 맨 위로 스크롤
function backToTop() {
  const position =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (position) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, position - position / 10);
      backToTop();
    });
  }
}
