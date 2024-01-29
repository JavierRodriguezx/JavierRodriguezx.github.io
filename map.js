document.addEventListener("DOMContentLoaded", (event) =>{

    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `
    
            <iframe class="contact__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838759.6939484673!2d-98.0068971860457!3d20.01737844748121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c355d0af54526d%3A0x2d777f0a6710b9b3!2sVeracruz!5e0!3m2!1ses-419!2smx!4v1699668256613!5m2!1ses-419!2smx"  style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;


    }, 500)

}); 