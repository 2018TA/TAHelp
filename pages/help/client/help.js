Template.help.events({
    'click #submit': function() {
        var name = $("#name").val()
        var problem = $("#problem").val();
        var priority = $("#priority").val();

        var object = {name:name, problem:problem, priority:priority};

        $("#name").val("");
        $("#problem").val("");
        $("#priority").val("low");

        Problems.insert(object);

    }


})
