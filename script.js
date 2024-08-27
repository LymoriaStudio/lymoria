/*burger menu*/
function toggleMenu() {
  const menu = document.querySelector(".header-menu");
  menu.classList.toggle("active");
}

/*FAQ*/
function toggleFaq(element) {
  var faqItem = element.parentElement;
  faqItem.classList.toggle("active");

  var synopsis = faqItem.querySelector(".faq-synopsis");
  var answer = faqItem.querySelector(".faq-answer");

  if (faqItem.classList.contains("active")) {
    synopsis.style.display = "none";
    answer.style.display = "block";
  } else {
    synopsis.style.display = "block";
    answer.style.display = "none";
  }
}
