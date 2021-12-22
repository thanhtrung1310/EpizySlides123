(function($) {

    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $main = $('#main'),
        $panels = $main.children('.panel'),
        $nav = $('#nav'),
        $nav_links = $nav.children('a');

    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['361px', '736px'],
        xsmall: [null, '360px']
    });

    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    $nav_links
        .on('click', function(event) {

            var href = $(this).attr('href');

            if (href.charAt(0) != '#' ||
                $panels.filter(href).length == 0)
                return;

            event.preventDefault();
            event.stopPropagation();

            if (window.location.hash != href)
                window.location.hash = href;

        });

    (function() {

        var $panel, $link;

        if (window.location.hash) {

            $panel = $panels.filter(window.location.hash);
            $link = $nav_links.filter('[href="' + window.location.hash + '"]');

        }

        if (!$panel ||
            $panel.length == 0) {

            $panel = $panels.first();
            $link = $nav_links.first();

        }

        $panels.not($panel)
            .addClass('inactive')
            .hide();

        $link
            .addClass('active');

        $window.scrollTop(0);

    })();

    $window.on('hashchange', function(event) {

        var $panel, $link;

        if (window.location.hash) {

            $panel = $panels.filter(window.location.hash);
            $link = $nav_links.filter('[href="' + window.location.hash + '"]');

            if ($panel.length == 0)
                return;

        } else {

            $panel = $panels.first();
            $link = $nav_links.first();

        }

        $panels.addClass('inactive');

        $nav_links.removeClass('active');

        $link.addClass('active');

        $main
            .css('max-height', $main.height() + 'px')
            .css('min-height', $main.height() + 'px');


        setTimeout(function() {

            $panels.hide();

            $panel.show();

            $main
                .css('max-height', $panel.outerHeight() + 'px')
                .css('min-height', $panel.outerHeight() + 'px');

            $window.scrollTop(0);

            window.setTimeout(function() {

                $panel.removeClass('inactive');

                $main
                    .css('max-height', '')
                    .css('min-height', '');

                $window.triggerHandler('--refresh');

                locked = false;

            }, (breakpoints.active('small') ? 0 : 500));

        }, 250);

    });


    if (browser.name == 'ie') {

        $window.on('--refresh', function() {

            $wrapper.css('height', 'auto');

            window.setTimeout(function() {

                var h = $wrapper.height(),
                    wh = $window.height();

                if (h < wh)
                    $wrapper.css('height', '100vh');

            }, 0);

        });

        $window.on('resize load', function() {
            $window.triggerHandler('--refresh');
        });


        $('.panel.intro').each(function() {

            var $pic = $(this).children('.pic'),
                $img = $pic.children('img');

            $pic
                .css('background-image', 'url(' + $img.attr('src') + ')')
                .css('background-size', 'cover')
                .css('background-position', 'center');

            $img
                .css('visibility', 'hidden');

        });

    }

})(jQuery);