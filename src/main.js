import "./style.css";

module.exports = {
    content: ["./**/*.html"],
    safelist: ["active"],
    theme: {
      fontFamily: {
        header: ["Raleway", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
  
      screens: {
        xs: "375px",
        ...defaultTheme.screens,
      },

container: {
    center: true,
    padding: "1rem",
  },

  shadows: {
    default: "0 2px 18px rgba(0, 0, 0, 0.06)",
    md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
  },
}
}

    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    // quick view

    /* Background backdrop, show/hide based on modal state. */
    
Entering: "ease-out duration-300"
From: "opacity-0"
To: "opacity-100"
Leaving: "ease-in duration-200"
From: "opacity-100"
To: "opacity-0"

// Modal panel, show/hide based on modal state.
    
Entering: "ease-out duration-300"
  From: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
  To: "opacity-100 translate-y-0 md:scale-100"
Leaving: "ease-in duration-200"
  From: "opacity-100 translate-y-0 md:scale-100"
  To: "opacity-0 translate-y-4 md:translate-y-0 md:scale-95"