<template>
  <div class="container">
    <div class="create-team">
      <!-- <form id="create-team"> -->
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error, index) in errors"
              v-bind:key="index">{{ error }}</li>
            </ul>
        </p>
        <h1>Create Your Team!</h1>
        <label for="name-field">Name: </label>
        <input id="name-field" type="text" name="Name" v-model="name">
        <br>
        <label for="owner-field">Owner: </label>
        <input id="owner-field" type="text" name="Owner" v-model="owner">
        <br>
        <label for="forwards">Pick your forwards: </label>
        <select id="forwards" name="f1" form="f1" v-model="f1">
          <option value='{"name":"Bryan Little", "id":"8473412"}'>Bryan Little</option>
          <option value='{"name":"Brad Marchand", "id":"8473419"}'>Brad Marchand</option>
          <option value='{"name":"Jake Guentzel", "id":"8477404"}'>Jake Guentzel</option>
          <option value='{"name":"Steven Stamkos", "id":"8474564"}'>Steven Stamkos</option>
          <option value='{"name":"Alex Ovechkin", "id":"8471214"}'>Alex Ovechkin</option>
          <option value='{"name":"Brayden Point", "id":"8478010"}'>Brayden Point</option>
          <option value='{"name":"David Pastrnak", "id":"8477956"}'>David Pastrnak</option>
          <option value='{"name":"Kyle Connor", "id":"8478398"}'>Kyle Connor</option>
          <option value='{"name":"Matthew Tkachuk", "id":"8479314"}'>Matthew Tkachuk</option>
          <option value='{"name":"Teuvo Teravainen", "id":"8476882"}'>Teuvo Teravainen</option>          
        </select>
        <select name="f2" form="f2" v-model="f2">
          <option value='{"name":"Bryan Little", "id":"8473412"}'>Bryan Little</option>
          <option value='{"name":"Brad Marchand", "id":"8473419"}'>Brad Marchand</option>
          <option value='{"name":"Jake Guentzel", "id":"8477404"}'>Jake Guentzel</option>
          <option value='{"name":"Steven Stamkos", "id":"8474564"}'>Steven Stamkos</option>
          <option value='{"name":"Alex Ovechkin", "id":"8471214"}'>Alex Ovechkin</option>
          <option value='{"name":"Brayden Point", "id":"8478010"}'>Brayden Point</option>
          <option value='{"name":"David Pastrnak", "id":"8477956"}'>David Pastrnak</option>
          <option value='{"name":"Kyle Connor", "id":"8478398"}'>Kyle Connor</option>
          <option value='{"name":"Matthew Tkachuk", "id":"8479314"}'>Matthew Tkachuk</option>
          <option value='{"name":"Teuvo Teravainen", "id":"8476882"}'>Teuvo Teravainen</option> 
        </select>
        <select name="f3" form="f3" v-model="f3">
          <option value='{"name":"Bryan Little", "id":"8473412"}'>Bryan Little</option>
          <option value='{"name":"Brad Marchand", "id":"8473419"}'>Brad Marchand</option>
          <option value='{"name":"Jake Guentzel", "id":"8477404"}'>Jake Guentzel</option>
          <option value='{"name":"Steven Stamkos", "id":"8474564"}'>Steven Stamkos</option>
          <option value='{"name":"Alex Ovechkin", "id":"8471214"}'>Alex Ovechkin</option>
          <option value='{"name":"Brayden Point", "id":"8478010"}'>Brayden Point</option>
          <option value='{"name":"David Pastrnak", "id":"8477956"}'>David Pastrnak</option>
          <option value='{"name":"Kyle Connor", "id":"8478398"}'>Kyle Connor</option>
          <option value='{"name":"Matthew Tkachuk", "id":"8479314"}'>Matthew Tkachuk</option>
          <option value='{"name":"Teuvo Teravainen", "id":"8476882"}'>Teuvo Teravainen</option> 
        </select>
        <select name="f4" form="f4" v-model="f4">
          <option value='{"name":"Bryan Little", "id":"8473412"}'>Bryan Little</option>
          <option value='{"name":"Brad Marchand", "id":"8473419"}'>Brad Marchand</option>
          <option value='{"name":"Jake Guentzel", "id":"8477404"}'>Jake Guentzel</option>
          <option value='{"name":"Steven Stamkos", "id":"8474564"}'>Steven Stamkos</option>
          <option value='{"name":"Alex Ovechkin", "id":"8471214"}'>Alex Ovechkin</option>
          <option value='{"name":"Brayden Point", "id":"8478010"}'>Brayden Point</option>
          <option value='{"name":"David Pastrnak", "id":"8477956"}'>David Pastrnak</option>
          <option value='{"name":"Kyle Connor", "id":"8478398"}'>Kyle Connor</option>
          <option value='{"name":"Matthew Tkachuk", "id":"8479314"}'>Matthew Tkachuk</option>
          <option value='{"name":"Teuvo Teravainen", "id":"8476882"}'>Teuvo Teravainen</option> 
        </select>
        <select name="f5" form="f5" v-model="f5">
          <option value='{"name":"Bryan Little", "id":"8473412"}'>Bryan Little</option>
          <option value='{"name":"Brad Marchand", "id":"8473419"}'>Brad Marchand</option>
          <option value='{"name":"Jake Guentzel", "id":"8477404"}'>Jake Guentzel</option>
          <option value='{"name":"Steven Stamkos", "id":"8474564"}'>Steven Stamkos</option>
          <option value='{"name":"Alex Ovechkin", "id":"8471214"}'>Alex Ovechkin</option>
          <option value='{"name":"Brayden Point", "id":"8478010"}'>Brayden Point</option>
          <option value='{"name":"David Pastrnak", "id":"8477956"}'>David Pastrnak</option>
          <option value='{"name":"Kyle Connor", "id":"8478398"}'>Kyle Connor</option>
          <option value='{"name":"Matthew Tkachuk", "id":"8479314"}'>Matthew Tkachuk</option>
          <option value='{"name":"Teuvo Teravainen", "id":"8476882"}'>Teuvo Teravainen</option> 
        </select>
        <br>
        <label for="defensemen">Pick your defensemen: </label>
        <select id="defensemen" name="d1" form="d1" v-model="d1">
          <option value='{"name":"Ryan Ellis", "id":"8475176"}'>Ryan Ellis</option>
          <option value='{"name":"P.K. Subban", "id":"8474056"}'>P.K. Subban</option>
          <option value='{"name":"Dustin Byfuglien", "id":"8470834"}'>Dustin Byfuglien</option>
          <option value='{"name":"Shea Theodore", "id":"8477447"}'>Shea Theodore</option>
          <option value='{"name":"Charlie McAvoy", "id":"8479325"}'>Charlie McAvoy</option>
          <option value='{"name":"Dante Fabbro", "id":"8479371"}'>Dante Fabbro</option>
        </select>
        <select name="d2" form="d2" v-model="d2">
          <option value='{"name":"Ryan Ellis", "id":"8475176"}'>Ryan Ellis</option>
          <option value='{"name":"P.K. Subban", "id":"8474056"}'>P.K. Subban</option>
          <option value='{"name":"Dustin Byfuglien", "id":"8470834"}'>Dustin Byfuglien</option>
          <option value='{"name":"Shea Theodore", "id":"8477447"}'>Shea Theodore</option>
          <option value='{"name":"Charlie McAvoy", "id":"8479325"}'>Charlie McAvoy</option>
          <option value='{"name":"Dante Fabbro", "id":"8479371"}'>Dante Fabbro</option>
        </select>
        <select name="d3" form="d3" v-model="d3">
          <option value='{"name":"Ryan Ellis", "id":"8475176"}'>Ryan Ellis</option>
          <option value='{"name":"P.K. Subban", "id":"8474056"}'>P.K. Subban</option>
          <option value='{"name":"Dustin Byfuglien", "id":"8470834"}'>Dustin Byfuglien</option>
          <option value='{"name":"Shea Theodore", "id":"8477447"}'>Shea Theodore</option>
          <option value='{"name":"Charlie McAvoy", "id":"8479325"}'>Charlie McAvoy</option>
          <option value='{"name":"Dante Fabbro", "id":"8479371"}'>Dante Fabbro</option>
        </select>
        <br>
        <label for="goalies">Pick your goalies: </label>
        <select id="goalies" name="g1" form="g1" v-model="g1">
          <option value='{"name":"Andrei Vasilevskiy", "id":"8476883"}'>Andrei Vasilevskiy</option>
          <option value='{"name":"Braden Holtby", "id":"8474651"}'>Braden Holtby</option>
          <option value='{"name":"Connor Hellebuyck", "id":"8476945"}'>Connor Hellebuyck</option>        
        </select>
        <select name="g2" form="g2" v-model="g2">
          <option value='{"name":"Andrei Vasilevskiy", "id":"8476883"}'>Andrei Vasilevskiy</option>
          <option value='{"name":"Braden Holtby", "id":"8474651"}'>Braden Holtby</option>
          <option value='{"name":"Connor Hellebuyck", "id":"8476945"}'>Connor Hellebuyck</option>        
        </select>
        <br>
        <button v-on:click="createTeam">Submit!</button>
      <!-- </form> -->
    </div>
    <h1>Teams</h1>
    <div>
      <div 
        v-for="(team, index) in teams"
        v-bind:item="team"
        v-bind:index="index"
        v-bind:key="team._id">
        <h3>{{ `${team.name} | ${team.owner}`}}</h3>
        
        <table width=50% align="center">
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>Forward</td>
            <td>{{team.team.forwards.f1.name}}</td>
            <td>{{team.team.forwards.f1.points}}</td>
          </tr>
          <tr>
            <td>Forward</td>
            <td>{{team.team.forwards.f2.name}}</td>
            <td>{{team.team.forwards.f2.points}}</td>
          </tr>
          <tr>
            <td>Forward</td>
            <td>{{team.team.forwards.f3.name}}</td>
            <td>{{team.team.forwards.f3.points}}</td>
          </tr>
          <tr>
            <td>Forward</td>
            <td>{{team.team.forwards.f4.name}}</td>
            <td>{{team.team.forwards.f4.points}}</td>
          </tr>
          <tr>
            <td>Forward</td>
            <td>{{team.team.forwards.f5.name}}</td>
            <td>{{team.team.forwards.f5.points}}</td>
          </tr>
          <tr>
            <td>Defensemen</td>
            <td>{{team.team.defensemen.d1.name}}</td>
            <td>{{team.team.defensemen.d1.points}}</td>
          </tr>
          <tr>
            <td>Defensemen</td>
            <td>{{team.team.defensemen.d2.name}}</td>
            <td>{{team.team.defensemen.d2.points}}</td>
          </tr>
          <tr>
            <td>Defensemen</td>
            <td>{{team.team.defensemen.d3.name}}</td>
            <td>{{team.team.defensemen.d3.points}}</td>
          </tr>
          <tr>
            <td>Goalies</td>
            <td>{{team.team.goalies.g1.name}}</td>
            <td>{{team.team.goalies.g1.points}}</td>
          </tr>
          <tr>
            <td>Goalies</td>
            <td>{{team.team.goalies.g2.name}}</td>
            <td>{{team.team.goalies.g2.points}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TeamsService from '../TeamsService';
import PlayersService from '../PlayersService';

export default {
  name: 'TeamsComponent',
  data() {
    return {
      teams: [],
      players: [],
      errors: [],
      name: '',
      owner: '',
      f1: '',
      f2: '',
      f3: '',
      f4: '',
      f5: '',
      d1: '',
      d2: '',
      d3: '',
      g1: '',
      g2: ''
    }
  },
  async created() {
    try {
      this.teams = await TeamsService.getTeams();
      this.players = await PlayersService.getPlayers();
    } catch(error) {
      this.error = error.message;
    }
  },
  methods: {
    async createTeam() {
      this.errors = [];
      if(!this.name){
        this.errors.push('Please add a team name');
      }
      if(!this.owner){
        this.errors.push('Please add a team owner');
      }
      if(!this.f1 || !this.f2 || !this.f3 || !this.f4 || !this.f5){
        this.errors.push('Please select 5 forwards');
      } else if(this.f1 == this.f2 || this.f1 == this.f3 || this.f1 == this.f4 
        || this.f1 == this.f5 || this.f2 == this.f3 || this.f2 == this.f4
        || this.f2 == this.f5 || this.f3 == this.f4 || this.f3 == this.f4
        || this.f4 == this.f5){
        this.errors.push('Cannot have duplicate forwards');
      }
      if(!this.d1 || !this.d2 || !this.d3){
        this.errors.push('Please select 3 defensemen');
      } else if(this.d1 == this.d2 || this.d1 == this.d3 || this.d2 == this.d3){
        this.errors.push('Cannot have duplicate defensemen');
      }
      if(!this.g1 || !this.g2){
        this.errors.push('Please select 2 goalies');
      } else if(this.g1 == this.g2){
        this.errors.push('Cannot have duplicate goalies');
      }

      if(this.errors.length){
        return;
      }
      await TeamsService.insertTeam(
        {
          name:this.name,
          owner:this.owner,
          team: {
                forwards:{
                  f1:this.f1,
                  f2:this.f2,
                  f3:this.f3,
                  f4:this.f4,
                  f5:this.f5
                },
                defensemen:{
                  d1:this.d1,
                  d2:this.d2,
                  d3:this.d3
                },
                goalies:{
                  g1:this.g1,
                  g2:this.g2
              }
          }
        }
      );
      this.teams = await TeamsService.getTeams();
    }
  }
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
