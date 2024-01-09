<template>
  <div>
    <div class="text-uppercase text-center mt-5">Books Collection</div>

    <div class="row p-5 text-center">
      <div class="col-md-4" v-for="book in books" :key="book.id">
        <div class="card mb-4">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <p class="card-text">{{ book.category }}</p>
            <router-link to="#">
              <button class="btn btn-primary">Read</button>

            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  


<script>
import axios from 'axios';
export default{
    name:'Books',
    data(){
        return {
            books:[],
        }
    },
    mounted(){
       
            axios.get('http://127.0.0.1:8000/api/all/')
            .then(response =>{  
                this.books = response.data
            })
            .catch(error => {
                console.error("Error fetching the Book", error)
            })
    }
}
</script>


<style>

</style>