function accordion_toggle(sectionId) {
  const allSections = document.querySelectorAll('.accordion-section');
  const section = document.getElementById(sectionId);

  //hiding sections except the one that is toggled
  allSections.forEach((s) => {
    if (s.id !== sectionId) {
      s.style.display = "none";
    }
  });

  //show 
  if (section.style.display === "block") {
    section.style.display = "none";
    console.log(`Closed: ${sectionId}`);
  } else {
    section.style.display = "block";
    console.log(`Opened: ${sectionId}`);
  }
}
