;(function($) {

	$(function() {

		// Tabs menu
		$('.card-menu'). on('click', '.card-menu__item', function() {

			// tabs menu class changed 
			var $this = $(this);

			$this.siblings()
					.removeClass('js-card-active')
					.end()
					.addClass('js-card-active'); 
					
			// tabs content class changed 
			$this.parents('.card')
					.find('.tabs-content')
					.removeClass('js-card-active')
					.eq($this.index())
					.addClass('js-card-active');
		});

		//Value of rating progressbar 
		$('.rating-info').find('.rating-info__value').each(function(index, el) {
		
			var $this = $(this);
			var ratingValue = $this.attr('style').split(' ');

			ratingValue = ( parseInt( ratingValue[1] ) / 10 );

			$this.closest('.rating-info')
					.find('.rating-info__text')
					.html( ratingValue )
					.end()
					.find('.rating-info__text--wait')
					.html( (ratingValue * 10) + '%' );
		});

		// Change default emptyTrikness
		 var proto = $.circleProgress.defaults,
        originalDrawEmptyArc = proto.drawEmptyArc;
		    
		    proto.emptyThickness = 5; // just a default value; 
		                              // you may override it on init
		    
		    // overriding original method
		    proto.drawEmptyArc = function(v) {
		        var oldGetThickness = this.getThickness, 
		            oldThickness = this.getThickness(),
		            emptyThickness = this.emptyThickness || _oldThickness.call(this),
		            oldRadius = this.radius,
		            delta = (oldThickness - emptyThickness) / 2;

		        this.getThickness = function() {
		            return emptyThickness;
		        };
		        
		        this.radius = oldRadius - delta;
		        this.ctx.save();
		        this.ctx.translate(delta, delta);
		        
		        originalDrawEmptyArc.call(this, v);
		        
		        this.ctx.restore();
		        this.getThickness = oldGetThickness;
		        this.radius = oldRadius;
		    };

		//Information  radial rating value
		$('.scope').circleProgress({
			emptyThickness: 2, // new attribute empty thinkness width
		    //value: 0.78, // 78% from 100%
		    size: 73, // circle width, height
		    fill: {
		    	gradient: ['#00d4be', '#1ae77f']
		    }, // value color
		    startAngle: -Math.PI / 4 * 18,
		    reverse: false, // change direction
		    thickness: 4, // value width
		    lineCap: 'butt', // round, square value edge
			emptyFill: '#787c9b', // under value color
			animation: {
				duration: 1500
			}
		}).on('circle-animation-progress', function(event, progress, stepValue) {
				$(this).find('.scope__value').text( (stepValue * 10).toFixed(1));
			});
			
	});

})(jQuery);