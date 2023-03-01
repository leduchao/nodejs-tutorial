class SiteController {
  // GET -> /home
  index(req, res) {
    res.render('home');
  }

  //GET -> /home/search
  search(req, res) {
    res.send('SEARCH');
  }
}

module.exports = new SiteController;