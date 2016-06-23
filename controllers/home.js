function home(req, res){
  res.render('home', {
    title: 'welcome'
  })
}

module.exports = home;
