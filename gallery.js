$(document).ready(function() {
    // Fade in gallery items on page load
    $('.gallery-item').hide().each(function(i) {
        $(this).delay(i * 100).fadeIn(500);
    });

    // Enhanced hover effects
    $('.gallery-item').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
            $(this).find('img').css('opacity', '0.8');
            $(this).find('a').animate({
                'background-color': '#23527c',
                'padding': '0.6em 1.2em'
            }, 200);
        },
        function() {
            $(this).css('transform', 'scale(1)');
            $(this).find('img').css('opacity', '1');
            $(this).find('a').animate({
                'background-color': '#337ab7',
                'padding': '0.5em 1em'
            }, 200);
        }
    );

    // Lightbox functionality
    $('.gallery-item img').click(function() {
        const imgSrc = $(this).attr('src');
        const imgAlt = $(this).attr('alt');
        
        // Create lightbox overlay
        $('body').append(`
            <div class="lightbox-overlay">
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <h3>${$(this).siblings('h2').text()}</h3>
                </div>
            </div>
        `);
        
        // Close lightbox
        $('.close-lightbox, .lightbox-overlay').click(function() {
            $('.lightbox-overlay').fadeOut(300, function() {
                $(this).remove();
            });
        });
    });
});
