// Visit the wiki for more info - https://kubejs.com/
console.info("Loaded Shaymin KubeJS (server_scripts)");

// #region Nuke unwanted

ServerEvents.recipes((event) => {
  // Remove all Create recipes
  event.remove({ mod: "create" });

  // Remove chisel from Chipped
  event.remove({ output: 'chipped:chisel' });
});

// Remove Create recipe categories
RecipeViewerEvents.removeCategories((event) => {
  event.remove("create:automatic_brewing");
  event.remove("create:automatic_packing");
  event.remove("create:automatic_shaped");
  event.remove("create:automatic_shapeless");
  event.remove("create:block_cutting");
  event.remove("create:draining");
  event.remove("create:fan_blasting");
  event.remove("create:fan_smoking");
  event.remove("create:item_application");
  event.remove("create:mystery_conversion");
  event.remove("create:spout_filling");
});

// Remove all Create items from loot tables
LootJS.modifiers((event) => {
  event.addTableModifier(/.*/).removeLoot(
    ItemFilter.custom((item) => {
      if (item.mod == "create") {
        return true;
      }

      return false;
    }),
  );
});

// #endregion

// #region Re-add stuff we actually want

ServerEvents.recipes((event) => {
  // #region Cardboard armor and sword
  event.shaped(
    Item.of("create:cardboard_helmet", 1), // arg 1: output
    [
      "AAA",
      "A A", // arg 2: the shape (array of strings)
    ],
    {
      A: "minecraft:paper", //arg 3: the mapping object
    },
  );

  event.shaped(
    Item.of("create:cardboard_chestplate", 1),
    [
      "A A",
      "AAA", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:paper",
    },
  );

  event.shaped(
    Item.of("create:cardboard_leggings", 1),
    [
      "AAA",
      "A A", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "minecraft:paper",
    },
  );

  event.shaped(
    Item.of("create:cardboard_boots", 1), // arg 1: output
    [
      "A A",
      "A A", // arg 2: the shape (array of strings)
    ],
    {
      A: "minecraft:paper", //arg 3: the mapping object
    },
  );

  event.shaped(
    Item.of("create:cardboard_sword", 1),
    [
      "AA",
      "AA", // arg 2: the shape (array of strings)
      "AA",
    ],
    {
      A: "minecraft:paper",
    },
  );
  // #endregion

  // #region Casings

  event.shapeless(Item.of("create:andesite_casing"), [
    "minecraft:spruce_planks",
    "minecraft:andesite",
  ]);

  event.shapeless(Item.of("create:railway_casing"), [
    "minecraft:obsidian",
    "minecraft:gold_ingot",
  ]);

  // #endregion

  // #region Food

  // Chocolate Glazed Berries
  event.shaped(
    Item.of("create:chocolate_glazed_berries", 1),
    [
      "AAA",
      "ABA", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:cocoa_beans",
      B: "minecraft:sweet_berries",
    },
  );

  // Sweet Roll
  event.shapeless(Item.of("create:sweet_roll"), [
    "cobblemon:lumiose_galette",
    "2x minecraft:sugar",
  ]);

  // Honeyed Apple
  event.shapeless(Item.of("create:honeyed_apple"), [
    "minecraft:apple",
    "minecraft:honey_bottle",
  ]);

  // #endregion

  // #region Seats

  // White Seat
  event.shapeless(Item.of("create:white_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:white_wool",
  ]);

  // Orange Seat
  event.shapeless(Item.of("create:orange_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:orange_wool",
  ]);

  // Magenta Seat
  event.shapeless(Item.of("create:magenta_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:magenta_wool",
  ]);

  // Light Blue Seat
  event.shapeless(Item.of("create:light_blue_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:light_blue_wool",
  ]);

  // Yellow Seat
  event.shapeless(Item.of("create:yellow_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:yellow_wool",
  ]);

  // Lime Seat
  event.shapeless(Item.of("create:lime_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:lime_wool",
  ]);

  // Pink Seat
  event.shapeless(Item.of("create:pink_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:pink_wool",
  ]);

  // Gray Seat
  event.shapeless(Item.of("create:gray_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:gray_wool",
  ]);

  // Light Gray Seat
  event.shapeless(Item.of("create:light_gray_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:light_gray_wool",
  ]);

  // Cyan Seat
  event.shapeless(Item.of("create:cyan_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:cyan_wool",
  ]);

  // Purple Seat
  event.shapeless(Item.of("create:purple_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:purple_wool",
  ]);

  // Blue Seat
  event.shapeless(Item.of("create:blue_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:blue_wool",
  ]);

  // Brown Seat
  event.shapeless(Item.of("create:brown_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:brown_wool",
  ]);

  // Green Seat
  event.shapeless(Item.of("create:green_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:green_wool",
  ]);

  // Red Seat
  event.shapeless(Item.of("create:red_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:red_wool",
  ]);

  // Black Seat
  event.shapeless(Item.of("create:black_seat"), [
    "#minecraft:wooden_slabs",
    "minecraft:black_wool",
  ]);

  // #endregion

  // #region Decorative blocks

  // Andesite Door
  event.shapeless(Item.of("create:andesite_door"), [
    "#minecraft:doors",
    "create:andesite_casing",
  ]);

  // Train Door
  event.shapeless(Item.of("create:train_door"), [
    "#minecraft:doors",
    "create:railway_casing",
  ]);

  // Train Trapdoor
  event.shapeless(Item.of("create:train_trapdoor"), [
    "#minecraft:trapdoors",
    "create:railway_casing",
  ]);

  // Framed Glass Door
  event.shaped(
    Item.of("create:framed_glass_door", 3),
    [
      "AA",
      "AA", // arg 2: the shape (array of strings)
      "AA",
    ],
    {
      A: "#c:glass_blocks",
    },
  );

  // Framed Glass Trapdoor
  event.shaped(
    Item.of("create:framed_glass_trapdoor", 2),
    [
      "AAA",
      "AAA", // arg 2: the shape (array of strings)
    ],
    {
      A: "#c:glass_blocks",
    },
  );

  // Copper Ladder
  event.shaped(
    Item.of("create:copper_ladder", 6),
    [
      "A A",
      "AAA", // arg 2: the shape (array of strings)
      "A A",
    ],
    {
      A: "minecraft:copper_ingot",
    },
  );

  // Glass
  event.stonecutting("minecraft:glass", "#c:glass_blocks/colorless");
  event.stonecutting("create:tiled_glass", "#c:glass_blocks/colorless");
  event.stonecutting("create:framed_glass", "#c:glass_blocks/colorless");
  event.stonecutting(
    "create:horizontal_framed_glass",
    "#c:glass_blocks/colorless",
  );
  event.stonecutting(
    "create:vertical_framed_glass",
    "#c:glass_blocks/colorless",
  );

  // Glass Panes
  event.stonecutting("minecraft:glass_pane", "#c:glass_panes/colorless");
  event.stonecutting("create:tiled_glass_pane", "#c:glass_panes/colorless");
  event.stonecutting("create:framed_glass_pane", "#c:glass_panes/colorless");
  event.stonecutting(
    "create:horizontal_framed_glass_pane",
    "#c:glass_panes/colorless",
  );
  event.stonecutting(
    "create:vertical_framed_glass_pane",
    "#c:glass_panes/colorless",
  );

  // #endregion

  // #region Misc

  // Super Glue
  event.shapeless(Item.of("create:super_glue"), [
    "minecraft:slime_ball",
    "minecraft:iron_nugget",
  ]);

  // Rose Quartz Lamp
  event.shaped(
    Item.of("create:rose_quartz_lamp", 1),
    [
      "ABA",
      "BCB", // arg 2: the shape (array of strings)
      "ABA",
    ],
    {
      A: "minecraft:quartz",
      B: "minecraft:redstone",
      C: "minecraft:redstone_lamp",
    },
  );

  // Desk Bell
  event.shaped(
    Item.of("create:desk_bell", 1),
    [
      "AAA",
      "ABA", // arg 2: the shape (array of strings)
      "CCC",
    ],
    {
      A: "minecraft:gold_nugget",
      B: "minecraft:redstone",
      C: "minecraft:spruce_slab",
    },
  );

  // Wrench
  event.shaped(
    Item.of("create:wrench", 1),
    [
      "AA",
      "AB", // arg 2: the shape (array of strings)
      " C",
    ],
    {
      A: "minecraft:gold_ingot",
      B: "minecraft:iron_ingot",
      C: "minecraft:stick",
    },
  );

  // Copper Nuggets
  event.shapeless(Item.of("minecraft:copper_ingot"), [
    "9x create:copper_nugget",
  ]);

  // Copper Ingot
  event.shapeless(Item.of("9x create:copper_nugget"), [
    "minecraft:copper_ingot",
  ]);

  // #endregion
});

// #endregion

PlayerEvents.loggedIn((event) => {
  let player = event.player;

  // First join check - give Pokeballs and food
  if (!player.persistentData.hasJoinedBefore) {
    player.persistentData.hasJoinedBefore = true;

    player.give(Item.of("cobblemon:premier_ball", 20));
    player.give(Item.of("cobblemon:pokedex_white"));
    player.give(Item.of("minecraft:steak", 10));

    player.tell(`Welcome to the server, ${player.getName()}!`);
  }
});
