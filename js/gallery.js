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
		"name": "Javascript Projects",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LKy1JbEKEs1GwKSGmSV/index.html",
		"tags": ["for fun"],
		"img": "project_js.png"
	},
	{
		"name": "Web Animation Projects",
		"link": "http://projects.ucode.com/bxFryo9kPrNEOlgAvD3ohM1aJOD2/-LG2FlTx92euh3VEPdHr",
		"tags": ["for fun"],
		"img": "project_css.png"
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