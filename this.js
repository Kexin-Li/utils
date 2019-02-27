console.log('global', this);

// --------------------------------------------------
var logThis = function() {
  console.log('global', this);
};
logThis();

// --------------------------------------------------
var logThis = function() {
  console.log('logThis', this);
};
new logThis();

// --------------------------------------------------
var myLibrary = {
  logThis: function() {
    console.log('myLibrary.logThis', this);
  },
  logThis2: () => {
    console.log('window', this);
  }
};
myLibrary.logThis();
myLibrary.logThis2();
