require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

var Transifex = require("transifex");

var transifex = new Transifex({
	project_slug: "safetag-overview",
  credential: `${process.env.TRANSIFEX_USER}:${process.env.TRANSIFEX_PASSWORD}`,
});

console.log(transifex)

transifex.projectInstanceMethods("site-strings", function(err, data) {
  //console.log(err)
  console.log(data)
});
