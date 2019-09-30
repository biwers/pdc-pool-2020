<template>
  <div class="Questions">
      <label for="form">Lay it on me!</label>
    <form class="form" @submit="onSubmit">
        <label for="name">Name: </label>
		<input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
		<br>
        <label for="email">Email: </label>
        <input required name="email" v-model="contact.email" placeholder="Email" type="email" autocomplete="off">
		<br>
        <label for="message">Yo Mo! I got a question fo yo!</label>
        <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
		<br>
        <button class="button">Send</button>
	</form>
  </div>
</template>

<script>
    import QuestionsService from '../QuestionsService';
    export default{
        name: 'QuestionsComponent',
        data() {
            return {
                contact: {
                    name:'',
                    email: '',
                    message: '',
                }
            };
        },
        async created() {

        }, 
        methods: {
            clearForm() {
                for (let field in this.contact) {
                    this.contact[field] = '';
                }
            },
            async onSubmit(evt){
                evt.preventDefault();
                // Build form data
                let form = {
                    name: this.contact.name,
                    email: this.contact.email,
                    message: this.contact.message
                }
                await QuestionsService.askQuestion(form);
                this.clearForm();
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
