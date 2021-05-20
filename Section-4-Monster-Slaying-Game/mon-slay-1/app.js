const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
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
    renderDamageClass() {
      return 'log--damage';
    },
    renderHealthClass() {
      return 'log--heal';
    },
    isSpecialAttackAvailable() {
      return this.hasCurrentRoundPassed();
    },
    isHealAvailable() {
      return this.hasCurrentRoundPassed();
    },
  },
  watch: {},
  methods: {
    attack(playerType, min, max, opponentType) {
      let attackValue = getRandomValue(min, max);

      if (this[`${opponentType}Health`] - attackValue < 0) {
        attackValue = playerHealth;
      }

      this[`${opponentType}Health`] -= attackValue;
      this.log.push({ damage: attackValue, name: playerType });

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
      this.log.push({ heal: healValue, name: 'player' });
      this.attackPlayer(5, 10);
    },

    renderName(name) {
      return name === 'player' ? 'log--player' : 'log--monster';
    },

    hasCurrentRoundPassed() {
      return this.currentRound % 3 !== 0;
    },
  },
});

function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

app.mount('#game');
