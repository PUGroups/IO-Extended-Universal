<template>

<div class="container-fluid team-page">
    <div class="container">
      <div class="row">
        <div class="col team-page_heading text-center p-3">
          <h2 class="p-2 fw-bold">IO Extended Event Timeline</h2>
        </div>
      </div>
    </div>
  </div>

 <div class="container">
  
   <div v-if="loading" class="laoding text-center">
    <div class="spinner-border text-warning" role="status">
 
</div>
   </div>

   <div v-else class="row d-flex justify-content-around"> 
    <div class="card col-lg-4 col-md-6 px-2   pb-4 mx-1 mt-5" v-for="data in getEventTImeLine" :key="data.eventId">
        <div class="row"> <img class="img-fluid speaker-img mt-2 m-auto"  :src="data.profilePicture">
            <h2 class=" ml-2 mt-1 speaker-name text-center">{{data.speakersName}}</h2>
            <div  class="text-center timings"><span class="text-success text-center">Watch between {{data.slotStart}}</span></div>
            <!-- <div  class="text-center timings"><span class="text-success text-center">Event is Live</span></div> -->
        </div>
        <p class="mt-3 mb-2"> Today </p>
        <h5 class="title">{{data.title}}</h5>
        <small>{{data.description}}</small>
        
        <!-- <p class="mt-4 mb-2">Hosted by</p>
        <div class="users mb-5"> 
          <img src="https://imgur.com/uRVyoG7.png">
           <img src="https://imgur.com/2W4OOpj.png">
            <img src="https://imgur.com/3Jkqz66.png">
             <img src="https://imgur.com/P5kPDPG.png">
              </div> -->
               <button class="btn btn-success mb-2 mt-3 reminder">
                <span class=""><a :href="url">Watch Event Live</a></span>
                
                </button>
                 <!-- <button class="btn info"><span>Watch </span></button> -->
    </div>
    </div>
</div>
</template>

<script>
  export default {
    computed:{
       getEventTImeLine(){
      return this.$store.getters.getEventTimeline
    }
    },
    data() {
      return {
        loading:true,
        url:'https://www.youtube.com/watch?v=_oGN2TcOJ50'
       
      }
    },
    created() {
       
      // this.$store.dispatch("getTimeSlotsWithDetailsAction");
     
      setTimeout(() => {
        this.loading=false
      }, 3000);
    },

  
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@500&display=swap');
.card {
    max-width: 400px;
    border: none;
    border-radius: 10px;
    box-shadow: 12px 13px 13px -10px rgba(0,0,0,0.75);
-webkit-box-shadow: 12px 13px 13px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 12px 13px 13px -10px rgba(0,0,0,0.75);
 background: linear-gradient(45deg,#ffffff,#fdf9e2);
}

img {
    width: 200px;
    height: 180px;
    border-radius:50%
}

.users img {
    border-radius: 50%;
    border: none;
    margin-right: -15px;
    width: 35px;
    height: 32px
}

.text-success {
    background-color: #D7FCDD;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 16px;
    border-radius: 20px;
    margin-right: 11px
}

p {
    font-size: 14px;
    color: #CDCDCF !important
}

.btn {
    border-radius: 22px;
    border: none;
    height: 40px;
    width: 100%
}

.btn:focus {
    border: none;
    box-shadow: none
}

.btn span {
    font-size: 14px;
    font-weight: 500
}

.btn-dark span {
    color: #E0DFE7
}

.btn.info {
    background: #E4E4E4
}

.btn.info span {
    color: #fde405 !important
}

.btn.info:hover {
    background: #CDCED0 !important
}

@media screen and (max-width: 384px) {
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center
    }

    .row {
        text-align: center;
        line-height: 3;
        display: flex;
        justify-content: center
    }

    .ml-auto {
        margin-left: 20px !important
    }
}
.speaker-name{
  color: rgb(248, 96, 121);
  text-shadow: 4px 4px 3px rgba(184, 187, 175, 0.77);
}
.title{
font-family: 'STIX Two Text', serif;
text-shadow: 2px 4px 6px rgb(185, 183, 183);
font-size: 1.6rem;
}
.btn-dark:hover{
   background: rgb(248, 96, 121);
   color: gray;
}
.team-page {
  background: black;
  color: white;
}
.team-page_heading {
  transform: skew(-10deg);
}
.team-page_heading h2 {
  color: rgb(0, 0, 0);
  background: rgb(201, 170, 36);
  max-width: 330px;
  font-family: "Karla", sans-serif;
  text-shadow: 4px 4px 3px rgba(192, 201, 158, 0.77);
}
span a{
  text-decoration: none;
  color: white;
}
.timings{
  animation:popup 1s infinite alternate linear ;
}
.reminder{
  animation:shake .8s infinite alternate linear  ;
}
@keyframes popup {
  to{
    transform: scale(.8);
  }
  from{
    transform: scale(1.1);
  }
}
@keyframes shake {
  to{
    transform: translateX(5px);
  }
  from{
    transform: translateX(-5px);
  }
}
</style>
