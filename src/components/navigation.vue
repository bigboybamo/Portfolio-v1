<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navv">
      <b-navbar-brand>
       <a href="#top">About</a> 
      </b-navbar-brand>
       <b-navbar-brand>
       <a href="#middle">Portfolio</a> 
      </b-navbar-brand>
       <b-navbar-brand>
       <a href="#bottom">Contact</a> 
      </b-navbar-brand>



      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link>Portfolio</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link>Contact</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>