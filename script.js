document.getElementById("trackerForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const lastPeriodDate = document.getElementById("lastPeriod").value;
  const cycleLength = parseInt(document.getElementById("cycleLength").value);
  const resultDiv = document.getElementById("result");

  if (!lastPeriodDate || isNaN(cycleLength)) {
    resultDiv.textContent = "Please enter valid information.";
    resultDiv.style.color = "red";
    return;
  }

  const lastDate = new Date(lastPeriodDate);
  lastDate.setDate(lastDate.getDate() + cycleLength);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = lastDate.toLocaleDateString("en-IN", options);

  resultDiv.textContent = `Your next period is expected on: ${formattedDate}`;
  resultDiv.style.color = "#007f5f";
});
document.querySelector('a[href="#tips"]').addEventListener("click", function (e) {
  e.preventDefault();
  const tipsSection = document.getElementById("tips");
  tipsSection.classList.add("active");
  tipsSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("trackLink").addEventListener("click", function (e) {
  e.preventDefault(); 
  document.getElementById("tracker").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("careLink").addEventListener("click", function (e) {
  e.preventDefault();

  const tipsSection = document.getElementById("tips");
  tipsSection.classList.add("active");

  tipsSection.scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("contactLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("homeLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("home").scrollIntoView({
    behavior: "smooth"
  });
});
