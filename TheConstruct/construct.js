    
    var letterMap = {};
    let buttonRunning = 1;

    for (var i = 0; i < 57; i++) {
        // Calculate the character code for the letter (65 is the char code for 'A')
        var letter = String.fromCharCode(65 + i);
        // Assign the letter to its corresponding position (1-based index)
        letterMap[i + 1] = letter;
    }

    console.log(letterMap)
    
    var translateButton = document.getElementById("translateButton");
   
  
    translateButton.addEventListener("click", function(){
    let idTag = "headString"
    let idTag2 = "ourRules"

       translate(idTag);
       


        
});

function translate(idTag){
    buttonRunning = 0;
    let headString = document.getElementById(idTag).textContent;
    var charArray = new Array(idTag.length).fill('A');
    let finalString = charArray.join('');



    animateTranslation(headString, charArray, 0)

    buttonRunning = 1;

    /*for(i = 0; i <headString.length; i++){
        let k = 1;
        while(finalString.charAt(i) != headString.charAt(i)){
            charArray[i] = letterMap[k];
            k++;
            finalString = charArray.join('');
            document.getElementById("headString").innerHTML = finalString;
            setTimeout(100);
        }*/

    }

    function animateTranslation(headString, charArray, index){
        
        if(index >= headString.length) return;

        let targetChar = headString[index]; // TheConstruct
        let currentCharIndex = 1;
        let newFont = ", sans-serif;"

        document.getElementById("headString").innerHTML = charArray.join('');
        document.getElementById("headString").style.fontFamily = 'Matrix2';

        updateChar();
        
        function updateChar(){
            if(charArray[index] == targetChar){
                
                animateTranslation(headString, charArray, index + 1);
            }else{
                charArray[index] = letterMap[currentCharIndex];
                console.log(charArray[0])
                document.getElementById("headString").innerHTML = charArray.join('');
                currentCharIndex++;
                setTimeout(updateChar, 10);
                
            }
        }
    }
