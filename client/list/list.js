Template.list.helpers({
  tasks: function(){
    return Tasks.find({});
  },
  formatDate: function(){
    return moment(this.registerDate).format('DD/MM/YYYY');
  }
});

Template.list.events({
  'click button': function(e, template){
    var task = this;
    Meteor.call('removeTask', task._id);
  }
});
