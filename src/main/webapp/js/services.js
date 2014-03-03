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
// Define the REST resource service, allowing us to interact with it as a high level service
angular.module('membersService', [ 'ngResource' ]).factory('Members',
		function($resource) {
			return $resource('rest/customers/:memberId/:memberID/:email', {});
		});

angular.module('flightService', [ 'ngResource' ]).factory('Flights',
		function($resource) {
			return $resource('rest/flights/:flightID', {});
		});

angular.module('bookingService', [ 'ngResource' ]).factory('Bookings',
		function($resource) {
			return $resource('rest/bookings/:bookingID', {});
		});

angular
		.module('2bookingService', [ 'ngResource' ])
		.factory(
				'Bookings2',
				function($resource) {
					return $resource(
							'http://kitchensinkangularjs-130534516.rhcloud.com/rest/contracts/:bookingID',
							{});
				});

angular
		.module('texiService', [ 'ngResource' ])
		.factory(
				'Taxi',
				function($resource) {
					return $resource(
							'http://kitchensinkangularjs-130534516.rhcloud.com/rest/taxis/:taxiID',
							{});
				});

angular
		.module('2membersService', [ 'ngResource' ])
		.factory(
				'Members2',
				function($resource) {
					return $resource(
							'http://kitchensinkangularjs-130534516.rhcloud.com/rest/customers/:memberID/:email',
							{});
				});
angular
.module('3membersService', [ 'ngResource' ])
.factory(
		'Members3',
		function($resource) {
			return $resource(
					'http://flightbooking-130254496.rhcloud.com/rest/members/:memId/:email',
					{});
		});
angular
.module('3bookingService', [ 'ngResource' ])
.factory(
		'Bookings3',
		function($resource) {
			return $resource(
					'http://flightbooking-130254496.rhcloud.com/rest/books/:bookId/:deId',
					{});
		});
angular
.module('hotelService', [ 'ngResource' ])
.factory(
		'Hotels',
		function($resource) {
			return $resource(
					'http://flightbooking-130254496.rhcloud.com/rest/flights/:flightId',
					{});
		});