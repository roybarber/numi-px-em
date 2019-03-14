numi.addFunction({ "id": "pxem", "phrases": "px" }, function(values) {
    if (values.length === 1) {
        return { parseInt(values[0]) / parseFloat(16) };
    } else if(values.length === 2 ) {
        return { parseInt(values[0]) / parseFloat(values[1]) };
    }
});
