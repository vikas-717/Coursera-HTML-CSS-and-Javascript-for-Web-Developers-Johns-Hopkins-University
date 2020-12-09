(function () {

    var names = ["Sai", "Vikas", "Reddy", "Siri", "Venkata", "Charan", "Matti", "Jake", "Johnny", "Rakshasi"];
    
    for (var a = 0; a < names.length; a++) {
    
      var firstLetter = names[a].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[a]);
      } 
      else {
        helloSpeaker.speak(names[a]);
      }
    }
    
    })();
