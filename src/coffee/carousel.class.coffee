### 
    Init owlCarousel with custom DOM options
    
    http://www.owlcarousel.owlgraphic.com/docs/api-options.html
    @plugin-options 
    @responsive-options
   
    https://github.com/smashingboxes/OwlCarousel2
###
+ do ($ = jQuery, window) ->
    'use strict';
    class CreateCarousel
        constructor: (element) ->
            @.el = $(element)
            @.options = {
                loop: false
                nav: false
                responsive: {}
            }

        build: ->
            $this = @.el
            opt = @.extendOptions()

            if typeof $.fn.owlCarousel == 'function'
                $this.owlCarousel opt
            else
                console.log 'You must install owlCarousel https://github.com/smashingboxes/OwlCarousel2'

        getOptions: ->
            $this = @.el
            optionsObj = {
                domOptions: $this.data('plugin-options')
                responsiveDomOptions: $this.data('responsive-options')
            }
            

        extendOptions: ->
            $this = @.el
            $options = @.options
            $optionsObj = @.getOptions()
            
            if $optionsObj? and Object.keys($optionsObj).length != 0
                $.extend $options, $optionsObj.domOptions

            if  $optionsObj.responsiveDomOptions? and Object.keys($optionsObj.responsiveDomOptions).length != 0
                opts = prepareResponseOption $optionsObj.responsiveDomOptions
                $.extend true, $options.responsive, opts

            return $options

        prepareResponseOption = (opts) ->
            for key, value of opts
              opts[key] = { 
                items: value
              }

            return opts

    
    Plugin = (option) ->
        @.each ->
            $this = $(@)
            data = $this.data('cl.createcarousel')

            if !data 
                $this.data('cl.createcarousel', (data = new CreateCarousel @))
            if (typeof option == 'string')
                data[option]()
            return

    $ ->
        $('.carousel').each ->
            Plugin.call($(@), 'build')
    return