// priority: 0

console.info(
  "Hello, World! (You will see this line every time client resources reload)"
);

onEvent("jei.hide.items", (event) => {
  // Hide items in JEI here
  // event.hide('minecraft:cobblestone')
  event.hide("farmersdelight:rope");

  event.hide("another_furniture:white_stool");
  event.hide("another_furniture:orange_stool");
  event.hide("another_furniture:magenta_stool");
  event.hide("another_furniture:light_blue_stool");
  event.hide("another_furniture:yellow_stool");
  event.hide("another_furniture:lime_stool");
  event.hide("another_furniture:pink_stool");
  event.hide("another_furniture:gray_stool");
  event.hide("another_furniture:light_gray_stool");
  event.hide("another_furniture:cyan_stool");
  event.hide("another_furniture:purple_stool");
  event.hide("another_furniture:blue_stool");
  event.hide("another_furniture:brown_stool");
  event.hide("another_furniture:green_stool");
  event.hide("another_furniture:red_stool");
  event.hide("another_furniture:black_stool");

  event.hide("quark:paper_lantern");
  event.hide("quark:paper_lantern_sakura");

  //Tuff
  event.hide("quark:polished_tuff");
  event.hide("quark:tuff_stairs");
  event.hide("quark:polished_tuff_slab");
  event.hide("quark:polished_tuff_stairs");
  event.hide("quark:tuff_bricks");
  event.hide("quark:tuff_bricks_slab");
  event.hide("quark:tuff_bricks_stairs");
  event.hide("quark:polished_tuff_vertical_slab");
  event.hide("quark:tuff_bricks_vertical_slab");
  event.hide("quark:tuff_bricks_wall");
  event.hide("quark:tuff_slab");
  event.hide("quark:tuff_wall");

  //calcite
  event.hide("quark:polished_calcite");
  event.hide("quark:calcite_stairs");
  event.hide("quark:polished_calcite_slab");
  event.hide("quark:polished_calcite_stairs");
  event.hide("quark:calcite_bricks");
  event.hide("quark:calcite_bricks_slab");
  event.hide("quark:calcite_bricks_stairs");
  event.hide("quark:polished_calcite_vertical_slab");
  event.hide("quark:calcite_bricks_vertical_slab");
  event.hide("quark:calcite_bricks_wall");
  event.hide("quark:calcite_slab");
  event.hide("quark:calcite_wall");

  event.hide("wildbackport:oak_chest_boat");
  event.hide("wildbackport:spruce_chest_boat");
  event.hide("wildbackport:birch_chest_boat");
  event.hide("wildbackport:dark_oak_chest_boat");
  event.hide("wildbackport:mangrove_chest_boat");
  event.hide("wildbackport:acacia_chest_boat");
  event.hide("wildbackport:jungle_chest_boat");

  //Banana
  event.hide("alexsmobs:banana");
  event.hide("alexsmobs:banana_peel");

  //Milk
  event.hide("farmersdelight:milk_bottle");

  //Egg
  event.hide("farmersdelight:fried_egg");

  //Azalea
  event.hide("everycomp:af/ecologics/azalea_planter_box");
  event.hide("everycomp:af/ecologics/flowering_azalea_planter_box");
  event.hide("everycomp:af/ecologics/azalea_shutter");
  event.hide("everycomp:af/ecologics/flowering_azalea_shutter");
  event.hide("everycomp:af/ecologics/azalea_table");
  event.hide("everycomp:af/ecologics/flowering_azalea_table");
  event.hide("everycomp:af/ecologics/azalea_chair");
  event.hide("everycomp:af/ecologics/flowering_azalea_table");
  event.hide("everycomp:af/ecologics/azalea_shelf");
  event.hide("everycomp:af/ecologics/flowering_azalea_shelf");
  event.hide("everycomp:af/ecologics/flowering_azalea_chair");
  event.hide("everycomp:bp/ecologics/azalea_backpack_shelf");
  event.hide("everycomp:bp/ecologics/flowering_azalea_backpack_shelf");
  event.hide("everycomp:fd/ecologics/azalea_cabinet");
  event.hide("everycomp:fd/ecologics/flowering_azalea_cabinet");
  event.hide("everycomp:c/ecologics/azalea_window");
  event.hide("everycomp:c/ecologics/flowering_azalea_window");
  event.hide("everycomp:c/ecologics/azalea_window_pane");
  event.hide("everycomp:c/ecologics/flowering_azalea_window_pane");
  event.hide("everycomp:q/ecologics/flowering_azalea_bookshelf");
  event.hide("everycomp:q/ecologics/stripped_flowering_azalea_post");
  event.hide("everycomp:q/ecologics/flowering_azalea_post");
  event.hide("everycomp:q/ecologics/vertical_flowering_azalea_planks");
  event.hide("everycomp:q/ecologics/flowering_azalea_ladder");
  event.hide("everycomp:q/ecologics/flowering_azalea_chest");
  event.hide("everycomp:q/ecologics/flowering_azalea_trapped_chest");
  event.hide("everycomp:tw/ecologics/flowering_azalea_table");
  event.hide("everycomp:tw/ecologics/azalea_table");
  event.hide("supplementaries:ecologics/sign_post_flowering_azalea");
  event.hide("supplementaries:ecologics/sign_post_azalea");
  event.hide("ecologics:azalea_log");
  event.hide("ecologics:flowering_azalea_log");
  event.hide("ecologics:stripped_azalea_log");
  event.hide("ecologics:azalea_wood");
  event.hide("ecologics:flowering_azalea_wood");
  event.hide("ecologics:stripped_azalea_wood");
  event.hide("ecologics:azalea_planks");
  event.hide("ecologics:flowering_azalea_planks");
  event.hide("ecologics:flowering_azalea_log");
  event.hide("ecologics:azalea_slab");
  event.hide("ecologics:flowering_azalea_slab");
  event.hide("ecologics:azalea_stairs");
  event.hide("ecologics:flowering_azalea_stairs");
  event.hide("ecologics:azalea_fence");
  event.hide("ecologics:flowering_azalea_fence");
  event.hide("ecologics:azalea_fence_gate");
  event.hide("ecologics:flowering_azalea_fence_gate");
  event.hide("ecologics:azalea_door");
  event.hide("ecologics:flowering_azalea_door");
  event.hide("ecologics:azalea_trapdoor");
  event.hide("ecologics:flowering_azalea_trapdoor");
  event.hide("ecologics:azalea_button");
  event.hide("ecologics:azalea_pressure_plate");
  event.hide("ecologics:azalea_sign");
  event.hide("ecologics:flowering_azalea_sign");
  event.hide("ecologics:azalea_boat");
  event.hide("ecologics:flowering_azalea_boat");
  event.hide("supplementaries:ecologics/hanging_sign_flowering_azalea");
  event.hide("supplementaries:ecologics/hanging_sign_azalea");

  //Mud
  event.hide("biomesoplenty:mud");
  event.hide("biomesoplenty:mud_bricks");
  event.hide("biomesoplenty:mud_brick_stairs");
  event.hide("biomesoplenty:mud_brick_slab");
  event.hide("biomesoplenty:mud_brick_wall");
  event.hide("biomesoplenty:mud_ball");
  event.hide("biomesoplenty:mud_brick");
  event.hide("compatoplenty:mud_brick_vertical_slab");

  //Friends and foes
  event.hide("friendsandfoes:acacia_beehive");
  event.hide("friendsandfoes:oak_beehive");
  event.hide("friendsandfoes:dark_oak_beehive");
  event.hide("friendsandfoes:spruce_beehive");
  event.hide("friendsandfoes:jungle_beehive");
  event.hide("friendsandfoes:birch_beehive");
  event.hide("friendsandfoes:crimson_beehive");
  event.hide("friendsandfoes:warped_beehive");
  event.hide("friendsandfoes:buttercup");
  event.hide("friendsandfoes:iceologer_spawn_egg");
  event.hide("friendsandfoes:moobloom_spawn_egg");

  //Broken bamboo
  //event.hide('everycomp:fd/twigs/bamboo_cabinet')
});
