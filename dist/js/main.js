
/* 
    Init owlCarousel with custom DOM options
    
    http://www.owlcarousel.owlgraphic.com/docs/api-options.html
    @plugin-options 
    @responsive-options
   
    https://github.com/smashingboxes/OwlCarousel2
 */
+(function($, window) {
  'use strict';
  var CreateCarousel, Plugin;
  CreateCarousel = (function() {
    var prepareResponseOption;

    function CreateCarousel(element) {
      this.el = $(element);
      this.options = {
        loop: false,
        nav: false,
        responsive: {}
      };
    }

    CreateCarousel.prototype.build = function() {
      var $this, opt;
      $this = this.el;
      opt = this.extendOptions();
      if (typeof $.fn.owlCarousel === 'function') {
        return $this.owlCarousel(opt);
      } else {
        return console.log('You must install owlCarousel https://github.com/smashingboxes/OwlCarousel2');
      }
    };

    CreateCarousel.prototype.getOptions = function() {
      var $this, optionsObj;
      $this = this.el;
      return optionsObj = {
        domOptions: $this.data('plugin-options'),
        responsiveDomOptions: $this.data('responsive-options')
      };
    };

    CreateCarousel.prototype.extendOptions = function() {
      var $options, $optionsObj, $this, opts;
      $this = this.el;
      $options = this.options;
      $optionsObj = this.getOptions();
      if (($optionsObj != null) && Object.keys($optionsObj).length !== 0) {
        $.extend($options, $optionsObj.domOptions);
      }
      if (($optionsObj.responsiveDomOptions != null) && Object.keys($optionsObj.responsiveDomOptions).length !== 0) {
        opts = prepareResponseOption($optionsObj.responsiveDomOptions);
        $.extend(true, $options.responsive, opts);
      }
      return $options;
    };

    prepareResponseOption = function(opts) {
      var key, value;
      for (key in opts) {
        value = opts[key];
        opts[key] = {
          items: value
        };
      }
      return opts;
    };

    return CreateCarousel;

  })();
  Plugin = function(option) {
    return this.each(function() {
      var $this, data;
      $this = $(this);
      data = $this.data('cl.createcarousel');
      if (!data) {
        $this.data('cl.createcarousel', (data = new CreateCarousel(this)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  };
  $(function() {
    return $('.carousel').each(function() {
      return Plugin.call($(this), 'build');
    });
  });
})(jQuery, window);

//# sourceMappingURL=data:application/json;base64,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


/* 
    A simple class for toggling a mobile navigation via bootstrap collapse
    @data-threshold
    @data-speed
 */
+(function($, window) {
  'use strict';
  var Plugin, ToggleNavigation;
  ToggleNavigation = (function() {
    function ToggleNavigation(element) {
      this.el = $(element);
      this.options = {
        threshold: 992,
        speed: 200
      };
    }

    ToggleNavigation.prototype.init = function() {
      var $this;
      $this = this;
      return $(window).on('resize', function() {
        return $this.fireOnResize($(this).width());
      });
    };

    ToggleNavigation.prototype.toggle = function() {
      var speed, speedFromData;
      speedFromData = this.el.data('speed');
      speed = speedFromData != null ? speedFromData : this.options.speed;
      return $(this.el).slideToggle(speed);
    };

    ToggleNavigation.prototype.fireOnResize = function(w) {
      var threshold, thresholdFromData;
      thresholdFromData = this.el.data('threshold');
      threshold = thresholdFromData != null ? thresholdFromData : this.options.threshold;
      if (w >= threshold) {
        return $(this.el).removeAttr('style');
      }
    };

    return ToggleNavigation;

  })();
  Plugin = function(option) {
    return this.each(function() {
      var $this, data;
      $this = $(this);
      data = $this.data('cl.toggleNavigation');
      if (!data) {
        $this.data('cl.toggleNavigation', (data = new ToggleNavigation(this)));
      }
      if (typeof option === 'string') {
        data[option]();
      }
    });
  };
  $(function() {
    $('[data-nav-toggle]').each(function() {
      var target;
      target = $(this).data('nav-toggle');
      return Plugin.call($(target), 'init');
    });
    return $(document).on('click', '[data-nav-toggle]', function() {
      var target;
      target = $(this).data('nav-toggle');
      return Plugin.call($(target), 'toggle');
    });
  });
})(jQuery, window);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNlTmF2LmNsYXNzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0FBS0EsQ0FBSyxDQUFBLFNBQUMsQ0FBRCxFQUFhLE1BQWI7RUFDRDtBQUFBLE1BQUE7RUFDTTtJQUNXLDBCQUFDLE9BQUQ7TUFDVCxJQUFDLENBQUEsRUFBRCxHQUFNLENBQUEsQ0FBRSxPQUFGO01BQ04sSUFBQyxDQUFBLE9BQUQsR0FBVztRQUNQLFNBQUEsRUFBVyxHQURKO1FBRVAsS0FBQSxFQUFPLEdBRkE7O0lBRkY7OytCQU9iLElBQUEsR0FBTSxTQUFBO0FBQ0YsVUFBQTtNQUFBLEtBQUEsR0FBUTthQUNSLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsUUFBYixFQUF1QixTQUFBO2VBQ25CLEtBQUssQ0FBQyxZQUFOLENBQW1CLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxLQUFMLENBQUEsQ0FBbkI7TUFEbUIsQ0FBdkI7SUFGRTs7K0JBS04sTUFBQSxHQUFRLFNBQUE7QUFDSixVQUFBO01BQUEsYUFBQSxHQUFnQixJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxPQUFUO01BQ2hCLEtBQUEsMkJBQVEsZ0JBQWdCLElBQUMsQ0FBQSxPQUFPLENBQUM7YUFDakMsQ0FBQSxDQUFFLElBQUMsQ0FBQSxFQUFILENBQU0sQ0FBQyxXQUFQLENBQW1CLEtBQW5CO0lBSEk7OytCQUtSLFlBQUEsR0FBYyxTQUFDLENBQUQ7QUFDVixVQUFBO01BQUEsaUJBQUEsR0FBb0IsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsV0FBVDtNQUNwQixTQUFBLCtCQUFZLG9CQUFxQixJQUFDLENBQUEsT0FBTyxDQUFDO01BRTFDLElBQUcsQ0FBQSxJQUFLLFNBQVI7ZUFDRyxDQUFBLENBQUUsSUFBQyxDQUFBLEVBQUgsQ0FBTSxDQUFDLFVBQVAsQ0FBa0IsT0FBbEIsRUFESDs7SUFKVTs7Ozs7RUFRbEIsTUFBQSxHQUFTLFNBQUMsTUFBRDtXQUNMLElBQUMsQ0FBQyxJQUFGLENBQU8sU0FBQTtBQUNILFVBQUE7TUFBQSxLQUFBLEdBQVEsQ0FBQSxDQUFFLElBQUY7TUFDUixJQUFBLEdBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxxQkFBWDtNQUVQLElBQUcsQ0FBQyxJQUFKO1FBQ0ksS0FBSyxDQUFDLElBQU4sQ0FBVyxxQkFBWCxFQUFrQyxDQUFDLElBQUEsR0FBVyxJQUFBLGdCQUFBLENBQWlCLElBQWpCLENBQVosQ0FBbEMsRUFESjs7TUFFQSxJQUFJLE9BQU8sTUFBUCxLQUFpQixRQUFyQjtRQUNJLElBQUssQ0FBQSxNQUFBLENBQUwsQ0FBQSxFQURKOztJQU5HLENBQVA7RUFESztFQVdULENBQUEsQ0FBRSxTQUFBO0lBQ0UsQ0FBQSxDQUFFLG1CQUFGLENBQXNCLENBQUMsSUFBdkIsQ0FBNEIsU0FBQTtBQUN4QixVQUFBO01BQUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxJQUFMLENBQVUsWUFBVjthQUNULE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBWixFQUF1QixNQUF2QjtJQUZ3QixDQUE1QjtXQUlBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixtQkFBeEIsRUFBNkMsU0FBQTtBQUN6QyxVQUFBO01BQUEsTUFBQSxHQUFTLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxJQUFMLENBQVUsWUFBVjthQUNULE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBQSxDQUFFLE1BQUYsQ0FBWixFQUF1QixRQUF2QjtJQUZ5QyxDQUE3QztFQUxGLENBQUY7QUF2Q0MsQ0FBQSxDQUFILENBQVEsTUFBUixFQUFnQixNQUFoQiIsImZpbGUiOiJjb2xsYXBzZU5hdi5jbGFzcy5qcyJ9
