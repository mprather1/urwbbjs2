//user model
SingleUser = Backbone.Model.extend({
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

//model collection
UsersCollection = Backbone.Collection.extend({
  model: SingleUser
});

//create model instances
var mike = new SingleUser({
  name: "Mike Prather"
});

var killb = new SingleUser({
  name: "Kill Bill"
});

var admin = new SingleUser({
  name: "admin"
});

//create collection instance
var userGroup = new UsersCollection([
  mike, killb
]);

//making changes
mike.set('name', "Michael Prather");
userGroup.add(admin);
userGroup.remove(killb);
