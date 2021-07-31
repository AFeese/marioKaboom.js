kaboom({
  global: true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0, 0, 0, 1],
});

loadRoot("https://imgur.com/");
loadSprite("coin", "wbKxhcd");
loadSprite("evil-shroom", "KPO3fR9");
loadSprite("brick", "pogC9x5");
loadSprite("block", "bdrLpi6");
loadSprite("mario", "Wb1qfhK");
loadSprite("mushroom", "0wMd92p");
loadSprite("suprise", "gesQ1KP");
loadSprite("unboxed", "bdrLpi6");
loadSprite("pipe-top-left", "ReTPiWY");
loadSprite("pipe-top-right", "hj2GK4n");
loadSprite("pipe-bottom-left", "c1cYSbt");
loadSprite("pipe-bottom-right", "nqQ79eI");

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
    "===============================   =====",
  ];

  const levelCfg = {
    width: 20,
    height: 20,
    "=": [sprite("block", solid())],
  };

  const gameLevel = addLevel(map, levelCfg);
});

start("game");
