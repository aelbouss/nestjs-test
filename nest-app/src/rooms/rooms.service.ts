
export  class   RoomsService
{
     rooms:{ etage : number, view : string, encludedfood : boolean } [] = [
        {etage : 1, view : "infont of beach",  encludedfood : true },
        {etage : 2, view : "infront of foret", encludedfood : true },
        {etage : 3, view : "street", encludedfood : false } 
    ];
    GetAvailableRooms(){ 
        return this.rooms;
    } 
}

