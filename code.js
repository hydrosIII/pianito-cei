

    /// value of the notes in htz
    
    //3a octava
        ///// blancas
    var do3 = 130.81
    var re3 = 146.83
    var mi3 = 164.81
    var fa3 = 174.61
    var sol3 = 195.99
    var la3 = 220
    var si3 = 246.94
    
        /// sost y bemoles 3ra octava
    var dosost3 = 138.59
    var resost3 = 155.56
    var fasost3 = 184.99
    var solsost3 = 207.65
    var lasost3 = 233.08
    
    /// 4a octava
        //// blancas 4ta octava
    var do4 = 261.62
    var re4 = 293.66
    var mi4 = 329.62
    var fa4 = 349.22
    var sol4 = 391.99
    var la4 = 440
    var si4 = 493.88
    
        /// sost y bemoles 4ra octava
    var dosost4 = 277.18
    var resost4 = 311.12
    var fasost4 = 369.99
    var solsost4 = 415.30
    var lasost4 = 460.16
    
    /// 5ta octava
        /// blancas
    var do5 = 523.25
    var re5 = 587.32
    var mi5 = 659.25
        ///// negras (sostenidos y bemoles)
    
    var dosost5 = 554.36
    var resost5 = 622.25
    
    //////////////Query Selectors Elementos html Activos /////////
    
        //3ta octava blancas
        TeclaDo3 = document.querySelector('.do3')
        TeclaRe3 = document.querySelector('.re3')
        TeclaMi3 = document.querySelector('.mi3')
        TeclaFa3 = document.querySelector('.fa3')
        TeclaSol3 = document.querySelector('.sol3')
        TeclaLa3 = document.querySelector('.la3')
        TeclaSi3 = document.querySelector('.si3')
    
    
        ///3a octava negras
        TeclaDoSost3 = document.querySelector('.doSost3')
        TeclaReSost3 = document.querySelector('.reSost3')
        TeclaFaSost3 = document.querySelector('.faSost3')
        TeclaSolSost3 = document.querySelector('.solSost3')
        TeclaLaSost3 = document.querySelector('.laSost3')
    
        ///4ta octava blancas
        TeclaDo4 = document.querySelector('.do4')
        TeclaRe4 = document.querySelector('.re4')
        TeclaMi4 = document.querySelector('.mi4')
        TeclaFa4 = document.querySelector('.fa4')
        TeclaSol4 = document.querySelector('.sol4')
        TeclaLa4 = document.querySelector('.la4')
        TeclaSi4 = document.querySelector('.si4')
    
        // 4ta octava blancas
        TeclaDoSost4 = document.querySelector('.doSost4')
        TeclaReSost4 = document.querySelector('.reSost4')
        TeclaFaSost4 = document.querySelector('.faSost4')
        TeclaSolSost4 = document.querySelector('.solSost4')
        TeclaLaSost4 = document.querySelector('.laSost4')
    
        //5ta octava ////////////////
            ////// 5ta octava Blancas
        TeclaDo5 = document.querySelector('.do5')
        TeclaRe5 = document.querySelector('.re5')
        TeclaMi5 = document.querySelector('.mi5')
            //// 5ta octava negras
        TeclaDoSost5 = document.querySelector('.doSost5')
        TeclaReSost5 = document.querySelector('.reSost5')
    
    
    ////////////////////////////////////////////////////////////////////////////////////
        
    /// Event listeners para tocar la nota cuando se hace click
    /// 3a octava blancas
        TeclaDo3.addEventListener('click',(evt) => tocarNota(do3))
        TeclaRe3.addEventListener('click',(evt) => tocarNota(re3))
        TeclaMi3.addEventListener('click',(evt) => tocarNota(mi3))
        TeclaFa3.addEventListener('click',(evt) => tocarNota(fa3))
        TeclaSol3.addEventListener('click',(evt) => tocarNota(sol3))
        TeclaLa3.addEventListener('click',(evt) => tocarNota(la3))
        TeclaSi3.addEventListener('click',(evt) => tocarNota(si3))
    
    
       ///3a octava negras
        TeclaDoSost3.addEventListener('click',(evt) => tocarNota(dosost3))
        TeclaReSost3.addEventListener('click',(evt) => tocarNota(resost3))
        TeclaFaSost3.addEventListener('click',(evt) => tocarNota(fasost3))
        TeclaSolSost3.addEventListener('click',(evt) => tocarNota(solsost3))
        TeclaLaSost3.addEventListener('click',(evt) => tocarNota(lasost3)) 
        
        /// 4a octava blancas
        TeclaDo4.addEventListener('click',(evt) => tocarNota(do4))
        TeclaRe4.addEventListener('click',(evt) => tocarNota(re4))
        TeclaMi4.addEventListener('click',(evt) => tocarNota(mi4))
        TeclaFa4.addEventListener('click',(evt) => tocarNota(fa4))
        TeclaSol4.addEventListener('click',(evt) => tocarNota(sol4))
        TeclaLa4.addEventListener('click',(evt) => tocarNota(la4))
        TeclaSi4.addEventListener('click',(evt) => tocarNota(si4))
        ///4a octava negras
        TeclaDoSost4.addEventListener('click',(evt) => tocarNota(dosost4))
        TeclaReSost4.addEventListener('click',(evt) => tocarNota(resost4))
        TeclaFaSost4.addEventListener('click',(evt) => tocarNota(fasost4))
        TeclaSolSost4.addEventListener('click',(evt) => tocarNota(solsost4))
        TeclaLaSost4.addEventListener('click',(evt) => tocarNota(lasost4)) 
        
    
        //// 5ta octava blancas
        TeclaDo5.addEventListener('click',(evt) => tocarNota(do5))
        TeclaRe5.addEventListener('click',(evt) => tocarNota(re5))
        TeclaMi5.addEventListener('click',(evt) => tocarNota(mi5))
    
        ///5ta octava negras
        TeclaDoSost5.addEventListener('click',(evt) => tocarNota(dosost5))
        TeclaReSost5.addEventListener('click',(evt) => tocarNota(resost5))
    
    
        ondas = document.querySelector('.ondas')
    
    //// The notes created by the Web audio API
    ///Para animar cuando se toque la tecla, Sin embargo necesita hacer refactor de como funcionan arriba
    ///function tocarNotaInt(e){
    
    /*    console.log(e.target)
        e.target.classList.add("tecla-blanca-active")
        tocarNota(dosost5,e)
    */
        ///}
    
    
    function tocarNota(nota){
    context = new AudioContext;
    oscillator = context.createOscillator();
    
    oscillator.frequency.value = nota;
    oscillator.connect(context.destination);
    oscillator.start(0);
    oscillator.stop(context.currentTime + 0.5);
    console.log(oscillator)
    
    }
    
    
    
    window.requestAnimFrame = (function() {
    ///compatibilidad con todos los buscadores, webkit, o mozilla, o microsoft*/
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();
    
    //define variables/
    //capture the canvas element/
    var c = document.getElementById('canv');
    //////// define variables for the canvas 
    ///// 2 dimensional canvas
    var $ = c.getContext('2d');
    ////// canvas width is the same as the window browser width
    /// use the var instead of const because it changes
    var w = c.width = window.innerWidth;
    ////// canvas height is the same as the window browser height
    var h = c.height = window.innerHeight;
    ///// variables for half the widht and half the height
    var _w = w * 0.5;
    var _h = h * 0.5;
    ///empty array
    var CircleMeasures = [];
    /// a counter
    var counter = 0;
    
    ///// functions start on loading the window
    /// it means loading the page
    window.addEventListener('load', resize);
    
    window.addEventListener('resize', resize, false);
    
    //// a function to resize the window, if the page is rezised the canvas is adjusted accordingly
    function resize() {
      c.width = w = window.innerWidth;
      c.height = h = window.innerHeight;
      /// define the canvas positions as absolute in css
      c.style.position = 'absolute';
      ///// Reposition the canvas
      c.style.left = (window.innerWidth - w) *
        .01 + 'px';
      c.style.top = (window.innerHeight - h) *
        .01 + 'px';
    }
    
    ////// the animation function. 
    // A wrapper function that define the periodicity of the animation
    function anim() {
      counter++;
    //// we define a condition for the bubbles to appear often
    /// the condition is a simple  and a module
    /// if the counter is divisible by x then display the animation
    /// in short it makes the animation slower
      if (counter % 7 == 0) draw();
      window.requestAnimFrame(anim);
    }
    anim();
    
    
    /// a simple function for color randomization
    function randomColor() {
      var r = Math.floor(Math.random() * 180);
      var g = Math.floor(Math.random() * 130);
      var b = Math.floor(Math.random() * 200);
      //// we define three variables for color randomization and then apply then to rgb color. Simple
      return "rgb(" + r + "," + g + "," + b + ")";
    }
    
    ///// a randomization function used for the size and position of the circles.
    // We define the range of numbers in which the randomization is given
    //// using the min, max variables
    function rng(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function draw() {
    
        
      var splot = {
        ///// We define the variables for the randomization if the circles.
        //using the rng function, a simple randomizer
        /// and taking the values of half the portion of the  window
        //// _w and _h +900
        x: rng(_w - 900, _w + 900),
        y: rng(_h - 900, _h + 900),
        
        r: rng(20, 80),
        spX: rng(-1, 1),
        spY: rng(-1, 1)
      };
    
      /// we push the variables to the array previously defined. 
      //// Each x,y,r,spX, and spY represents the variables for a circle. 
      //// We push these variable every time the functions is called
      /// So the array keeps growing
      CircleMeasures.push(splot);
    
      /// We define a limit for the array to stop it for growing indefinitedly. In 100 elements. 
      while (CircleMeasures.length > 100) {
        /// Takeout one element of the array
        CircleMeasures.shift();
      }
    
    
    
      //// the core of the animation is here.
    
      /// We clear the canvas
      $.clearRect(0, 0, w, h);
    
    
      for (var i = 0; i < CircleMeasures.length; i++) {
    
        //// We take each element of the array
        splot = CircleMeasures[i];;
        
        /// We fill the circle with a random Color generated by the previous function
        $.fillStyle = randomColor();
        $.beginPath();
        //// We draw a circle using the variables randomly defined in the splot.
        /// splot.x is the x coordinate of the circle where it appears in relation to the window.
        /// splot.y is the y coordinate of the circle where it appears in relation to the window.
        // splot.r is the measure of the radius if the circle.
    
        $.arc(splot.x, splot.y, splot.r, 0, Math.PI * 2, true);
        //// Define a shadow blur for the circle, to make it appear like it is shinning
        $.shadowBlur = 80;
        ///// a Shadow offset in the x and y coordinates.
        $.shadowOffsetX = 2;
        $.shadowOffsetY = 2;
        ///// a shadow color that it is randomized. It is the same color as above
        $.shadowColor = randomColor();
        //// The composite style
        $.globalCompositeOperation = 'lighter';
        /// We draw ?
        /// checar
        $.fill();
    
    
    /// This piece of code defines a little bit of movement of the circle
    /// In conjunction with the effect of dimishing it makes a nice animation of lights
        splot.x = splot.x + splot.spX;
        splot.y = splot.y + splot.spY;
        
        /// With this piece of code we define that the circles begins to shrink and then dissapears
        /// the radius if the circles begind to diminish multiplied by 0.96
        splot.r = splot.r * 0.96;
      }
    }