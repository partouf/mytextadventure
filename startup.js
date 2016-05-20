
$(document).ready(function() {
    var PlayersInRooms = [];

    var ItemUtils = new ItemUtilsClass();
    var UI = new MyTextAdventUIClass(ItemUtils);

    var CurrentPlayer = new MyTextAdventurePlayerClass("Ash", ItemUtils, UI);
    CurrentPlayer.CurrentSituation = MyRooms[0];
    PlayersInRooms[PlayersInRooms.length] = CurrentPlayer;

    console.log(CurrentPlayer);

    CurrentPlayer.ShowNextStep(CurrentPlayer.CurrentSituation, undefined);
});
