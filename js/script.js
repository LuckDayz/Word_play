// Business Logic
function sentence(inputSentence) {
    const uniqueWords = inputSentence.split(' ');
    let reverseWords = [];

    uniqueWords.forEach(function (word) {
        if (word.length >= 3) {
            const reversedWord = word.split('').reverse().join('');
            reverseWords.push(reversedWord);
        } else {
            reverseWords.push(word);
        }
    });
    return reverseWords.join(' ');
}

// UI
$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        const inputSentence = $("input#word").val();
        const reversedSentence = sentence(inputSentence);
        const finalResult = reversedSentence + ' ' + inputSentence;

        $(".result").html(finalResult);
        $(".result").show();
    });
});