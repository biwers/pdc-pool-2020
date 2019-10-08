<template>
    <div>
        <h1>Standings</h1>
        <div>
            <table class="standings-table">
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
                <tr
                v-for="(team, index) in standings"
                v-bind:item="team"
                v-bind:index="index"
                v-bind:key="team._id">
                    <td>{{index+1}}</td>
                    <td v-if="team.sid =='kid'"> <img src="../../public/images/sid-the-kid.jpg" alt="Sid the Kid" height=50>  {{team.name}}</td>
                    <td v-if="team.sid =='man'"> <img src="../../public/images/sid-the-man.jpeg" alt="Sid the Man" height=50>  {{team.name}}</td>
                    <td v-if="team.sid =='beast'"> <img src="../../public/images/sid-the-beast.jpg" alt="Sid the Beast" height=50>  {{team.name}}</td>
                    <td>{{team.points}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import TeamsService from '../TeamsService';

export default {
  name: 'TeamsComponent',
  data() {
    return {
      standings: [],
      error: ''
    }
  },
  async created() {
    try {
      this.standings = await TeamsService.getStandings();
    } catch(error) {
      this.error = error.message;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
