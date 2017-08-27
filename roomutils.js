
var MyRooms = [];

class RoomUtilsClass {
    constructor(doneLoading) {
        var self = this;

        $.ajax({
            dataType: "json",
            url: "myrooms.json",
            data: {},
            success: function (json) {
                MyRooms = json;

                for (var Idx in MyRooms_functions) {
                    var roomId = MyRooms_functions[Idx].RoomId;
                    var roomIdx = self.GetRoomIdxById(roomId);
                    if (roomIdx !== undefined) {
                        var room = MyRooms[roomIdx];
                        if (MyRooms_functions[Idx].Entry !== undefined) {
                            room.Entry = MyRooms_functions[Idx].Entry;
                        }

                        if (MyRooms_functions[Idx].UseItem !== undefined) {
                            room.UseItem = MyRooms_functions[Idx].UseItem;
                        }

                        MyRooms[roomIdx] = room;
                    }
                }

                doneLoading();
            }
        });
    }

    GetRoomIdxById(Id) {
        for (var ItemIdx in MyRooms)
        {
            if (MyRooms[ItemIdx].Id === Id)
            {
                return ItemIdx;
            }
        }

        return undefined;
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
