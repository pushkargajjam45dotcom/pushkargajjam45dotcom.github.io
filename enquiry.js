function openEnquiry() {
    let name = prompt("Please enter your name:");
    if (name == null || name == "") {
        alert("We need your name to help you plan!");
        return;
    }

    let destination = prompt(`Hi ${name}! Which destination interests you most? (e.g., Siddheshwar Temple, Pandharpur, Akkalkot)`);
    
    let travelDate = prompt("When are you planning to visit? (e.g., January for the Yatra)");

    if (destination && travelDate) {
        alert(`Thank you, ${name}! We have recorded your interest in ${destination} for ${travelDate}. Our travel guide will reach out soon with textile and food recommendations!`);
        console.log(`Enquiry Received: Name: ${name}, Place: ${destination}, Date: ${travelDate}`);
    } else {
        alert("Information incomplete, but we hope to see you in Solapur soon!");
    }
}
