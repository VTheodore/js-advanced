function solve() {
  const linkELements = document.querySelectorAll('.middled .link-1');

  linkELements.forEach(link => {
    link.addEventListener("click", () => {
      const linkParagraphElement = link.querySelector('p');
      const incrementedVisits = Number(linkParagraphElement.textContent.split(' ')[1]) + 1; 
      const visitsTextArr = linkParagraphElement.textContent.split(' ');
      
      visitsTextArr[1] = incrementedVisits;

      linkParagraphElement.textContent = visitsTextArr.join(' ').trim();
    })
  })
}