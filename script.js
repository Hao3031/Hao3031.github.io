


(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var firstletter = names[i].charAt(0).toUpperCase();
    if (firstletter === "J") {
      goodbye.speak(names[i]);
    } else {
      hello.speak(names[i]);
    }
  }
})(window);




