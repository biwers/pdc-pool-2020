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
        <form class="form form--team">
          <div class="form__item">
            <label class="form__label" for="name-field">Name</label>
            <input id="name-field" type="text" name="Name" v-model="name">
          </div>
          <div class="form__item">
            <label class="form__label" for="owner-field">Owner</label>
            <input id="owner-field" type="text" name="Owner" v-model="owner">
          </div>
          <div class="form__item form__item--radio-group">
            <div class="form__item form__item--radio-option">
              <input type="radio" name="gender" id="kid" value="kid" class="sr-only" v-model="sid">
              <label class="form__label" for="kid">
                <img src="../../public/images/sid-the-kid.jpg" width=150 alt="Sid the Kid">
              </label>
            </div>
            <div class="form__item form__item--radio-option">
              <input type="radio" name="gender" id="man" value="man" class="sr-only" v-model="sid">
              <label class="form__label" for="man">
                <img src="../../public/images/sid-the-man.jpeg" width=150 alt="Sid the Man">
              </label>
            </div>
          </div>
          <div class="form__item form__item--player-group">
            <label class="form__label" for="forwards">Pick your forwards</label>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="forwards" name="f1" form="f1" v-model="f1"/>
              <ul class="player-picker__list" data-player-picker="f1">
                <li class="player-picker__list-item" v-for="player in forwards" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="forwards" name="f2" form="f2" v-model="f2"/>
              <ul class="player-picker__list" data-player-picker="f2">
                <li class="player-picker__list-item" v-for="player in forwards" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="forwards" name="f3" form="f3" v-model="f3"/>
              <ul class="player-picker__list" data-player-picker="f3">
                <li class="player-picker__list-item" v-for="player in forwards" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="forwards" name="f4" form="f4" v-model="f4"/>
              <ul class="player-picker__list" data-player-picker="f4">
                <li class="player-picker__list-item" v-for="player in forwards" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="forwards" name="f5" form="f5" v-model="f5"/>
              <ul class="player-picker__list" data-player-picker="f5">
                <li class="player-picker__list-item" v-for="player in forwards" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
          </div>
          <div class="form__item form__item--player-group">
            <label class="form__label" for="defensemen">Pick your defensemen</label>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="defensemen" name="d1" form="d1" v-model="d1"/>
              <ul class="player-picker__list" data-player-picker="d1">
                <li class="player-picker__list-item" v-for="player in defensemen" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="defensemen" name="d2" form="d2" v-model="d2"/>
              <ul class="player-picker__list" data-player-picker="d2">
                <li class="player-picker__list-item" v-for="player in defensemen" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="defensemen" name="d3" form="d3" v-model="d3"/>
              <ul class="player-picker__list" data-player-picker="d3">
                <li class="player-picker__list-item" v-for="player in defensemen" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
          </div>
          <div class="form__item form__item--player-group">
            <label class="form__label" for="goalies">Pick your goalies</label>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="goalies" name="g1" form="g1" v-model="g1"/>
              <ul class="player-picker__list" data-player-picker="g1">
                <li class="player-picker__list-item" v-for="player in goalies" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
            <div class="form__item form__item--player-picker">
              <input type="text" class="player-picker" id="goalies" name="g2" form="g2" v-model="g2"/>
              <ul class="player-picker__list" data-player-picker="g2">
                <li class="player-picker__list-item" v-for="player in goalies" v-bind:key="player.id" :value='{"name":player.name, "id":player.p_id}'>{{player.name}}</li>
              </ul>
            </div>
          </div>
          <button v-on:click="createTeam" class="button">Submit!</button>
        </form>
    </div>
    <h1>Teams</h1>
    <div>
      <div 
        v-for="(team, index) in teams"
        v-bind:item="team"
        v-bind:index="index"
        v-bind:key="team._id">
        <div class="card card--horizontal card--team">
          <img v-if="team.sid == 'kid'" src="../../public/images/sid-the-kid.jpg" class="card__image" width=150 alt="Sid the Kid">
          <img v-if="team.sid == 'man'" src="../../public/images/sid-the-man.jpeg" class="card__image" width=150 alt="Sid the Man">
          <div class="card__content">
            <h2 class="card__title">{{ `${team.name}` }}</h2>
            <h3 class="card__subtitle">{{ `${team.owner}` }}</h3>
          </div>
        </div>
        
        <table class="team-table">
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f1.name}}</td>
            <td>{{team.team.forwards.f1.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f2.name}}</td>
            <td>{{team.team.forwards.f2.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f3.name}}</td>
            <td>{{team.team.forwards.f3.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f4.name}}</td>
            <td>{{team.team.forwards.f4.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f5.name}}</td>
            <td>{{team.team.forwards.f5.points}}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{{team.team.defensemen.d1.name}}</td>
            <td>{{team.team.defensemen.d1.points}}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{{team.team.defensemen.d2.name}}</td>
            <td>{{team.team.defensemen.d2.points}}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{{team.team.defensemen.d3.name}}</td>
            <td>{{team.team.defensemen.d3.points}}</td>
          </tr>
          <tr>
            <td>G</td>
            <td>{{team.team.goalies.g1.name}}</td>
            <td>{{team.team.goalies.g1.points}}</td>
          </tr>
          <tr>
            <td>G</td>
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
      forwards: [],
      defensemen: [],
      goalies: [],
      errors: [],
      name: '',
      owner: '',
      sid: '',
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
      this.forwards= await PlayersService.getPlayersByType("F");
      this.defensemen= await PlayersService.getPlayersByType("D");
      this.goalies= await PlayersService.getPlayersByType("G");
    } catch(error) {
      this.error = error.message;
    }
  },
  methods: {
    async createTeam() {
      this.errors = [];

      // Once a PV attribute is added from database add a check for team point value

      if(!this.name){
        this.errors.push('Please add a team name');
      }
      if(!this.owner){
        this.errors.push('Please add a team owner');
      }
      if(!this.f1 || !this.f2 || !this.f3 || !this.f4 || !this.f5){
        this.errors.push('Please select 5 forwards');
      } else if(this.f1.id == this.f2.id || this.f1.id == this.f3.id
        || this.f1.id == this.f4.id || this.f1.id == this.f5.id
        || this.f2.id == this.f3.id || this.f2.id == this.f4.id
        || this.f2.id == this.f5.id || this.f3.id == this.f4.id 
        || this.f3.id == this.f5.id || this.f4.id == this.f5.id){
        this.errors.push('Cannot have duplicate forwards');
      }
      if(!this.d1 || !this.d2 || !this.d3){
        this.errors.push('Please select 3 defensemen');
      } else if(this.d1.id == this.d2.id || this.d1.id == this.d3.id 
      || this.d2.id == this.d3.id){
        this.errors.push('Cannot have duplicate defensemen');
      }
      if(!this.g1 || !this.g2){
        this.errors.push('Please select 2 goalies');
      } else if(this.g1.id == this.g2.id){
        this.errors.push('Cannot have duplicate goalies');
      }
      if(!this.sid){
        this.errors.push('Please select a Sid');
      }
      if(this.errors.length){
        return;
      }
      await TeamsService.insertTeam(
        {
          name:this.name,
          owner:this.owner,
          sid:this.sid,
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