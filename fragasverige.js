var KEY_CODE_ARROW_DOWN = 40,
    KEY_CODE_ARROW_UP   = 38,
    KEY_CODE_ENTER      = 13;

var Questions = new Meteor.Collection('questions');

if (Meteor.isClient) {


  function MainViewModel() {

    this.mainTextEnterPressed = function() {
      Questions.insert({ title: Session.get('mainTextValue') })
    }

    this.mainTextValueChanged = function(newValue) {
      Session.set('mainTextValue', newValue)
    }
  }

  var viewModel = new MainViewModel();

  Template.hello.events({
    'keyup #mainText': function(e) {
      if (e.keyCode == KEY_CODE_ENTER) {
        viewModel.mainTextEnterPressed();
      } else {
        viewModel.mainTextValueChanged(e.target.value);
      }
    }
  })
}

if (Meteor.isClient) {
  Template.hello.questions = function () {
    return Questions.find().fetch();
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
