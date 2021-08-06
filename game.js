kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

// import k from "./kaboom";

loadRoot("https://i.imgur.com/");
loadSprite("coin", "wbKxhcd.png");
loadSprite("evil-shroom", "KPO3fR9.png");
loadSprite("brick", "pogC9x5.png");
loadSprite("block", "M6rwarW.png");
loadSprite("mario", "Wb1qfhK.png");
loadSprite("mushroom", "0wMd92p.png");
loadSprite("surprise", "gesQ1KP.png");
loadSprite("unboxed", "bdrLpi6.png");
loadSprite("pipe-top-left", "ReTPiWY.png");
loadSprite("pipe-top-right", "hj2GK4n.png");
loadSprite("pipe-bottom-left", "c1cYSbt.png");
loadSprite("pipe-bottom-right", "nqQ79eI.png");

scene("game", () => {
  layers(["bg", "obj", "ui"], "obj");
  const map = [
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "                                       ",
    "      %   =*=%=                        ",
    "                                       ",
    "                             -+        ",
    "                       ^  ^  ()        ",
    "===============================   =====",
  ];
  const levelCfg = {
    width: 20,
    height: 20,
    "=": [sprite("block", solid())],
    $: [sprite("coin")],
    "%": [sprite("surprise"), solid(), "coin-surprise"],
    "*": [sprite("surprise"), solid(), "mushroom-surprise"],
    "}": [sprite("unboxed"), solid()],
    "(": [sprite("pipe-bottom-left"), solid(), scale(0.5)],
    ")": [sprite("pipe-bottom-right"), solid(), scale(0.5)],
    "-": [sprite("pipe-top-left"), solid(), scale(0.5)],
    "+": [sprite("pipe-top-right"), solid(), scale(0.5)],
    "^": [sprite("evil-shroom"), solid()],
    "#": [sprite("mushroom"), solid()],
  };
  const gameLevel = addLevel(map, levelCfg);
});

start("game");
