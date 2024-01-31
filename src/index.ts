const questions = document.querySelectorAll(
  ".question"
) as NodeListOf<HTMLDivElement>;
// console.log(question);

questions.forEach((question) => {
  question.addEventListener("click", function () {
    let icon = this.children[1] as HTMLImageElement
    // console.log(icon)
    let ans = this.nextElementSibling as HTMLDivElement;
    if (ans.style.maxHeight) {
      ans.style.maxHeight = "";
      icon.src = "./assets/images/icon-plus.svg";
    } else {
      ans.style.maxHeight = ans.scrollHeight + "px";
      icon.src = "./assets/images/icon-minus.svg";
    }
  });
});
