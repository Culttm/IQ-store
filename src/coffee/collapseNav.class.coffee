### 
    A simple class for toggling a mobile navigation via bootstrap collapse
    @data-threshold
    @data-speed
###
+ do ($ = jQuery, window) ->
    'use strict';
    class ToggleNavigation
        constructor: (element) ->
            @el = $(element)
            @options = {
                threshold: 992
                speed: 200
            }

        init: ->
            $this = @
            $(window).on 'resize', ->
                $this.fireOnResize $(@).width()

        toggle: ->
            speedFromData = @el.data 'speed'
            speed = speedFromData ? @options.speed
            $(@el).slideToggle speed

        fireOnResize: (w) ->
            thresholdFromData = @el.data 'threshold'
            threshold = thresholdFromData ?  @options.threshold

            if w >= threshold
               $(@el).removeAttr 'style'

    
    Plugin = (option) ->
        @.each ->
            $this = $(@)
            data = $this.data('cl.toggleNavigation')

            if !data 
                $this.data('cl.toggleNavigation', (data = new ToggleNavigation @))
            if (typeof option == 'string')
                data[option]()
            return

    $ ->
        $('[data-nav-toggle]').each ->
            target = $(@).data 'nav-toggle'
            Plugin.call($(target), 'init')
        
        $(document).on 'click', '[data-nav-toggle]', ->
            target = $(@).data 'nav-toggle'
            Plugin.call($(target), 'toggle')

    return