function predictPartyVictory(senate: string): string {
  let radiantCount = 0;
  let direCount = 0;
  let radiantBans = 0;
  let direBans = 0;

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      radiantCount++;
    } else {
      direCount++;
    }
  }

  while (radiantCount > 0 && direCount > 0) {
    for (let i = 0; i < senate.length; i++) {
      if (senate[i] === 'R') {
        if (radiantBans > 0) {
          radiantBans--;
          radiantCount--;
        } else {
          direBans++;
        }
      } else {
        if (direBans > 0) {
          direBans--;
          direCount--;
        } else {
          radiantBans++;
        }
      }
    }
  }

  return radiantCount > 0 ? 'Radiant' : 'Dire';
}
