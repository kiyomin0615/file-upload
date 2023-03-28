const fileInputEl = document.getElementById("image");
const imagePreviewEl = document.getElementById("image-preview");

function showPreview() {
  const files = fileInputEl.files;

  if (!files || files.length === 0) {
    imagePreviewEl.style.display = "none";
    return;
  }

  const file = files[0];

  // URL.createObjectURL(객체);
  // 1. URL 객체 생성 메소드
  // 2. 객체에 대한 URL 생성
  imagePreviewEl.src = URL.createObjectURL(file); // 아직 파일은 업로드 되지 않았다
  imagePreviewEl.style.display = "block";
}

// change 이벤트
// 요소의 값이 변경되면 실행되는 이벤트
fileInputEl.addEventListener("change", showPreview);