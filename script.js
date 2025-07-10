const container = document.getElementById('contest-container');

async function getdata() {

  const res = await fetch("https://competeapi.vercel.app/contests/upcoming/");
  const data = await res.json();

  data.forEach(contest => {
    const div = document.createElement('div');
    div.classList.add('contest');
    div.innerHTML = `
        <h2>${contest.site}</h2>
        <h3>${contest.title}</h3>
        <p><strong>Start:</strong> ${new Date(contest.startTime).toLocaleString()}</p>
        <p><strong>End:</strong> ${new Date(contest.endTime).toLocaleString()}</p>
        <a href="${contest.url}" target="_blank">Go to Contest</a>
      `;
    container.appendChild(div);
  });

}

getdata();
