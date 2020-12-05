<template>
  <div class="Card">
     <router-link :to="{
         name: 'Editar',
         params: {id: id}
     }">
        <div class="Card-Button is-edit">
            <img src="@/assets/editar.svg">
        </div>
    </router-link>
      <div class="Card-Button is-delete" @click="deleteUserAction(id)">
          <img src="@/assets/borrar.svg">
      </div>
      <div class="Card-Logo">
        <p>{{nombre[0].toUpperCase()}}</p>
      </div>
      <p class="Card-Username">{{nombre}} {{apellido}}</p>
      <ul class="Card-List">
          <li><span>Edad: </span>{{edad}} años</li>
          <li><span>Email: </span>{{email}}</li>
          <li><span>Celular: </span>{{cel}}</li>
      </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Card',
    props: ['nombre', 'apellido', 'email', 'cel' , 'edad', 'id'],
    methods:{
        ...mapActions(['deleteUserAction'])
    }
}
</script>

<style scoped lang="scss">
    .Card{
        width: 320px;
        border-radius: 20px;
        box-shadow: -1px -1px 3px 1px gray;
        height: 280px;
        background-color: white;
        padding: 25px;
        margin: 20px 10px 10px 0;
        transition: .2s all;
        position: relative;
        &-List{
            list-style: none;
            li{
                margin-top: 10px;
            }
        }
        &-Button{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            width: 35px;
            background: skyblue;
            position: absolute;
            padding: 5px;
            border-radius: 5px;
            transition: .3s all;
            img{
                width: 90%;
            }
        }
        &-Button:hover{
            transform: scale(1.15) rotate(3deg);
            cursor: pointer;
            background-color: rgb(53, 188, 241);
        }
        .is-edit{
            top: 10px;
            left: 10px;
        }
        .is-delete{
            top: 10px;
            right: 10px;
        }
        &-Logo{
            width: 95px;
            height: 95px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(204, 197, 255);
            margin: 0 auto;
            p{
                color: rgb(17, 5, 95);
                font-weight: bold;
                font-size: 50px;
                margin-top: 12px
            }
        }
        p{
            text-align: center;
            margin-top: 15px;
        }
        &-Username{
            font-size: 20px;
            font-weight: bold;
        }
    }
</style>