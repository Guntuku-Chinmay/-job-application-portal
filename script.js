document.getElementById("applicationForm")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        qualification: document.getElementById("qualification").value,
        experience: document.getElementById("experience").value,
        skills: document.getElementById("skills").value,
        coverLetter: document.getElementById("coverLetter").value
    };

    const response = await fetch(
        "https://4rzntc4pvf.execute-api.ap-south-1.amazonaws.com/prod/apply",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    const result = await response.json();

    document.getElementById("message").innerHTML = result.message;
});
