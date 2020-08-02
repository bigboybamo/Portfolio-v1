<template>
  <div>
    <section class="section">
      <div class="container-fliud">
        <img
        
          class="rounded-circle"
          src=""
        />
        <h1>Hi, Im Olabamiji</h1>
        <h1>Software Developer</h1>
        <p>I enjoy Building things to make the world a beter place.</p>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Contact
        </button>
      </div>
    </section>

    <section class="protfolio">
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
                  src="https://www.wetechnology.cz/wp-content/uploads/2017/02/uxui.jpg"
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
                  alt="Vue logo"
                  class="rounded-circle img-custome"
                  src="https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png"
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
                  alt="Vue logo"
                  class="rounded-circle img-custome"
                  src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg"
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
                <a href="https://github.com/bigboybamo/Realtime-image-uploader" > Source code </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  padding-left: 39%;
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
</style>
