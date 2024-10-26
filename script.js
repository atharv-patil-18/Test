// Function to check symptoms using Flask API
async function checkSymptoms() {
    const input = document.getElementById("symptom-input").value.trim();
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    try {
        const response = await fetch("http://127.0.0.1:5000/check_symptom", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ symptom: input })
        });

        const data = await response.json();

        if (data.conditions.length > 0) {
            const conditionsList = data.conditions.map(condition => `<li>${condition}</li>`).join("");
            resultsDiv.innerHTML = `<h3>Possible Conditions:</h3><ul>${conditionsList}</ul>`;
        } else {
            resultsDiv.innerHTML = "<p>No matching conditions found. Please try another symptom.</p>";
        }
    } catch (error) {
        resultsDiv.innerHTML = "<p>There was an error retrieving data. Please try again later.</p>";
    }
}
