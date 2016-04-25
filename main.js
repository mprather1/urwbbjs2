//user model
singleUser = Backbone.Model.extend({
  defaults: {
    name: "killb"
  }
});

// instantiate
var mike = new singleUser({
  name: "Michael Prather"
});
