if (Meteor.isClient) {
    Template.hello.events({
    'keydown #mainText': function(event) {
      var text = event.target.value;
    }
  })
}