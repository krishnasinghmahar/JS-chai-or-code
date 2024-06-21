// Immediately Invoked Functions Expression (IIFE)

(function chai() {
  // Named IIFE

  console.log("DB IS CONNECTED")
})();

((name)=> {
  console.log("DB IS CONNECTED", name)
}) ('krishna')