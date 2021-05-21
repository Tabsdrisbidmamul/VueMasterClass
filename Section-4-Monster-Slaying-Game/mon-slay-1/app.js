const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      log: [],
    };
  },
  computed: {
    monsterHealthBarStyle() {
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthBarStyle() {
      return { width: `${this.playerHealth}%` };
    },
    healthBarNumber() {
      return { display: 'flex', justifyContent: 'flex-end' };
    },
    isSpecialAttackAvailable() {
      return this.hasCurrentRoundPassed();
    },
    isHealAvailable() {
      return this.hasCurrentRoundPassed();
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // lost
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // lost
        this.winner = 'player';
      }
    },
  },
  methods: {
    attack(playerType, min, max, opponentType) {
      let attackValue = getRandomValue(min, max);

      if (this[`${opponentType}Health`] - attackValue < 0) {
        attackValue = this[`${opponentType}Health`];
      }

      this[`${opponentType}Health`] -= attackValue;
      this.addLogMessage(playerType, 'damage', attackValue, opponentType);

      if (playerType === 'player') {
        this.currentRound++;
        this.attackPlayer(5, 10);
      }
    },

    specialAttack() {
      this.attackMonster(10, 15);
    },

    attackMonster(min, max) {
      this.attack('player', min, max, 'monster');
    },

    attackPlayer(min, max) {
      this.attack('monster', min, max, 'player');
    },

    heal() {
      let healValue = getRandomValue(8, 20);

      if (this.playerHealth + healValue > 100) {
        healValue = 100 - this.playerHealth;
      }

      this.playerHealth += healValue;
      this.currentRound++;
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer(5, 10);
    },

    addLogMessage(playerType, action, value, opponentType) {
      this.log.unshift({ playerType, action, value, opponentType });
    },

    hasCurrentRoundPassed() {
      return this.currentRound % 3 !== 0;
    },

    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.log = [];
    },

    gameLost() {
      this.addLogMessage('player', 'surrender', 0, 'monster');
      this.winner = 'monster';
    },
  },
});

function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.mount('#game');
