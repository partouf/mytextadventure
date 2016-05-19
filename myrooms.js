
var MyRooms = [
    {
        Title: "Your house",
        Items: [1,2,3],
        Paths: [
            {Room: 1, Title: "Go up to your room"},
            {Room: 2, Title: "Give up"}
        ],
        Entry: undefined
    },
    {
        Title: "Your bedroom",
        Items: [4],
        Paths: [
            {Room: 0, Title: "Go downstairs"}
        ],
        Entry: undefined
    },
    {
        Title: "Graveyard",
        Items: [],
        Entry: function () {
            console.log("You're dead, nobody will miss you, please close your browser.");
        }
    }
];
