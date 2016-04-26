//user model
SingleUser = Backbone.Model.extend({
  defaults: {
    name: "killb"
  }
});

//model collection
UsersCollection = Backbone.Collection.extend({
  model: SingleUser
});

//SingleUser view
singleUserView = Backbone.View.extend({
  tagName: 'li',
  className: 'userListItem',

  template: _.template( $("#userElement").html() ),

  render: function() {
    var userTemplate = this.template(this.model.toJSON());
    this.$el.html(userTemplate);
    return this;
  }
});


//instantiation
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
