
(function (window) {
  var hello = {};
  hello.speakWord = "Hello";

  hello.speak = function (name) {
    console.log(hello.speakWord + " " + name);
  };
  window.hello=hello;
})(window);



