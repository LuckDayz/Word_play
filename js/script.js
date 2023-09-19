// Business Logic
function sentence(inputSentence) {
    const uniqueWord = inputSentence.split(' ');
    let filterWords = uniqueWord.filter(function(words){
        return words.length >= 3
    });
    const reverseSentence = filterWords.reverse().join(" ");
    return reverseSentence;
}

    // UI
$(document).ready(function(){
    $("#form").submit(function(event){
        const inputWord = $("input#word").val();
        let reverse = sentence(inputWord)
        
        event.preventDefault();
        $(".result").html(reverse);
        $(".result").show();
    });
});