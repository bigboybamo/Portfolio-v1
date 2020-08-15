<template>
  <div id="bottom">
    <div class="container" style="padding:10%">
      <h2>Contact Me</h2>
      <form name="Contact form" method="POST" action="https://formspree.io/mdowjvlw">
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-group">
          <input type="email" class="form-control" name="email" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="3" placeholder="write message"></textarea>
        </div>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>
