var view = {
    removeTransition(e){
      e.target.classList.remove('playing');
    },
    keysListener: function(){
      var keys = Array.from(document.querySelectorAll(".key"));
      keys.forEach(key => {
        key.addEventListener('transitionend', this.removeTransition);
      }, this);
    },
    playSound: function(e){
      var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      key.classList.add('playing');
      audio.currentTime = 0;
      audio.play();
    },
    setUpEventListeners: function(){
      window.addEventListener('keydown', this.playSound);
      this.keysListener();
    }
  }
  
  view.setUpEventListeners();
  
  
  