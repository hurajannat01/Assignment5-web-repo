let availableBalance = 5500; // Initial balance

// Event listener for the donate button to show donation sections
document.getElementById('donateButton').addEventListener('click', function() {
    document.getElementById('donationSection').classList.remove('hidden');
    document.getElementById('donationSection2').classList.remove('hidden');
    document.getElementById('donationSection3').classList.remove('hidden');
});

// Function to update donation amounts and balance
function updateDonation(amountInputId, displayId, errorMessageId) {
    const amount = parseFloat(document.getElementById(amountInputId).value);

    if (amount > 0 && amount <= availableBalance) {
        // Deduct from available balance and display the updated balance
        availableBalance -= amount;
        document.getElementById('availableBalance').innerText = availableBalance + ' BDT';

        // Update the respective donation total for each section
        const totalDisplay = document.getElementById(displayId);
        const currentTotal = parseFloat(totalDisplay.innerText) || 0;
        totalDisplay.innerText = (currentTotal + amount).toFixed(2) + ' BDT';

        // Show the success modal with the donated amount
        document.getElementById('donationSuccessAmount').innerText = amount.toFixed(2);
        document.getElementById('successModal').classList.remove('hidden');

        // Clear the input field for donation
        document.getElementById(amountInputId).value = '';
        document.getElementById(errorMessageId).classList.add('hidden'); // Hide error message if any
    } else {
        // Show error message if the amount is invalid or exceeds available balance
        document.getElementById(errorMessageId).classList.remove('hidden');
    }
}

// Event listeners for specific donation buttons, linking them to the respective causes
document.getElementById('donateNowButton1').addEventListener('click', function() {
    updateDonation('donationAmount1', 'donationTotalDisplay1', 'errorMessage1');
    recordDonation(document.getElementById('donationAmount1').value, "Flood at Noakhali, Bangladesh");
});

document.getElementById('donateNowButton2').addEventListener('click', function() {
    updateDonation('donationAmount2', 'donationTotalDisplay2', 'errorMessage2');
    recordDonation(document.getElementById('donationAmount2').value, "Flood Relief in Feni, Bangladesh");
});

document.getElementById('donateNowButton3').addEventListener('click', function() {
    updateDonation('donationAmount3', 'donationTotalDisplay3', 'errorMessage3');
    recordDonation(document.getElementById('donationAmount3').value, "Aid for Injured in the Quota Movement");
});

// Event listener to close the success modal
document.getElementById('closeSuccessModal').addEventListener('click', function() {
    document.getElementById('successModal').classList.add('hidden');
});

// Show donation history when history button is clicked
document.getElementById('historyButton').addEventListener('click', function() {
    document.getElementById('historyModal').classList.remove('hidden');
});

// Close donation history modal
document.getElementById('closeHistoryModal').addEventListener('click', function() {
    document.getElementById('historyModal').classList.add('hidden');
});

// Clear donation history when the button is clicked
document.getElementById('clearHistoryButton').addEventListener('click', function() {
    document.getElementById('donationHistory').innerHTML = ''; // Clear the history display
});

// Function to record donation in the donation history
function recordDonation(amount, cause) {
    const donationHistory = document.getElementById('donationHistory');
    const newEntry = document.createElement('div'); // Create a new div for each entry
    newEntry.classList.add('border', 'p-2', 'rounded-md', 'shadow', 'my-2'); // Add classes for styling
    newEntry.innerText = `${amount} BDT donated for ${cause}.`; // Display the donation details
    donationHistory.appendChild(newEntry); // Append the new entry to the history list
}
