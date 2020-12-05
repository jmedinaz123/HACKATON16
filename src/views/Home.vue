<template>
  <div class="home">
    <Header 
      info="false"
    />
    <div class="container">
      <div class="contain">
        <Card
          v-for="user in users"
          :key="user.id" 
          :id="user.id"
          :nombre="user.nombre"
          :apellido="user.apellido"
          :edad="user.edad"
          :cel="user.cel"
          :email="user.email"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
import { mapActions , mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Header,
    Card
  },
  methods:{
    ...mapActions(['getUsersAction',])
  },
  computed:{
    ...mapState(['users'])
  },
  created(){
    this.getUsersAction();
  }
}
</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    background-color: #F4F5F7;
    min-height: calc(100vh - 70px);
    padding: 20px;
  }
  .contain{
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
