function ImagesController($scope)
{
		$scope.count = 0;
		$scope.imags = 
		[
			{
				image1: 'images/levels/level1/sky.jpg',
				image2: 'images/levels/level1/rain.jpg',
				image3: 'images/levels/level1/cat.jpg',
				correctcode: 39
			},
			{
				image1: 'images/levels/level2/whale.jpg',
				image2: 'images/levels/level2/snake.jpg',
				image3: 'images/levels/level2/tortoise.jpg',
				correctcode: 37
			},
			{
				image1: 'images/levels/level3/notebook.jpg',
				image2: 'images/levels/level3/man.jpg',
				image3: 'images/levels/level3/pencil.jpg',
				correctcode: 38
			},
			{
				image1: 'images/levels/level4/cheese.jpg',
				image2: 'images/levels/level4/chicken.jpg',
				image3: 'images/levels/level4/milk-copy.jpg',
				correctcode: 38
			},
			{
				image1: 'images/levels/level5/ice.jpg',
				image2: 'images/levels/level5/snow.jpg',
				image3: 'images/levels/level5/water.jpg',
				correctcode: 39
			},				
		];
		
		$scope.myFunct = function(ev)
		{
			$scope.press = ev.which;
	        if (ev.which === $scope.imags[$scope.count].correctcode)
	        {
	            $scope.count = $scope.count + 1;
	        }
        };
}

