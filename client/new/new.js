Template.new.events({
  'submit form': function(e, template){
    e.preventDefault();

    var input = $('#task');
    Meteor.call('addTask', { name: input.val() });
    input.val('');
  }
});
