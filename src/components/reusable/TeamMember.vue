<template>
  <div class="col-md-3 col-sm-6 col-6 mt-5">
    <div class="container-img m-auto">
      <img class="" :src="img" alt="" />
      <div class="caption">
        <div
          class="
            d-flex
            py-2
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <span v-if="twitter" >  <a :href="twitter">TWITTER</a> </span>
             <span  v-if="github">  <a :href="github">GITHUB</a> </span>
             <span v-if="linkdin">  <a :href="linkdin">LINKDIN</a> </span>
        </div>
      </div>
    </div>

    <div class="member-about mt-2">
      <h3 class="name text-center">{{ name }}</h3>
      <h4 class="position text-center">{{ position }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "position", "twitter", "github", "linkdin"],
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap");
.container-img {
  width: 160px;
  height: 160px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}
img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  /* background: black; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  transform: translateY(100%);
  transition: all 0.5s;
  background: black;
  font-weight: bolder;
  cursor: pointer;
}

.container-img:hover .caption {
  transform: translateY(-15%);
  -webkit-transform: translateY(-15%);
  -moz-transform: translateY(-15%);
  -ms-transform: translateY(-15%);
  -o-transform: translateY(-15%);
}
.container-img:hover img {
  transform: translateY(-10%);
}
.member-about {
  font-family: "Roboto Slab", serif;
  text-shadow: 4px 4px 3px rgba(184, 187, 175, 0.77);
}
.member-about h3 {
  color: rgb(248, 96, 121);
}
.member-about h4 {
  opacity: 0.7;
}
span a{
    text-decoration: none;
    color: wheat;
    font-weight: normal;
    text-transform: capitalize;
}
</style>