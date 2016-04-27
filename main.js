//models
//user model
singleUser = Backbone.Model.extend({
  defaults: {
    name: "killb"
  }
});

//model collection
UsersCollection = Backbone.Collection.extend({
  model: singleUser
});


//views
//SingleUser view
singleUserView = Backbone.View.extend({
  tagName: 'li',
  className: 'userListItem',

  template: _.template( $("#userElement").html() ),

  render: function() {
    var userTemplate = this.template(this.model.toJSON());
    this.$el.html(userTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addBgColor',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.css('color', 'green');
  },

  removeBgColor: function() {
    this.$el.css('color', 'black');
  }

});

//user collection view
allUsersView = Backbone.View.extend({
  tagName: 'ul',

  render: function() {
    this.collection.each(this.addUser, this);
    return this;
  },

  addUser: function(user) {
    var userView = new singleUserView ({ model: user });
    this.$el.append(userView.render().el);
  }
});


//instantiation
//create model instances
var mike = new singleUser({
  name: "Mike Prather"
});

var killb = new singleUser({
  name: "Kill Bill"
});

var admin = new singleUser({
  name: "admin"
});

//create collection instance
var userGroup = new UsersCollection([
  mike, killb, admin
]);


//making changes needs to be befor collection view instance
mike.set('name', "Michael Prather");
userGroup.add(admin);
// userGroup.remove(killb);

// collection view instance
var userGroupView = new allUsersView({ collection: userGroup });
$('#allUsers').html(userGroupView.render().el);
