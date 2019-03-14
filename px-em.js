numi.addUnit({
    "id": "rem",
    "phrases": "rem",
    "baseUnitId": "em",
    "format" : "rem",
    "ratio" : 1,
 });

numi.addFunction({ "id": "pxem", "phrases": "pxem" }, function(values) {
    if (values.length === 1) {
        return { "double": values[0].double / 16 , "unitId" : "em" };
    } else if(values.length === 2 ) {
        return { "double": values[0].double / values[1].double,  "unitId" : "em"};
    }
});

numi.addFunction({ "id": "pxrem", "phrases": "pxrem" }, function(values) {
    if (values.length === 1) {
        return { "double": values[0].double / 16 , "unitId" : "rem" };
    } else if(values.length === 2 ) {
        return { "double": values[0].double / values[1].double,  "unitId" : "rem"};
    }
});
