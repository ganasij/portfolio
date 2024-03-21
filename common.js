
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

//blur cousor: 마우스 이동 시 위치값을 div에 전달하여 따라다님
// const cursor = document.querySelector('#cursor');

// let lastPageX = 0, lastPageY = 0;

// const animateCursor = (e) => {
//     lastPageX = e.pageX;
//     lastPageY = e.pageY;
// }

const updateCursor = () => {
    requestAnimationFrame(updateCursor);
    //커서 크기의 절반 값을 감산하여 커서 중심을 마우스 포인터 위치에 맞춤
    cursor.style.left = `${lastPageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${lastPageY - cursor.offsetHeight / 2}px`;
}

window.addEventListener('mousemove', animateCursor);
updateCursor(); // 커서 업데이트 시작