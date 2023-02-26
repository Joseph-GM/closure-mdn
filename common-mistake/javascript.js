function showHelp(help) {
    document.getElementById("help").textContent = help;
  }
  
  function setupHelp() {
    var helpText = [
      { id: "email", help: "Your email address" },
      { id: "name", help: "Your full name" },
      { id: "age", help: "Your age (you must be over 16)" },
    ];
  
    for (var i = 0; i < helpText.length; i++) {
      // Culprit is the use of `var` on this line
      const item = helpText[i];
      console.log(`out side of focus item.id : ${item.id}`)
      document.getElementById(item.id).onfocus = function () {
        console.log(`inside of focus function item.id : ${item.id}`)
        showHelp(item.help);
      };
    }
  }
  

  setupHelp();