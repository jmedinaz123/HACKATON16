<template>
  <header>
      <div v-if="info == 'true'">
          <h1>User {{id}}</h1>
          <router-link to="/">Volver</router-link>
      </div>
      <div v-else-if="info == 'new'">
          <h1>New User</h1>
          <router-link to="/">Volver</router-link>
      </div>
      <div v-else>
          <h1>User List</h1>
          <router-link to="/agregar">Add User</router-link>
      </div>
      
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['info', 'id']
}
</script>

<style lang="scss" scoped>
    header{
        position: relative;
        height: 70px;
        box-shadow: 1px 1px 2px 3px rgb(219, 219, 219);
    }
    div{
        margin: 0 auto;
        width: 90%;
        max-width: 1000px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            font-size: 25px;
            font-weight: bold;
            text-decoration: none;
            background-color: red;
            color: white;
            padding: 10px 15px 5px;
            border-radius: 10px;
            transition: .2s all;
        }
        a:hover{
            background-color: rgb(255, 73, 73) ;
        }
    }
</style>