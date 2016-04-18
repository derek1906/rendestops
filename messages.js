function messages(tracker){
	var messages = {
		"landing": {
			"default-title": {
				funny: ["Near as fuck.", "Damn.", "They be close."],
				standard: "Welcome."
			},
			"default-subtitle": {
				funny: ["These are the closest bus stops I could find.", "Do you know how long it took me to find these damn stops for you?", "Found some damn close bus stops. They on yo ass."],
				standard: "Nearby bus stops will be listed below from closest to furthest."
			}
		},
		"stop-details": {
			"default-title": {
				funny: ["Don't miss it.", "Which one?", "I’m. Starving."],
				standard: "Choose a bus."
			},
			"default-subtitle": {
				funny: ["You gon miss it if you don’t use the damn timer.", "Bruh... we don’t have all fucking day here.", "Need. Food. Insert. Pizza."],
				standard: "Buses of this bus stop will be listed below."
			}
		},
		"trip-details": {
			"default-title": {
				funny: ["So Accurate!", "Hey ladies~", "Check it out!"],
				standard: "Arrival times."
			},
			"default-subtitle": {
				funny: ["We got dem bus times & locations down to a science.", "Your bus isn’t the only thing that’s about to arrive ;)", "Bottom right to check out the fucking bus routes"],
				standard: "And the bus route if you click the button on the bottom right."
			}
		}
	};

	tracker
	.filter("msg", function(storage, random){
		var useStandard = storage.get("standard_messages");

		return function(message_id, page_id){

			var page = messages[page_id];
			if(!page)	return "[Message Error]";

			var message = page[message_id];
			if(!message)	return "[Message Error]";

			console.log(random())

			return useStandard ? message.standard : message.funny[random()*message.funny.length |0];
		};
	})
}