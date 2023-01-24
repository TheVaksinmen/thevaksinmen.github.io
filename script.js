const big_img_img = document.querySelector('.big_img img');
const vak_i = document.querySelectorAll('.small_img img');

let vak_i_array = [];

for(let i = 0; i < vak_i.length; i++){
    vak_i_array.push(vak_i[i]);
}

vak_i_array.forEach(function(vak_i_array_buffer){
    vak_i_array_buffer.addEventListener('click', function(){
        vak_i_array_buffer.style.opacity = 0.5;
        
        // checks whether element vak_i_array_buffer have the same opacity as the previous element
        // if so, then make the element opacity gone
        for(let i = 0; i < vak_i_array.indexOf(vak_i_array_buffer); i++) {
            if(vak_i[i].style.opacity == 0.5) {
                vak_i[i].removeAttribute('style');
            }
        }

        // checks whether element vak_i_array_buffer have the same opacity as the element after it
        // if so, then make the element opacity gone
        for(let i = vak_i_array.indexOf(vak_i_array_buffer) + 1; i < vak_i.length ; i++) {
            if(vak_i[i].style.opacity == 0.5) {
                vak_i[i].removeAttribute('style');
            }
        }

        big_img_img.setAttribute('src', vak_i_array_buffer.getAttribute('src'));
    });
});