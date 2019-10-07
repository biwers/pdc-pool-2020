<template>
    <div>
        <h1>The Ho's</h1>
        <p class="error" v-if="error">{{ error }}</p>
        <div>
            <div >
                <table class="players-table">
                <tr>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
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
      error: ''
    }
  },
  async created() {
    try {
      this.players = await PlayersService.getPlayers();
    } catch(error) {
      this.error = error.message;
    }
  },
};
</script>
