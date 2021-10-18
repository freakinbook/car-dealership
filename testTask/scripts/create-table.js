$("input").on("change", function(){
    $("table").remove(); //removing previous table if one was created
    //receiving the file that was passed in input 
    var myFile = $('#fileinput').get(0).files[0];
    //transforming path to the json into URL
    //because $.get() doesn't work with local paths 
    var fileURL = window.URL.createObjectURL(myFile);
    $.get(fileURL, function(cars){
        $("input").after("<table/>");
        var table = $("table");
        table.append("<tr><th>Brand</th><th>Model</th>" +
            "<th>Color</th><th>Availability</th></tr>");
        for (var i = 0; i < cars.length; i++){
            var brand = cars[i]['brand'];
            var model = cars[i]['model'];
            var color = cars[i]['color'];
            var availability = isAvailable();
            var row;
            if (availability == "not available"){
                row = $('<tr class="not-available"/>');
            } else{
                row = $("<tr/>");
            }
            var rowContent = "<td>" + brand + "</td><td>" 
                + model + "</td><td>"+ color + "</td><td>" 
                + availability + "</td>";
            row.append(rowContent);
            table.append(row);
        }
    });
});

/*
returns "Call dealer" or "not available" randomly
*/
function isAvailable(){
    var randomBoolean = Math.random() < 0.5; //return true or false randomly
    var cheekyLine = "Call Dmitrii. Tell him he got the job.";
    if (randomBoolean){
        return "not available"
    }
    return "<a href = '#' onClick='alert(\"" + cheekyLine 
        + "\")'>Call dealer</a>";
}
