// Business Logic
function reverseWord(inputSentence) {
    const uniqueWords = inputSentence.split(' ');
    let reverseWords = [];

    uniqueWords.forEach(function (word) {
        if (word.length >= 3) {
            const reversedWord = word.split('');
            const JoinedReverseWord = reversedWord.reverse();
            const reverseTheResult = JoinedReverseWord.join('');
            reverseWords.push(reverseTheResult);
        } else {
            reverseWords.push(word);
        }
    });
    return reverseWords.join(' ');
}

// UI Logic
$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();
        const inputSentence = $("input#word").val();
        const reversedSentence = reverseWord(inputSentence);
        const finalResult = reversedSentence + ' ' + inputSentence;

        $(".result").html(finalResult);
        $(".result").show();
    });
});