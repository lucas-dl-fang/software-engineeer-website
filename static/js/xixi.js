﻿$(document).ready(function () {
    var sel = 0;
    if (sel == 0) {
        $.get("/test?type=phone", function (data, status) {
            alert(status);
            var da = data["data"];
            //alert(da.length)
            for (var i in da) {
                alert(da[i][0]);
            }
        });
    }
    else if(sel == 1) {
        var dict = {
            "type": "phone",
            "password": "666",
            "array":[1,2,3,4,5]
        }
        $.post("/test", dict, function (data, ststus) {
            alert("777");
        });
    };
});