// YOUR CODE HERE
const btn1 = document.getElementById("btn1");
const output1 = document.getElementById("output1");
btn1.addEventListener("click", () => {
  output1.style.color = "red";
});

const btn2 = document.getElementById("btn2");
const output2 = document.getElementById("output2");
btn2.addEventListener("click", () => {
  const newMessage = document.createElement("span");
  newMessage.textContent = "Hello word";
  output2.append(newMessage);
});

const btn3 = document.getElementById("btn3");
const output3 = document.getElementById("output3");
btn3.addEventListener("click", () => {
  const smallText = output3.querySelector(".small-text");
  if (smallText) {
    smallText.classList.remove("small-text");
  }
});

const btn4 = document.getElementById("btn4");
const output4 = document.getElementById("output4");
btn4.addEventListener("click", () => {
  const paragraphs = output4.querySelectorAll("p");
  console.log(paragraphs.length);

  if (paragraphs.length) {
    paragraphs.forEach((paragraph) => {
      paragraph.style.background = "red";
    });
  }
});

const btn5 = document.getElementById("btn5");
const output5 = document.getElementById("output5");
btn5.addEventListener("click", () => {
  console.log(output5.querySelector("#message").value);
});
