$("input").on("change", function(){
    $("table").remove();
    var myFile = $('#fileinput').get(0).files[0];
    var fileURL = window.URL.createObjectURL(myFile);
    $.get(fileURL, function(cars){
        $("input").after("<table/>");
        var table = $("table");
        table.append("<tr><th>Brand</th><th>Model</th><th>Color</th></tr>");
        for (var i = 0; i < cars.length; i++){
            var brand = cars[i]['brand'];
            var model = cars[i]['model'];
            var color = cars[i]['color'];
            var row = $("<tr/>");
            var newrow = "<td>" + brand + "</td><td>" + model + "</td><td>"+ color + "</td>";
            row.append(newrow);
            table.append(row);
        }
    });
});
