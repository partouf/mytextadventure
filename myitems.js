
var MyItems = [];

class ItemUtilsClass {
    constructor(doneLoading) {
        var self = this;

        $.ajax({
            dataType: "json",
            url: "myitems.json",
            data: {},
            success: function (json) {
                MyItems = json;

                doneLoading();
            }
        });
    }

    GetItemById(Id)
    {
        for (var ItemIdx in MyItems)
        {
            if (MyItems[ItemIdx].Id === Id)
            {
                return MyItems[ItemIdx];
            }
        }

        return undefined;
    }
}
