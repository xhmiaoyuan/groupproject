/*
 * JBoss, Home of Professional Open Source
 * Copyright 2013, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function MembersCtrl($scope, $http, Members, Flights, Bookings, Bookings2,
		Texi, Members2, myBigMember) {

	// Define a refresh function, that updates the data from the REST service\

	$scope.refreshcustomer = function() {
		$scope.members = Members.query();
	};
	$scope.refreshflight = function() {
		$scope.flights = Flights.query();
	};
	$scope.refreshbooking = function() {
		$scope.bookings = Bookings.query();
	};

	/*
	 * $scope.getflight=function(){
	 * Flights.get({flightID:$scope.prebook.vflight},function (data){
	 * $scope.booking.Flight=data; console.log($scope.booking.Flight);
	 * 
	 * 
	 * }); }; $scope.getcustomer=function(){
	 * Members.get({memberId:$scope.prebook.vcustomer},function (data){
	 * $scope.booking.Customer=data; console.log($scope.booking.Customer); }); };
	 */
	// Define a reset function, that clears the prototype newMember object, and
	// consequently, the form
	$scope.resetcustomer = function() {
		// clear input fields
		$scope.newMember = {};
	};

	$scope.resetflight = function() {
		// clear input fields
		$scope.newFlight = {};
	};

	// something about the view
	$scope.showcustomer = false;
	$scope.fshowcustomer = function() {
		$scope.showcustomer = !$scope.showcustomer;
	};
	$scope.showflight = false;
	$scope.fshowflight = function() {
		$scope.showflight = !$scope.showflight;
	};
	$scope.bookflag = false;

	$scope.setbook = function() {
		$scope.bookflag = !$scope.bookflag;
	};
	$scope.cancelbook = function(id) {
		console.log(id);
		Bookings.remove({
			bookingID : id
		}, function() {
			$scope.refreshbooking();
		});
	};

	// submit a book include the Custoner and the Flight

	$scope.submitbook = function() {
		$scope.bsuccessMessages = '';
		$scope.berrorMessages = '';
		$scope.berrors = {};
		$scope.booking = {};
		$scope.book = {};
		console.log($scope.book);
		Members.get({
			memberId : $scope.book.customer
		}, function(data1) {
			$scope.booking.customer = data1;
			Flights.get({
				flightID : $scope.book.flight
			}, function(data2) {
				$scope.booking.flight = data2;
				Bookings.save($scope.booking, function(data) {
					console.log($scope.book);
					$scope.refreshbooking();

					// mark success on the registration form
					$scope.bsuccessMessages = [ 'Member Registered' ];

				}, function(result) {
					if ((result.status == 409) || (result.status == 400)) {
						$scope.berrors = result.data;
					} else {
						$scope.berrorMessages = [ 'Unknown  server error' ];
					}
					$scope.$apply();
				});

			});

		});
	};

	// Define a register function, which adds the member using the REST service,
	// and displays any error messages

	$scope.registercustomer = function() {
		$scope.csuccessMessages = '';
		$scope.cerrorMessages = '';
		$scope.cerrors = {};
		Members.save($scope.newMember, function(data) {

			// mark success on the registration form
			$scope.csuccessMessages = [ 'Member Registered' ];

			// Update the list of members
			$scope.refreshcustomer();

			// Clear the form
			$scope.resetcustomer();
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.cerrors = result.data;
			} else {
				$scope.cerrorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});
		$scope.fshowcustomer();

	};

	$scope.registerflight = function() {
		$scope.fsuccessMessages = '';
		$scope.ferrorMessages = '';
		$scope.ferrors = {};

		Flights.save($scope.newFlight, function(data) {

			// mark success on the registration form
			$scope.fsuccessMessages = [ 'Flight Registered' ];

			// Update the list of members
			$scope.refreshflight();

			// Clear the form
			$scope.resetflight();
		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.ferrors = result.data;
			} else {
				$scope.ferrorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});
		$scope.fshowflight();

	};

	$scope.booking = {};

	// Call the refresh() function, to populate the list of members
	$scope.refreshcustomer();
	$scope.refreshflight();
	$scope.refreshbooking();

	// Initialize newMember here to prevent Angular from sending a request
	// without a proper Content-Type.
	$scope.resetcustomer();
	$scope.resetflight();

	// Set the default orderBy to the name property
	$scope.orderBy = 'name';
};

function BookCtrl($scope, $http, Members, Flights, Bookings, Bookings2, Taxi,
		Members2, Bookings3, Members3, Hotels) {

	$scope.registermember = true;
	$scope.bookserver = function() {
		$scope.registermember = !$scope.registermember;
		console.log($scope.registermember);
	};

	$scope.bookflag = false;
	$scope.viewbook = function() {
		$scope.bookflag = false;
	};
	$scope.changeflag = function() {
		$scope.bookflag = !$scope.bookflag;
	};
	$scope.creatCumtomer = function() {
		$scope.structCustomer();
		$scope.bookserver();

	};
	$scope.structCustomer = function() {
		$scope.customer.name = $scope.Member.name;
		$scope.customer.email = $scope.Member.email;
		$scope.customer.phoneNumber = $scope.Member.phoneNumber;
		$scope.customer2.name = $scope.Member.name;
		$scope.customer2.password = $scope.Member.password;
		$scope.customer2.personID = $scope.Member.personid;
		$scope.customer2.email = $scope.Member.email;
		$scope.customer2.phoneNumber = $scope.Member.phoneNumber;
		$scope.customer3.name = $scope.Member.name;
		$scope.customer3.email = $scope.Member.email;
		$scope.customer3.phoneNumber = $scope.Member.phoneNumber;
		$scope.customer3.password = $scope.Member.password;
		$scope.customer3.personID = $scope.Member.personid;
	};
	$scope.refreshcustomer3 = function() {
		$scope.members3 = Members3.query();
	};
	$scope.refreshhotel = function() {
		$scope.hotels = Hotels.query();
	};

	$scope.refreshcustomer = function() {
		$scope.members = Members.query();
	};
	$scope.refreshflight = function() {
		$scope.flights = Flights.query();
	};
	$scope.refreshbooking = function() {
		$scope.bookings = Bookings.query();
	};
	$scope.refreshcustomer2 = function() {
		$scope.members2 = Members2.query();
	};
	$scope.refreshtaxi = function() {
		$scope.taxis = Taxi.query();
	};
	$scope.refreshbooking2 = function() {
		$scope.bookings2 = Bookings2.query();
	};

	$scope.book = function() {
		$scope.book1 = {};
		$scope.book2 = {};
		$scope.book3 = {};
		$scope.book1.customer = $scope.customer;
		console.log($scope.book1);
		Members.save($scope.customer, function(data) {
			Members.get({
				memberID : "a",
				email : $scope.customer.email
			}, function(data) {
				$scope.book1.customer = data;
				$scope.book1.flight = JSON.parse($scope.value.flight);
				console.log($scope.book1);
				Bookings.save($scope.book1, function(data) {
					console.log($scope.book1);

					Members2.save($scope.customer2, function(data) {
						Members2.get({
							memberID : "a",
							email : $scope.customer2.email
						}, function(data) {
							console.log("successfully");
							$scope.book2.customer = data;
							$scope.book2.taxi = JSON.parse($scope.value.taxi);
							$scope.book2.contractDate = $scope.date;
							console.log($scope.book2);
							Bookings2.save($scope.book2, function() {
								console.log("successfully");
								Members3.save($scope.customer3, function() {
									Members.get({
										memberID : "a",
										email : $scope.customer.email
									}, function(data) {
										$scope.book3.member = data;
										$scope.book3.flight = JSON
												.parse($scope.value.hotel);
//										$scope.book3 = {"flight":{"id":0,"flight_no":"aa33","flight_size":33,"current_num":24,"date":"2009-01-01","time":"23:21","fromplace":"aaa","toplace":"bbb"},"member":{"id":12,"name":"asd","email":"sdf@asd.com","phoneNumber":"219572344324","password":"23432432","personID":"2432432"}};
										console.log("successfully");
										Bookings3.save($scope.book3,
												function() {
											console.log("successfully");

												}, function() {
													Bookings2.remove($scope.book2);
													Bookings.remove($scope.book1);

												});

									}, function() {

									});

								}, function() {
								});

							}, function() {
								Bookings.remove($scope.book1, function() {
								});

							});

						}, function() {
						});

					}, function() {

					});

				
					
					
				}, function(result) {}, function(data) {

				});

				console.log($scope.book1);
			}, function() {
				console.log("break");
			});

		}, function(result) {
			if ((result.status == 409) || (result.status == 400)) {
				$scope.bberrors = result.data;
			} else {
				$scope.bberrorMessages = [ 'Unknown  server error' ];
			}
			$scope.$apply();
		});
	};

	$scope.customer = {};
	$scope.customer2 = {};
	$scope.customer3 = {};
	$scope.value = {};
	$scope.date = {};
	/*
	 * $scope.flight = {}; $scope.hotel = {};
	 */
	/* $scope.refreshcustomer3(); */
	$scope.refreshhotel();
	$scope.refreshcustomer();
	$scope.refreshflight();
	$scope.refreshbooking();
	$scope.refreshtaxi();
	// $scope.refreshcustomer2={};
	// $scope.refreshtaxi={};
	// $scope.refreshbooking2={};
	$scope.Member = {};
}
