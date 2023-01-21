//your code here
const textbox = document.getElementById("evaluatedText");
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

textbox.addEventListener("input", function() {
    let text = this.value.trim();
    text = text.replace(/(\r\n|\n|\r)/gm," "); // remove newlines
    text = text.replace(/[^a-zA-Z0-9\s]/g, ""); // remove non-alphanumeric characters
    text = text.replace(/\s+/g,' '); // remove multiple spaces
    wordCount.innerHTML = text.split(' ').filter(function(v){return v!==''}).length;
});
