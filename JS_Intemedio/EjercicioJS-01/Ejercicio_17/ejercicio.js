function bucleFor() {
  for (var i = 0; i < 3; i++) {
    if (i === 1) {
      continue;
    }
    console.log(i);
  }
}

bucleFor();
