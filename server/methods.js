Meteor.methods({
  addTask: function(obj){
    Tasks.insert({name: obj.name, registerDate: new Date(), user: this.userId});
  },
  removeTask: function(id) {
    Tasks.remove({_id: id});
  }
});
