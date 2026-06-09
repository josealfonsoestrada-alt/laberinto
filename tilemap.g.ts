// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006030303030303030303030303030307020101010101010101010101010101040201010101010101010101010101010402010101010101010101010101010104020101010a01010a0101010101010104020101010a01010a0a0a0a0a0a010104020101010a010101010101010a010104020101010c010b01010101010a010104020101010a010101010101010a0101040201010a0a01010101010101010101040201010101010101010e0101010101040201010101010101010a0101010101040201010101010101010a01010101010402010101010a0a0a0d0a0e010101010402010101010e010101010e010101010408050505050505050505050505050509`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . 2 . . . . . . . 2 
2 . . . 2 . . 2 2 2 2 2 2 . . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . . . 2 2 2 . 2 2 . . . . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11,myTiles.tile1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.dungeon.floorLight0,myTiles.tile2,sprites.dungeon.floorLight1,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
