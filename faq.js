// FAQ 내용을 업데이트하는 함수
function updateFAQContent(contentId) {
    const content = document.querySelector(contentId).innerHTML;
    document.getElementById("faq-content").innerHTML = content;
}

// 버튼에 이벤트 리스너 추가
document.getElementById("submit-questions").addEventListener("click", function() {
    updateFAQContent("#support-questions-content");
});

document.getElementById("activity-questions").addEventListener("click", function() {
    updateFAQContent("#activity-questions-content");
});

document.getElementById("other-questions").addEventListener("click", function() {
    updateFAQContent("#other-questions-content");
});