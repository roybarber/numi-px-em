numi.addFunction({ "id": "pxem", "phrases": "pxem" }, function(values) {
    if (values.length === 1) {
        return { "double": values[0].double / 16 };
    } else if(values.length === 2 ) {
        return { "double": values[0].double / values[1].double };
    }
});
