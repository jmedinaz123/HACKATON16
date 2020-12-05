<template>
  <div class="agregar">
      <Header 
        info="new"
      />
    <form class="Form-add" @submit.prevent="createUserAction(user)">
        <h2>User Information</h2>
        <div>
            <input type="text" placeholder="Nombre" v-model="user.nombre" required>
        </div>
        <div>
            <input type="text" placeholder="Apellido" v-model="user.apellido" required>
        </div>
        <div>
            <input type="number" placeholder="Edad" v-model="user.edad" required>
        </div>
        <div>
            <input type="email" placeholder="Email" v-model="user.email" required>
        </div>
        <div>
            <input type="number" placeholder="Celular" v-model="user.cel" required>
        </div>
        <div class="box-btn">
            <button type="submit">Agregar</button>
        </div>
    </form>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Agregar',
    components:{
        Header
    },
    data(){
        return {
            user:{
                nombre: '',
                apellido: '',
                email: '',
                cel: '',
                edad: ''
            }
        }
    },
    methods:{
        ...mapActions(['createUserAction'])
    }
}
</script>

<style scoped lang="scss"> 
    .Form-add{
        margin: 40px auto;
        max-width: 500px;
        border: 1px solid gray;
        border-radius: 20px;
        box-shadow: 1px 1px 1px 1px gray;
        padding: 20px;
        h2{
            text-align: center;
        }
        div{
            margin-top: 20px;
            display: flex;
            justify-content: center;
            input{
                width: 80%;
                padding: 10px;
                border: 1px solid rgb(170, 170, 170);
                border-radius: 10px;
                box-shadow: 1px 1px 1px 1px rgb(158, 158, 158);
            }
        }
        .box-btn{
            display: flex;
            justify-content: center;
            button{
                border: none;
                background-color: rgb(70, 168, 207);
                padding: 10px 20px;
                border-radius: 10px;
                cursor: pointer;
                color: white;
                font-weight: bold;
                transition: .3s all;
            }
            button:hover{
                background-color: rgb(16, 85, 112);
            }
        }
    }
</style>