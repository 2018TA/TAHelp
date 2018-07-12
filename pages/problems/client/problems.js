Template.problems.helpers({
    problems: function() {
        return Problems.find().fetch();
    }


})

Template.problem.events({
    'click #resolve': function() {
        Problems.remove(this._id);
    }

})
