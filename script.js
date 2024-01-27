function invertText() {
    const inputText = document.getElementById("inputText").value;
    const invertedText = flipString(inputText);
    document.getElementById("outputText").value = invertedText;
}

function flipString(aString) {
    const charMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 
        'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': 'ᗡ', 
        'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': '⋊', 'L': '˥', 'M': 'W', 'N': 'N', 
        'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 
        'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', 
        '8': '8', '9': '6', '.': '˙', ',': "'", '?': '¿', '!': '¡', '"': '„', "'": ',', '(': ')', ')': '(', 
        '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾'
    };

    let flipped = '';
    for (let c of aString) {
        flipped = (charMap[c] || c) + flipped;
    }
    return flipped;
}


function copyText() {
    const outputText = document.getElementById("outputText");
    navigator.clipboard.writeText(outputText.value).then(() => {
        console.log("Text copied to clipboard");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}