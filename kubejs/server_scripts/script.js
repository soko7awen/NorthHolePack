// priority: 0

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
  // Change recipes here
  //Egg
  event.remove({ output: "farmersdelight:fried_egg" });

  event.shaped("3x supplementaries:rope", ["S", "S", "S"], {
    S: "farmersdelight:straw",
  });

  event.shaped("minecraft:lead", ["RR ", "RR ", "  R"], {
    R: "supplementaries:rope",
  });

  event.shaped("farmersdelight:safety_net", ["RR", "RR"], {
    R: "supplementaries:rope",
  });

  event.remove({ output: "farmersdelight:rope" });
  event.remove({ id: "farmersdelight:lead_from_rope" });
  event.remove({ id: "farmersdelight:safety_net" });

  event.remove({ output: "another_furniture:white_stool" });
  event.remove({ output: "another_furniture:orange_stool" });
  event.remove({ output: "another_furniture:magenta_stool" });
  event.remove({ output: "another_furniture:light_blue_stool" });
  event.remove({ output: "another_furniture:yellow_stool" });
  event.remove({ output: "another_furniture:lime_stool" });
  event.remove({ output: "another_furniture:pink_stool" });
  event.remove({ output: "another_furniture:gray_stool" });
  event.remove({ output: "another_furniture:light_gray_stool" });
  event.remove({ output: "another_furniture:cyan_stool" });
  event.remove({ output: "another_furniture:purple_stool" });
  event.remove({ output: "another_furniture:blue_stool" });
  event.remove({ output: "another_furniture:brown_stool" });
  event.remove({ output: "another_furniture:green_stool" });
  event.remove({ output: "another_furniture:red_stool" });
  event.remove({ output: "another_furniture:black_stool" });

  event.remove({ output: "quark:paper_lantern" });
  event.remove({ output: "quark:paper_lantern_sakura" });

  //Tuff
  event.remove({ output: "quark:polished_tuff" });
  event.remove({ output: "quark:tuff_stairs" });
  event.remove({ output: "quark:polished_tuff_slab" });
  event.remove({ output: "quark:polished_tuff_stairs" });
  event.remove({ output: "quark:tuff_bricks" });
  event.remove({ output: "quark:tuff_bricks_slab" });
  event.remove({ output: "quark:tuff_bricks_stairs" });
  event.remove({ output: "quark:polished_tuff_vertical_slab" });
  event.remove({ output: "quark:tuff_bricks_vertical_slab" });
  event.remove({ output: "quark:tuff_bricks_wall" });
  event.remove({ output: "quark:tuff_slab" });
  event.remove({ output: "quark:tuff_wall" });

  //calcite
  event.remove({ output: "quark:polished_calcite" });
  event.remove({ output: "quark:calcite_stairs" });
  event.remove({ output: "quark:polished_calcite_slab" });
  event.remove({ output: "quark:polished_calcite_stairs" });
  event.remove({ output: "quark:calcite_bricks" });
  event.remove({ output: "quark:calcite_bricks_slab" });
  event.remove({ output: "quark:calcite_bricks_stairs" });
  event.remove({ output: "quark:polished_calcite_vertical_slab" });
  event.remove({ output: "quark:calcite_bricks_vertical_slab" });
  event.remove({ output: "quark:calcite_bricks_wall" });
  event.remove({ output: "quark:calcite_slab" });
  event.remove({ output: "quark:calcite_wall" });

  //Cobble Bricks
  event.remove({ id: "twigs:cobblestone/cobblestone_bricks" });
  event.shaped("9x twigs:cobblestone_bricks", ["CCC", "CCC", "CCC"], {
    C: "minecraft:cobblestone",
  });

  event.remove({ output: "wildbackport:oak_chest_boat" });
  event.remove({ output: "wildbackport:spruce_chest_boat" });
  event.remove({ output: "wildbackport:birch_chest_boat" });
  event.remove({ output: "wildbackport:dark_oak_chest_boat" });
  event.remove({ output: "wildbackport:mangrove_chest_boat" });
  event.remove({ output: "wildbackport:acacia_chest_boat" });
  event.remove({ output: "wildbackport:jungle_chest_boat" });

  //Bamboo recipes
  event.shaped("everycomp:fd/twigs/bamboo_cabinet", ["SSS", "T T", "SSS"], {
    S: "twigs:stripped_bamboo_slab",
    T: "twigs:stripped_bamboo_trapdoor",
  });

  event.remove({ output: "everycomp:bp/twigs/bamboo_backpack_shelf" });

  event.shaped(
    "everycomp:bp/twigs/bamboo_backpack_shelf",
    ["   ", "BSB", "T T"],
    {
      S: "twigs:stripped_bamboo_slab",
      T: "minecraft:stick",
      B: "twigs:bundled_bamboo",
    }
  );
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});
