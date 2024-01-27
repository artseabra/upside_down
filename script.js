function invertText() {
    const inputText = document.getElementById("inputText").value;
    const invertedText = inputText.split("").reverse().join("");
    document.getElementById("outputText").value = invertedText;
}

function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}