		/* JS codes for voice recognition */
    function runSpeechRecognition() {
      // get output div reference
      var output = document.getElementById("keyword-input");
      
      // get action element reference
      var action = document.getElementById("action");
          // new speech recognition object
          var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
          var recognition = new SpeechRecognition();
      
          // This runs when the speech recognition service starts
          recognition.onstart = function() {
           
           
           
            $(function() {

              $('.toast').toast('show');
      
          });
          

           
              
          };
          
          recognition.onspeechend = function() {
              
            $(function() {

            alert("mic stops!");

           

      
          });

              recognition.stop();
            
          }
        
          // This runs when the speech recognition service returns result
          recognition.onresult = function(event) {
              var transcript = event.results[0][0].transcript;
              
              output.value = "" + transcript ;

              output.classList.remove("hide");
          };
        
           // start recognition
           recognition.start();
    }