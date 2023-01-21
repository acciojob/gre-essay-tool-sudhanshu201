//your code here
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", function() {
    let text = this.value.trim();
    text = text.replace(/[^a-zA-Z0-9\s]/g, ""); // remove non-alphanumeric characters
    wordCount.innerHTML = text.split(/\s+/).length;
});
