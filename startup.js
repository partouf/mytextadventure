
$(document).ready(function() {
    var ItemUtils = new ItemUtilsClass();
    var RoomUtils = new RoomUtilsClass();
    var UI = new MyTextAdventUIClass(ItemUtils, RoomUtils);

    var CurrentPlayer = new MyTextAdventurePlayerClass("Ash", ItemUtils, RoomUtils, UI);

    UI.Debug(CurrentPlayer);
    UI.Info("Hello, World!");

    CurrentPlayer.ChoosePath(undefined, 0);
});
