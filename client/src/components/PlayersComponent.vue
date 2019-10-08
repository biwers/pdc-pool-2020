<template>
    <div>
        <h1>The Ho's</h1>
        <p class="error" v-if="error">{{ error }}</p>
        <div>
            <div >
                <table class="players-table">
                  <thead>
                <tr>
                    <th @click="sort('name')">Player</th>
                    <th @click="sort('pos')">Position</th>
                    <th @click="sort('team')">Team</th>
                    <th @click="sort('points')">Points</th>
                </tr>
                </thead>
                <tbody>
                <tr 
                v-for="(player, index) in players"
                v-bind:item="player"
                v-bind:index="index"
                v-bind:key="player._id">
                    <td>{{player.name}}</td>
                    <td>{{player.pos}}</td>
                    <td>{{player.team}}</td>
                    <td>{{player.points}}</td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import PlayersService from '../PlayersService';

export default {
  name: 'PlayersComponent',
  data() {
    return {
      players: [],
      error: '',
      currentSort:'team',
      currentSortDir:'asc'
    }
  },
  async created() {
    try {
      this.players = await PlayersService.getPlayers();
    } catch(error) {
      this.error = error.message;
    }
  },
  methods:{
    sort:function(s) {
    //if s == current sort, reverse
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
    }
  },
  watch:{
    currentSort:function() {
      return this.players.sort((a,b) => {
        let modifier = 1;
      if(this.currentSortDir === 'desc') modifier = -1;
      if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
      if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
      return 0;
      });
    },
    currentSortDir:function() {
      return this.players.sort((a,b) => {
        let modifier = 1;
      if(this.currentSortDir === 'desc') modifier = -1;
      if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
      if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
      return 0;
      });
    }
  }
};
</script>
