<template>
  <!-- <div class="Top Hos">
      <h1>Mo’s Top Ho by Year</h1>
      <div class="card-grid card-grid--2">
        <div class="card card--top-ho" data-year="2019">
          <img src="../../public/images/top-ho-2019.jpg" alt="Mo's Top Ho 2019 Brad and Commissioner Mo">
          <div class="card__content">
            <h2 class="card__title">2019</h2>
            <h3 class="card__subtitle">Brad (ChazzWazza's)</h3>
          </div>
        </div>
        <div class="card card--top-ho" data-year="2018">
          <img src="../../public/images/top-ho-2018.jpg" alt="Mo's Top Ho 2018 Noah and Commissioner Mo">
          <div class="card__content">
            <h2 class="card__title">2018</h2>
            <h3 class="card__subtitle">Noah (The Kevin Gravel Grinders)</h3>
          </div>
        </div>
      </div>
  </div> -->
  <div class="container">
   <h1>Teams</h1>
    <div>
      <div 
        v-for="(team, index) in winners"
        v-bind:item="team"
        v-bind:index="index"
        v-bind:key="team._id">
        <div class="card card--horizontal card--team">
          <img :src="require('../../public/images/top-ho-'+team.year+'.jpg')" class="card__image" width=150 :alt="`${team.year} Winner`">
          <div class="card__content">
            <h2 class="card__title">{{ `${team.name}` }}</h2>
            <h3 class="card__subtitle">{{ `${team.owner}` }}</h3>
            <h3 class="card__subtitle">{{ `Points: ${team.points}` }}</h3>
          </div>
        </div>
        
        <table class="team-table">
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th></th>
            <th>Points</th>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f1.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.forwards.f1.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.forwards.f1.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f2.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.forwards.f2.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.forwards.f2.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f3.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.forwards.f3.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.forwards.f3.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f4.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.forwards.f4.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.forwards.f4.points}}</td>
          </tr>
          <tr>
            <td>F</td>
            <td>{{team.team.forwards.f5.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.forwards.f5.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.forwards.f5.points}}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{{team.team.defensemen.d1.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.defensemen.d1.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.defensemen.d1.points}}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{{team.team.defensemen.d2.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.defensemen.d2.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.defensemen.d2.points}}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{{team.team.defensemen.d3.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.defensemen.d3.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.defensemen.d3.points}}</td>
          </tr>
          <tr>
            <td>G</td>
            <td>{{team.team.goalies.g1.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.goalies.g1.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.goalies.g1.points}}</td>
          </tr>
          <tr>
            <td>G</td>
            <td>{{team.team.goalies.g2.name}}</td>
            <td><img :src="`https://nhl.bamcontent.com/images/headshots/current/168x168/${team.team.goalies.g2.id}@2x.jpg`" width=75 height=75></td>
            <td>{{team.team.goalies.g2.points}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import WinnersService from '../WinnersService';

export default {
  name: 'TopHosComponent',
  data() {
    return {
      winners: []
    }
  },
  async created() {
    try {
      this.winners = await WinnersService.getWinners();
    } catch(error) {
      this.error = error.message;
    }
  },
};
</script>
