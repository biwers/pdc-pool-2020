<template>
  <div class="container">
    <div class="create-team">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error, index) in errors"
              v-bind:key="index">{{ error }}</li>
            </ul>
        <h1>Create Your Team!</h1>
        <form class="form form--team">
          <div class="form__grouping">
            <div class="form__group form__group--owner">
              <div class="form__item form__item--reqd">
                <label class="form__label" for="name-field">Team name</label>
                <input required id="name-field" type="text" name="Name" v-model="name">
              </div>
              <div class="form__item form__item--reqd">
                <label class="form__label" for="owner-field">Owner name</label>
                <input required id="owner-field" type="text" name="Owner" v-model="owner">
              </div>
              <div class="form__item form__item--reqd">
                <label for="email-field" class="form__label">Email</label>
                <input required type="email" id="email-field" name="Email" v-model="email">
              </div>
            </div>
            <div class="form__group form__group--sid">
              <div class="form__item form__item--radio-group form__item--sid">
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
                <div class="form__item form__item--radio-option">
                  <input type="radio" name="gender" id="beast" value="beast" class="sr-only" v-model="sid">
                  <label class="form__label" for="beast">
                    <img src="../../public/images/sid-the-beast.jpg" width=150 alt="Sid the Beast">
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div class="form__item form__item--player-group">
            <label class="form__label" for="forwards">Pick your forwards</label>
            <div class="player-group player-group--5">
              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="forwards" name="f1" form="f1" v-model="f1query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="f1-input-list player-picker__list-item" v-for="player in forwards" :key="player.id">
                    <input v-model="f1" type="radio" :id="'f1-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != f2.id && player.p_id != f3.id && player.p_id != f4.id && player.p_id != f5.id" v-show="player.f1visible" :data-player-name="player.name" :for="'f1-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>
  

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="forwards" name="f2" form="f2" v-model="f2query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="f2-input-list player-picker__list-item" v-for="player in forwards" :key="player.id">
                    <input v-model="f2" type="radio" :id="'f2-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != f1.id && player.p_id != f3.id && player.p_id != f4.id && player.p_id != f5.id" v-show="player.f2visible" :data-player-name="player.name" :for="'f2-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="forwards" name="f3" form="f3" v-model="f3query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="f3-input-list player-picker__list-item" v-for="player in forwards" :key="player.id">
                    <input v-model="f3" type="radio" :id="'f3-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != f1.id && player.p_id != f2.id && player.p_id != f4.id && player.p_id != f5.id" v-show="player.f3visible" :data-player-name="player.name" :for="'f3-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="forwards" name="f4" form="f4" v-model="f4query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="f4-input-list player-picker__list-item" v-for="player in forwards" :key="player.id">
                    <input v-model="f4" type="radio" :id="'f4-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != f1.id && player.p_id != f2.id && player.p_id != f3.id && player.p_id != f5.id" v-show="player.f4visible" :data-player-name="player.name" :for="'f4-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="forwards" name="f5" form="f5" v-model="f5query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="f5-input-list player-picker__list-item" v-for="player in forwards" :key="player.id">
                    <input v-model="f5" type="radio" :id="'f5-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != f1.id && player.p_id != f2.id && player.p_id != f3.id && player.p_id != f4.id" v-show="player.f5visible" :data-player-name="player.name" :for="'f5-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="form__item form__item--player-group">
            <label class="form__label" for="defensemen">Pick your defensemen</label>
            <div class="player-group player-group--3">
              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="defensemen" name="d1" form="d1" v-model="d1query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="d1-input-list player-picker__list-item" v-for="player in defensemen" :key="player.id">
                    <input v-model="d1" type="radio" :id="'d1-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != d2.id && player.p_id != d3.id" v-show="player.d1visible" :data-player-name="player.name" :for="'d1-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="defensemen" name="d2" form="d2" v-model="d2query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="d2-input-list player-picker__list-item" v-for="player in defensemen" :key="player.id">
                    <input v-model="d2" type="radio" :id="'d2-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != d1.id && player.p_id != d3.id" v-show="player.d2visible" :data-player-name="player.name" :for="'d2-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="defensemen" name="d3" form="d3" v-model="d3query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="d3-input-list player-picker__list-item" v-for="player in defensemen" :key="player.id">
                    <input v-model="d3" type="radio" :id="'d3-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != d1.id && player.p_id != d2.id" v-show="player.d3visible" :data-player-name="player.name" :for="'d3-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form__item form__item--player-group">
            <label class="form__label" for="goalies">Pick your goalies</label>
            <div class="player-group player-group--2">
              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="goalies" name="g1" form="g1"  v-model="g1query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="g1-input-list player-picker__list-item" v-for="player in goalies" :key="player.id">
                    <input v-model="g1" type="radio" :id="'g1-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != g2.id" v-show="player.g1visible" :data-player-name="player.name" :for="'g1-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form__item form__item--player-picker">
                <input type="text" class="player-picker" id="goalies" name="g2" form="g2" v-model="g2query" placeholder="Search..."/>
                <div class="player-picker__list">
                  <div class="g2-input-list player-picker__list-item" v-for="player in goalies" :key="player.id">
                    <input v-model="g2" type="radio" :id="'g2-radio-' + player.p_id" :value='{"name":player.name, "id":player.p_id}'>
                    <label v-if="player.p_id != g1.id" v-show="player.g2visible" :data-player-name="player.name" :for="'g2-radio-' + player.p_id">{{player.name}}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button v-on:click="createTeam" class="button">Submit!</button>
        </form>
    </div>
  </div>
</template>

<script>
import TeamsService from '../TeamsService';
import PlayersService from '../PlayersService';

export default {
  name: 'TeamSubmissionComponent',
  data() {
    return {
      teams: [],
      forwards: [],
      defensemen: [],
      goalies: [],
      errors: [],
      f1query: '',
      f2query: '',
      f3query: '',
      f4query: '',
      f5query: '',
      d1query: '',
      d2query: '',
      d3query: '',
      g1query: '',
      g2query: '',
      name: '',
      owner: '',
      email: '',
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
      this.forwards.forEach(player => {
        player.f1visible = true;
        player.f2visible = true;
        player.f3visible = true;
        player.f4visible = true;
        player.f5visible = true;
      });
      this.defensemen= await PlayersService.getPlayersByType("D");
      this.defensemen.forEach(player => {
        player.d1visible = true;
        player.d2visible = true;
        player.d3visible = true;
      });
      this.goalies= await PlayersService.getPlayersByType("G");
      this.goalies.forEach(player => {
        player.g1visible = true;
        player.g2visible = true;
      });
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
      if(!this.email) {
        this.errors.push('Please enter your email');
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
          email:this.email,
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
  },
  watch:{
    f1query:function() {
      if(this.f1query.length < 3){
        this.forwards.map(player => player.f1visible = true);
        return;
      }
      this.forwards.forEach(player => {
        if(!player.name.toLowerCase().includes(this.f1query.toLowerCase())){
          player.f1visible = false;
        }
      });
    },
    f2query:function() {
      if(this.f2query.length < 3){
        this.forwards.map(player => player.f2visible = true);
        return;
      }
      this.forwards.forEach(player => {
        if(!player.name.toLowerCase().includes(this.f2query.toLowerCase())){
          player.f2visible = false;
        }
      });
    },
    f3query:function() {
      if(this.f3query.length < 3){
        this.forwards.map(player => player.f3visible = true);
        return;
      }
      this.forwards.forEach(player => {
        if(!player.name.toLowerCase().includes(this.f3query.toLowerCase())){
          player.f3visible = false;
        }
      });
    },
    f4query:function() {
      if(this.f4query.length < 3){
        this.forwards.map(player => player.f4visible = true);
        return;
      }
      this.forwards.forEach(player => {
        if(!player.name.toLowerCase().includes(this.f4query.toLowerCase())){
          player.f4visible = false;
        }
      });
    },
    f5query:function() {
      if(this.f5query.length < 3){
        this.forwards.map(player => player.f5visible = true);
        return;
      }
      this.forwards.forEach(player => {
        if(!player.name.toLowerCase().includes(this.f5query.toLowerCase())){
          player.f5visible = false;
        }
      });
    },
    d1query:function() {
      if(this.d1query.length < 3){
        this.defensemen.map(player => player.d1visible = true);
        return;
      }
      this.defensemen.forEach(player => {
        if(!player.name.toLowerCase().includes(this.d1query.toLowerCase())){
          player.d1visible = false;
        }
      });
    },
    d2query:function() {
      if(this.d2query.length < 3){
        this.defensemen.map(player => player.d2visible = true);
        return;
      }
      this.defensemen.forEach(player => {
        if(!player.name.toLowerCase().includes(this.d2query.toLowerCase())){
          player.d2visible = false;
        }
      });
    },
    d3query:function() {
      if(this.d3query.length < 3){
        this.defensemen.map(player => player.d3visible = true);
        return;
      }
      this.defensemen.forEach(player => {
        if(!player.name.toLowerCase().includes(this.d3query.toLowerCase())){
          player.d3visible = false;
        }
      });
    },
    g1query:function() {
      if(this.g1query.length < 3){
        this.goalies.map(player => player.g1visible = true);
        return;
      }
      this.goalies.forEach(player => {
        if(!player.name.toLowerCase().includes(this.g1query.toLowerCase())){
          player.g1visible = false;
        }
      });
    },
    g2query:function() {
      if(this.g2query.length < 3){
        this.goalies.map(player => player.g2visible = true);
        return;
      }
      this.goalies.forEach(player => {
        if(!player.name.toLowerCase().includes(this.g2query.toLowerCase())){
          player.g2visible = false;
        }
      });
    }
  }
};
</script>