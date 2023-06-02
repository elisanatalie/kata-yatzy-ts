export function yatzy(...args: number[]): number {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != args.length; ++i) {
    var die = args[i];
    counts[die - 1]++;
  }
  for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
  return 0;
}
