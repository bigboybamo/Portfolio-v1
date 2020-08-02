<template>
  <div id="app">
    <navigation/>
    <Lander/>
    <footerr/>
  </div>
</template>

<script>
import footerr from './components/footerr'
import Lander from './components/Lander'
import navigation from './components/navigation'

export default {
  name: 'App',
  components: {
 navigation,
 Lander,
 footerr
  }
}
</script>

<style>

</style>
