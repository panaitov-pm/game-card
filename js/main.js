;(function($) {

	$(function() {

		// Tabs menu
		$('.card-menu'). on('click', '.card-menu__item', function() {

			// tabs menu changed class
			var $this = $(this);

			$this.siblings()
					.removeClass('js-card-active')
					.end()
					.addClass('js-card-active'); 
			// tabs content changed class
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

		//Information  radial rating value
		var $scope = $('.scope'),
			classes = $scope.find(".c100").attr('class'),
			classArr = classes.split(' '),
			needValue;

			for (var i = 0; i < classArr.length; i++) {
				
				var firstLetter = classArr[i].charAt(0),
					needClass; 

				if (firstLetter === 'p') {
					needClass = classArr[i];
					needClass = needClass.slice(1);
				}
			}

			needValue = (needClass / 10);

		$scope.find('.scope__value').html(needValue);	
	});

})(jQuery);