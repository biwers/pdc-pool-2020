<template>
  <div class="Home">
    <div id="description">
        <p>Mo’s Hockey Ho’s was founded in 2018 by Commissioner Mo.</p>
        <p>After trying out many different Fantasy Hockey Leagues, 
            Mo just couldn’t seem to find a format that fit his style. 
            He wanted a way to be involved with fantasy hockey without 
            any of the responsibility of Team Upkeep. Thus, in 2018 Mo’s 
            Hockey Ho’s was born. Mo’s Hockey Ho’s 2018 consisted of Mo 
            building multiple Google Spreadsheet files and linking them 
            together to keep track of all the points and standings. The 
            format was a success and Mo’s Hockey Ho’s was renewed for 2019 
            by Mo.</p>
        <p>This year Mo wanted to try something new. Teaming up with Noro, 
            Eddie and E-siz, they fluffed around ideas of creating a website. 
            Very ambitious at first the website seemed like it was going to 
            be a grand spectacle. Of course, after several months of just 
            talking about how great it was going to be, it became too late 
            to really develop any of these ideas. With this procrastination 
            leading the charge, Moshockeyhos.wordpress.com was born! An 
            amazingly shitty website with very janky work arounds and ideas 
            thrown together to make something miraculous!</p>
        <p>I hope you enjoy yourself while being involved with Mo’s Hockey 
            Ho’s and I hope to continue to run this league for 
            years to come.</p>
        <p>Sincerely,</p>
        <p>Commissioner Mo</p>
    </div>
    <div id="twitter">
      <label for="twitter">The Penalty Box</label>
      <component-view id="moromiles" sourceType="profile" :options="{ tweetLimit: '5'}"></component-view>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import { Timeline } from 'vue-tweet-embed';

  export default {
    components: {
      'component-view': Timeline
    },
    created() {

    }
  }
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
#home {
  margin: auto;
  width: 90%;
}
#description {
  width: 40%;
  float: left;
}
#twitter {
  width: 300px;
  float: left;
  height: 700px;
}
#clear {
  clear: both;
}
</style>
