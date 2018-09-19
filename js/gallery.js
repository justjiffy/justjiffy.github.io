var projects = [
	{
		"name": "Shopterra",
		"link": "http://www.shopterra.com",
		"tags": ["ecommerce", "digital advertising"],
		'img': "project_shopterra.png"
	},
	{	"name": "Detroit Splash", 
		"link": "http://www.justjiffy.com/projects/detroit_splash",
		"tags": ["entertainment", "digital advertising"],
		"img": "project_detroit.png"
	},
	{
		"name": 'Run Downhill Music',
		"link": "http://www.rundownhillmusic.com",
		"tags": ["entertainment", "ecommerce"],
		"img": "project_rdh.png"
	},
	{
		"name": "T.J. Troy - Portfolio",
		"link": "http://www.tjtroy.com",
		"tags": ["entertainment", "digital advertising"],
		"img": "project_tj.png"
	},
	{
		"name": "T.J. Troy - VO",
		"link": "http://tjtroy.com/vo/",
		"tags": ["entertainment"],
		"img": "project_tjvo.png"
	},
	{
		"name": "Fortune Teller",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LJQxcBbpDn94E9JyYL6",
		"tags": ["for fun"],
		"img": "project_fortune.png"
	},
	{
		"name": "Web Animation Projects",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LG2FlTx92euh3VEPdHr",
		"tags": ["for fun"],
		"img": "project_css.png"
	},
	{
		"name": "Formulas",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LLQpJKjI9htbpCK1Yi8",
		"tags": ["for fun"],
		"img": "project_formulas.png"
	},
	{
		"name": "Madlibs",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LJ5_ppVSjBKG-bl26Gt",
		"tags": ["for fun"],
		"img": "project_madlibs.png"
	},
	{
		"name": "Choose Your Adventure",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LLQGrDCVGKNMuiWG0Ak",
		"tags": ["for fun"],
		"img": "project_cya.png"
	},
	{
		"name": "TIC-CAT-TOE",
		"link": "http://www.justjiffy.com/projects/tic-cat-toe/index.html",
		"tags": ["for fun"],
		"img": "project_ticcattoe.png"
	}
]

projects.forEach(function(project) {
	var img = document.createElement('img');
	var a = document.createElement('a');
		a.href = project.link;
		a.innerHTML = "<img src='../images/projects/" + project.img + "'>";
		// a.appenc(img);
	document.getElementById('gallery').append(a);
})