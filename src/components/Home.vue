<template>
  <div class="home">
    <h1 class="welcome-title">Welcome Page</h1>
    <div class="pyramid">
      <p class="pyramid-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus assumenda sunt inventore.
        Alias consequuntur quos beatae repellat voluptatibus ab, amet rem enim esse dolorem natus exercitationem harum
        voluptate maxime iusto, modi laboriosam culpa labore temporibus qui nisi explicabo eius sit. Sapiente atque,
      </p>
    </div>
    <router-link to="/books">
      <button class="explore-button">Explore</button>
    </router-link>
  </div>
  <section class="section">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates quis repellat aliquid non nostrum iusto assumenda
      aperiam qui voluptatum facilis eius ipsum, consequatur magnam, corporis ullam omnis! Reprehenderit iure expedita voluptates
      enim, molestias assumenda ex fuga veniam fugit maxime optio. Inventore, dolor eius! Quis quam consequatur culpa ea laboriosam
      doloremque animi rem eligendi, voluptatem commodi. Id reiciendis quod perspiciatis dolorem? Possimus a ipsum vel! A vel
      asperiores deleniti eligendi veritatis aspernatur fugiat suscipit quis laudantium soluta, libero, dolorem eos ut accusamus
      aliquam modi dolore tenetur earum in magni culpa amet vero quas recusandae! Blanditiis aliquam labore beatae aspernatur qui
      tempore, eum distinctio numquam error eveniet porro perferendis harum earum molestiae ipsam cumque sunt illo iusto impedit
      repellendus ab dolor? Ipsam corrupti aliquid dolores doloremque accusamus, quibusdam, atque nam eius cumque error dolore,
      facilis quas optio molestiae necessitatibus quam delectus esse! Laborum atque odio excepturi, dolore itaque molestiae velit
      reiciendis voluptatem sint eaque quae amet aliquam sed nihil quibusdam laboriosam error repellendus quo harum nesciunt
      mollitia nostrum alias architecto. Corrupti, voluptatibus cum eum possimus nesciunt ea minima quasi at. Quidem odit facere
      molestias nisi magni maiores ullam culpa neque quae recusandae officiis deserunt magnam, placeat animi officia praesentium
      eaque quas.
    </p>
  </section>
</template>


  

<script>

export default{
    name:'Home',
    components:{
    }
}

</script>

<style>
.home {
  text-align: center;
  margin-top: 50px;
}

.welcome-title {
  font-size: 32px;
  color: #333;
}

.pyramid {
  margin: 30px auto;
  width: 70%;
  padding: 20px;
  border-radius: 5px;
}

.pyramid-text {
  font-size: 16px;
  line-height: 1.5;
}

.explore-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.explore-button:hover {
  background-color: #0056b3;
}

.section {
  margin: 50px auto;
  width: 80%;
  font-size: 18px;
  line-height: 1.6;
}
</style>
