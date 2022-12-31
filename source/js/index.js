window.addEventListener('DOMContentLoaded', (event) => {

    window.addEventListener('scroll', () => {
        let interactive_elements = document.querySelectorAll('.animation');
        let window_width = window.innerWidth;
        let window_height = window.innerHeight;
        let window_top = document.body.scrollTop - 100;
      
        if (document.body.clientWidth <= 600) {
          window_top = document.body.scrollTop - 50;
        }
      
        let window_bottom = window_top + window_height;
      
        for (const inter_element of interactive_elements) {
          let element_height = inter_element.clientHeight;
          let element_top = document.body.scrollTop + inter_element.getBoundingClientRect().top;
          let element_bottom = element_top + element_height - 100;
      
          if (element_bottom >= window_top && element_top <= window_bottom) {
            inter_element.classList.add('visible');
          }
        }
      });  
  });

  let mobileMenu = document.getElementById('mobile-menu');
  let mobileMenuButtonOpen = document.getElementById('open-mobile-menu');
  let mobileMenuButtonClose = document.getElementById('close-mobile-menu');
  
  mobileMenuButtonOpen.addEventListener('click', function(){
      mobileMenu.classList.add('active');
      mobileMenuButtonClose.classList.add('active');
      
  });
  mobileMenuButtonClose.addEventListener('click', function(){
      mobileMenu.classList.remove('active');
      mobileMenuButtonClose.classList.remove('active');
  })