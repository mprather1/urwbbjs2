//user model
singleUser = Backbone.Model.extend({
  defaults: {
    name: "killb"
  },

  initialize: function() {

    console.log("A model instance named " + this.get("name") + " has been created");

    this.on('change', function() {
      console.log("Something in our model has changed.");
    });

    this.on('change:name', function() {
      console.log("The name for the " + this.get("name") + " model has changed");
    });
  }
});

// instantiate
var mike = new singleUser({
  name: "Mike Prather"
});

mike.set('name', "Michael Prather")
