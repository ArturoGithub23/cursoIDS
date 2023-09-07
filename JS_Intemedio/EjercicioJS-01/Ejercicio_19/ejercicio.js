function bucleFor() {
  for (var i = 0; i < 5; i++) {
    nextLoop2Iteration: for (var j = 0; j < 5; j++) {
      if (i == j) break;
      nextLoop2Iteration;
      console.log(i, j);
    }
  }
}

bucleFor();
