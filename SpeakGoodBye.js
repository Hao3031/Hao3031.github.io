
(function (window) {
  var goodbye = {};
  goodbye.speakWord = "Good Bye";

  goodbye.speak = function (name) {
    console.log(goodbye.speakWord + " " + name);
  };
  window.goodbye=goodbye;
})(window);

