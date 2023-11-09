const contact = {
	name: "The LaunchCode Foundation",
	address1: "4811 Delmar Boulevard",
	address2: "Saint Louis, MO 63108",
	email: "info@launchcode.org",
	phone: "(314) 254-0107",
	website: "www.launchcode.org"
}

const businessHours = {
	Sunday:	"Closed",
	Monday:	"9AM–5PM",
  Tuesday: "9AM–5PM",
	Wednesday: "9AM–5PM",
	Thursday: "9AM–5PM",
	Friday: "9AM–5PM",
	Saturday: "Closed"
}

function formatBusinessHours() {
	let hours = "Open for Business:\n\n";
	for (day in businessHours) {
		if (businessHours[day] !== "Closed") {
			hours += `\t${day}: ${businessHours[day]}\n`	
		}
	}
	return hours;
}

function printOrgInfo() {
	console.log(`
Thank you for your interest in LaunchCode! To learn more about our programs, visit our website:
${contact.website}.
	
${contact.name}
${contact.address1}
${contact.address2}

${contact.phone} | ${contact.email}

${formatBusinessHours()}
	`);
}

// Export the last function directly without setting an object with key/value pairs
module.exports = printOrgInfo;
