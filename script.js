//your code here
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", function() {
    wordCount.innerHTML = this.value.trim().split(/\s+/).length;
});
