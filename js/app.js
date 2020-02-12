var common = {
	init: function() {
		common.main();
	},
	main: function() {

		var i = 1;
		function marginLeft(i = 1) {
			var x = -100 * i;
			$('.container-1').css('margin-left', x + '%');
		}
		
		setTimeout(function(){
			marginLeft(1) 
		}, 2500);


		$('.btn-go').click(function(e){
			e.preventDefault();
			var n = $(this).attr('data-numb')
			marginLeft(n) 
		});
		$('.back').click(function(e){
			e.preventDefault();
			var n = $(this).attr('data-numb')
			marginLeft(n) 
		});

		$('.btn-stop').click(function(){
			setTimeout(function() {
				location.reload();
			}, 2000);
		});

		$('.gender button').click(function(){
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			}else {
				$('.gender button').removeClass('active');
				$(this).addClass('active');
			}
		});
		$('.list li button').click(function(){
			if($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
			}else {
				$('.list li').removeClass('active');
				$(this).parent().addClass('active');
			}
		});

		$('.choose-btns button').click(function(){
			if($(this).hasClass('active')) {
				$(this).removeClass('active');
			}else {
				$('.choose-btns button').removeClass('active');
				$(this).addClass('active');
			}
		});
	}
};

(function() {
	common.init();
}());
