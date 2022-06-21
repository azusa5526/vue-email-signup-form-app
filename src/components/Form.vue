<template>
  <form @submit.prevent="onSubmit">
    <input type="radio" value="yes" v-model="enterCompetition" name="enterCompetition">
    <input type="radio" value="no" v-model="enterCompetition" name="enterCompetition">
    <input type="email" v-model="email">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    email: null,
    enterCompetition: 'yes'
  }),

  methods: {
    onSubmit () {
      this.axios.post('http://demo7437963.mockable.io/validate', {
        email: this.email,
        enterCompetition: this.enterCompetition === 'yes'
      })
      this.$emit('form-submitted')
    }
  }
}
</script>
