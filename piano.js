

    /// value of the notes in htz
    
    //3rd octave
        ///// white
    var do3 = 130.81
    var re3 = 146.83
    var mi3 = 164.81
    var fa3 = 174.61
    var sol3 = 195.99
    var la3 = 220
    var si3 = 246.94
    
        /// sharp and flats 3rd octave
    var dosost3 = 138.59
    var resost3 = 155.56
    var fasost3 = 184.99
    var solsost3 = 207.65
    var lasost3 = 233.08
    
    /// 4th octave
        //// white
    var do4 = 261.62
    var re4 = 293.66
    var mi4 = 329.62
    var fa4 = 349.22
    var sol4 = 391.99
    var la4 = 440
    var si4 = 493.88
    
        /// sharp and flats 4rd octave
    var dosost4 = 277.18
    var resost4 = 311.12
    var fasost4 = 369.99
    var solsost4 = 415.30
    var lasost4 = 460.16
    
    /// 5th octave
        /// white
    var do5 = 523.25
    var re5 = 587.32
    var mi5 = 659.25
        /////black sharp and flats 5th octave
    
    var dosost5 = 554.36
    var resost5 = 622.25
    
    //////////////Query Selectors of active html elements /////////
    
     //3rd octave
        ///// white
        TeclaDo3 = document.querySelector('.do3')
        TeclaRe3 = document.querySelector('.re3')
        TeclaMi3 = document.querySelector('.mi3')
        TeclaFa3 = document.querySelector('.fa3')
        TeclaSol3 = document.querySelector('.sol3')
        TeclaLa3 = document.querySelector('.la3')
        TeclaSi3 = document.querySelector('.si3')
    
    
       //3rd octave
        ///// black
        TeclaDoSost3 = document.querySelector('.doSost3')
        TeclaReSost3 = document.querySelector('.reSost3')
        TeclaFaSost3 = document.querySelector('.faSost3')
        TeclaSolSost3 = document.querySelector('.solSost3')
        TeclaLaSost3 = document.querySelector('.laSost3')
    
        ///4th octave white
        TeclaDo4 = document.querySelector('.do4')
        TeclaRe4 = document.querySelector('.re4')
        TeclaMi4 = document.querySelector('.mi4')
        TeclaFa4 = document.querySelector('.fa4')
        TeclaSol4 = document.querySelector('.sol4')
        TeclaLa4 = document.querySelector('.la4')
        TeclaSi4 = document.querySelector('.si4')
    
        ///4th octave black
        TeclaDoSost4 = document.querySelector('.doSost4')
        TeclaReSost4 = document.querySelector('.reSost4')
        TeclaFaSost4 = document.querySelector('.faSost4')
        TeclaSolSost4 = document.querySelector('.solSost4')
        TeclaLaSost4 = document.querySelector('.laSost4')
    
        ///5th octave white
        TeclaDo5 = document.querySelector('.do5')
        TeclaRe5 = document.querySelector('.re5')
        TeclaMi5 = document.querySelector('.mi5')
            //// 5th octave black
        TeclaDoSost5 = document.querySelector('.doSost5')
        TeclaReSost5 = document.querySelector('.reSost5')
    
    
    ////////////////////////////////////////////////////////////////////////////////////
        
    /// Event listeners for the notes when you do click
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
 