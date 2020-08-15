<template>
  <div id="top">
    <section class="section" >
      <div class="container-fliud">
        <img class="rounded-circle" src="" />
        <h1>Hi, Im Olabamiji,</h1>
        <h1>Web Developer.</h1>
        <p>Passionate about learning, Constantly trying to improve.</p>
      </div>
    </section>

    <section class="protfolio" id="middle">
      <h1 class="thisport">Portfolio</h1>
      <p class="thisport">
        Here's a list of some of the things i've been doing
      </p>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  alt="Vue logo"
                  class="rounded-circle img-custome"
                  src="https://res.cloudinary.com/dousncxte/image/upload/v1596383306/hjuvnzpcbp2yhrd7b6ph.jpg"
                />
                <h2>Url Shortener</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Simple Url Shortener built with Nodejs using the express
                  framework
                </p>
                <button type="button" class="btn btn-outline-secondary">
                  <a href="https://github.com/bigboybamo/Url-Shortener">
                    Soure code</a
                  >
                </button>
                <button type="button" class="btn btn-outline-secondary">
                  <a href="https://shielded-chamber-32646.herokuapp.com">
                    Demo</a
                  >
                </button>
              </div>
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  class="rounded-circle img-custome"
                  src="https://res.cloudinary.com/dousncxte/image/upload/v1596383347/pk2xa7chqwsw5uufrxfb.jpg"
                />
                <h2>Weather app</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Weather App built with VueJS
                </p>
                <button type="button" class="btn btn-outline-secondary">
                  <a href="https://github.com/bigboybamo/Vue-weather-app">
                    Source code
                  </a>
                </button>
              </div>
            </div>
            <br />
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-head">
                <img
                  class="rounded-circle img-custome"
                  src="https://res.cloudinary.com/dousncxte/image/upload/v1596383396/zndemr5usgmdsocjdzb6.jpg"
                />
                <h2>Real Time Image Uploader</h2>
              </div>
              <hr />
              <div class="card-body">
                <p>
                  Built using Vuejs, pusher, Node and cloudinary. This app
                  renders an uploaded image to the DOM in real Time
                </p>
                <button type="button" class="btn btn-outline-secondary">
                  <a
                    href="https://github.com/bigboybamo/Realtime-image-uploader"
                  >
                    Source code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     <h3> More Projects can be found <u><a href="https://github.com/bigboybamo">Here</a></u></h3>
    </section>
    <div>
      <contact />
    </div>
  </div>
</template>

<script>
import contact from "./contact.vue";
export default {
  name: "Lander",

  components: {
    contact,
  },
};
</script>

<style lang="css" scoped>
.section {
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 36%;
}

.protfolio {
  background-color: black;
  padding-top: 8%;
  padding-bottom: 15%;
  color: cornsilk;
}
.img-custome {
  width: 140px;
  height: 140px;
  margin-top: 15px;
}

.card-body {
  color: black;
}

.card-head {
  color: black;
}

.thisport {
  padding-left: 39%;
}

h3{
  padding-left: 35%;
  margin-top: 7ch;
}
</style>
