
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
        ],
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
            {Room: 2, Title: "Head out"}
        ],
        Entry: function(Player) {
        }
    }
];
