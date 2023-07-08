
const candidates = [
    { name: "Ankit Sharma", location: "Hyderabad", jobRole: "Software Engineer" },
    { name: "Prince Gupta", location: "New Delhi", jobRole: "UI/UX Designer" },
    { name: "Anushka Singh", location: "Banglore", jobRole: "Data Analyst" },
    { name: "Shivani Chaurasiya", location: "Kolkata", jobRole: "Project Manager" },
    { name: "Ansh Mittal", location: "Mumbai", jobRole: "Sales Representative" }
  ];
  
  function displayResults(results) {
    const resultList = document.getElementById("results");
    resultList.innerHTML = "";
  
    if (results.length === 0) {
      resultList.innerHTML = "<li>No candidates found.</li>";
      return;
    }
  
    results.forEach((candidate) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.jobRole}`;
      resultList.appendChild(listItem);
    });
  }
  
  function performSearch(location, jobRole) {
   
    const results = candidates.filter(candidate => {
      return candidate.location.toLowerCase().includes(location.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
    });
  
    displayResults(results);
  }
  
  document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const location = document.getElementById("location").value;
    const jobRole = document.getElementById("jobRole").value;
  
    performSearch(location, jobRole);
  });
  