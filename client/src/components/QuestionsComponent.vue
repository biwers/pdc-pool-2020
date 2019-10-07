<template>
  <div class="Questions">
    <h1>Lay it on me!</h1>
    <form class="form" @submit="onSubmit">
        <div class="form__item">
            <label class="form__label" for="name">Name</label>
            <input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
        </div>
        <div class="form__item">
            <label class="form__label" for="email">Email</label>
            <input required name="email" v-model="contact.email" placeholder="Email" type="email" autocomplete="off">
		</div>
        <div class="form__item">
            <label class="form__label" for="message">Yo Mo! I got a question fo yo!</label>
            <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
        </div>
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