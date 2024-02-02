let currentAge = new Date().getFullYear() - 2003;
let currentCompany = {
    name: "Avtobus1",
    link: "https://avtobus1.ru"
}

document.getElementById('yearCount').innerText = currentAge;
let companyLabel = document.getElementById('companyLabel')
companyLabel.href = currentCompany.link;
companyLabel.innerHTML = `<b>${currentCompany.name}</b>`;