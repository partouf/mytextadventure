
var MyItems = [
    {Id: 0, Title: "Invisible"},
    {Id: 1, Title: "Red Pokeball"},
    {Id: 2, Title: "Blue Pokeball"},
    {Id: 3, Title: "Yellow Pokeball"},
    {Id: 4, Title: "Remote control"}
];

class ItemUtilsClass {
    constructor() {
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
