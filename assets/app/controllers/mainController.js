var name = document.getElementById('tb_name');
var link = document.getElementById('tb_link');
var image = document.getElementById('tb_image');
var mainForm = document.getElementById('mainForm');
var thankyou = document.getElementById('thankyou');
// var mainProfileObj = { title: name.value, link: link.value, icon: image.value };

app.controller('MainController', function MainController($scope) {
	$scope.mainProfileObj = {};
	$scope.formSubmit = function() {
		console.log('my model', $scope.mainProfileObj);
		// e.stopPropagation();
        // e.preventDefault();

		$scope.profiles = [];
		// $scope.profiles.push($scope.mainProfileObj);

		/* This will show if the function is completed */
		thankyou.style.display="block";
	};

	// mainForm.addEventListener('submit', formSubmit);
	// $scope.adambragg = {
	// 	title: "Adam Bragg",
	// 	icon: "https://avatars1.githubusercontent.com/u/445985?v=3&s=460",
	// 	link: "https://github.com/adampbragg"
	// };
});