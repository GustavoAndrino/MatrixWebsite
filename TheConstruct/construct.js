
    var letterMap = {};
    let buttonRunning = 1;
    

    for (var i = 0; i < 57; i++) {
        // Calculate the character code for the letter (65 is the char code for 'A')
        var letter = String.fromCharCode(65 + i);
        // Assign the letter to its corresponding position (1-based index)
        letterMap[i + 1] = letter;
    }

    letterMap[31] = 'c';
    console.log(letterMap[31])
    
    var translateButton = document.getElementById("translateButton");
   
  
    translateButton.addEventListener("click", async function(){
    let idTag = "headString"
    let idTag2 = "ourRules"
    let ourRules = document.getElementById("ourRules").textContent;
    let id2 = document.getElementById("best").textContent;
    let id3 = document.getElementById("max").textContent;
    let id4 = document.getElementById("hardest").textContent;

    try{
        await translate(idTag);
 
        document.getElementById("ourRules").innerHTML = ourRules;
        document.getElementById("best").innerHTML = id2;
        document.getElementById("max").innerHTML = id3;
        document.getElementById("hardest").innerHTML = id4;
        document.getElementById("myDiv").style.fontFamily = "Matrix2, sans-serif";
        let runTimes = 0
        let number = 0
        blink(runTimes, number);  
       

    } catch(error){
        console.log(error)
    }
       
      console.log("hello") 
       
        
});

function translate(idTag){
    return new Promise((resolve, reject) => {
        buttonRunning = 0;
        let headString = document.getElementById(idTag).textContent;
        var charArray = new Array(idTag.length).fill("A");
        let finalString = charArray.join('');
        if(finalString == headString){
            resolve();
            return;dfds
        }
       
        animateTranslation(headString, charArray, 0, resolve);
        buttonRunning = 1;
        
    })
    
    }

    function animateTranslation(headString, charArray, index, resolve){
        
        if(index >= headString.length){
            resolve();
            return;
        }   

        let targetChar = headString[index]; // TheConstruct
        let currentCharIndex = 1;
        let newFont = ", sans-serif;"

        document.getElementById("headString").innerHTML = charArray.join('');
        document.getElementById("headString").style.fontFamily = 'Matrix2';

        updateChar();
        
        function updateChar(){
            let result = '';

            if(charArray[index] == targetChar){
                
                animateTranslation(headString, charArray, index + 1, resolve);
            }else{
                charArray[index] = letterMap[currentCharIndex];
                console.log(charArray[0])
                document.getElementById("headString").innerHTML = charArray.join('');
                currentCharIndex++;
                for(i = 0; i <=9; i++){
                    const hiraganaStart = 0x3040;
                    const hiraganaEnd = 0x309F;
                    const random = Math.floor(Math.random() * 9);
                    //var random = String.fromCharCode(Math.floor(2720 + Math.random() * 33));
                    result += random;
                }
                
                document.getElementById("ourRules").innerHTML = result;
                document.getElementById("best").innerHTML = result;
                document.getElementById("max").innerHTML = result;
                document.getElementById("hardest").innerHTML = result;
                
                setTimeout(updateChar, 20);
                
            }
        }
    }

    function blink(runTimes, number){
        
        let opacity = number

        document.getElementById("best").style.opacity = opacity;
        document.getElementById("max").style.opacity = opacity;
        document.getElementById("hardest").style.opacity = opacity;
        document.getElementById("ourRules").style.opacity = opacity;
        document.getElementById("headString").style.opacity = opacity;

        number = (number === 0) ? 1 : 0;
        runTimes += 1;
        if(runTimes == 6){
            return;
        }
        setTimeout(function() {
            blink(runTimes, number);
        }, 500);
    }