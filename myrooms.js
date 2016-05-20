
var MyRooms = [
    {
        Id: 0,
        Title: "Your house",
        Description: "The interior pretty much resembles a crazy Pokemon(tm) laboratory. " +
                     "There are even three choices of Pokeballs to start your journey with. " +
                     "It's unlikely that there are actual Pokemon inside, but they're very decorative.",
        Items: [1,2,3],
        Paths: [
            {Room: 1, Title: "Go up to your room"},
            {Room: 3, Title: "Go outside"}
        ]
    },
    {
        Id: 1,
        Title: "Your bedroom",
        Description: "There's no bed here. Not even a TV. So why exactly is a Remote control lying on the floor?",
        Items: [4],
        Paths: [
            {Room: 0, Title: "Go downstairs"}
        ],
        Entry: function(Player) {
            if (this.Items.length == 0)
                this.Description = "There's no bed here. Not even a TV. There's an white spot on the floor where once was a Remote control."
        }
    },
    {
        Id: 2,
        Title: "Graveyard",
        Description: "You instantly died, that's what happens when you wander off. Next time stay in bed. Oh wait, you don't have a bed.",
        Items: [],
        Entry: function (Player) {
            if (!Player.HasBeenOnPath(1))
                this.Description += " (oh, spoiler... oops)";

            Player.Die();
        },
        BackgroundImage: "graveyard"
    },
    {
        Id: 3,
        Title: "In front of your house",
        Description: "You're in front of the house you grew up in. The town is never ending in its disappointment. Surely there's more to explore?",
        Items: [],
        Paths: [
            {Room: 0, Title: "Go inside"},
            {Room: 4, Title: "Head out"}
        ],
        Entry: function(Player) {
        }
    },
    {
        Id: 4,
        Title: "The publical display of boozery",
        Description:
            "It seems you found yourself in front of a pub. Coincidentally you feel quite thirsty to drink yourself into oblivion.",
        Items: [],
        Paths: [
            {Room: 5, Title: "Go inside"},
            {Room: 2, Title: "Resist, Keep walking"}
        ]
    },
    {
        Id: 5,
        Title: "The smell of happiness",
        Description: "",
        Items: [],
        Paths: [
            {Room: 5.1, Title: "Order a beer"}
        ],
        Entry: function(Player) {
            if (Player.HasItem(4)) {
                this.Description = "An angry bartender looks at you and immediately shouts: 'HEY YOU, GIVE ME THAT REMOTE!'";
                this.Paths = [{Room: 2, Title: "Run out as fast as you can"}];
            } else {
                this.Description = "A bartender looks grumpy and distracted, but seems ready to take your order nonetheless.";
                this.Paths = [{Room: 5.1, Title: "Order a beer"}];
            }
        },
        UseItem: function(Player, ItemId, UI) {
            if (ItemId == 4) {
                UI.Info("Well done.");
                Player.EarnPoints(1);

                return 5
            } else {
                UI.Info("So yeah, you shouldn't have done that.");

                return 2;
            }
        }
    },
    {
        Id: 5.1,
        Title: "The stank of reality",
        Description: "You order a beer, pay up, and gulp away the watery liquid within a few seconds.",
        Paths: [
            {Room: 5.1, Title: "Order another beer"},
            {Room: 4, Title: "Force yourself to the exit"}
        ]
    }
];

class RoomUtilsClass {
    constructor() {
    }

    GetRoomById(Id)
    {
        for (var ItemIdx in MyRooms)
        {
            if (MyRooms[ItemIdx].Id === Id)
            {
                return MyRooms[ItemIdx];
            }
        }

        return undefined;
    }
}
