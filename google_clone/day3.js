// 버튼을 클릭하면
document.getElementById("darkmode").addEventListener("click", function() {
    // body의 background-color를 검정색으로 변경
    document.body.style.backgroundColor = "#000";
    // h1 태그의 색상을 흰색으로 변경
    document.querySelector("h1").style.color = "#fff";
    // 검색창 배경색을 검정색으로 변경
    document.querySelector(".search_bar").style.backgroundColor = "#000";
    // 검색창 글자색을 흰색으로 변경
    document.querySelector(".search_bar").style.color = "#fff";
    // 버튼 배경색을 흰색으로 변경
    document.querySelectorAll(".btn").forEach(btn => {
      btn.style.backgroundColor = "#fff";
      btn.style.color = "#000";
    });
  });
  