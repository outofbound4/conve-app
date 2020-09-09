/**
 * Class ViewController Controller
 */
class ViewController {
  /**
   * Liste of Articles
   * @param {*} req
   * @param {*} res
   */
  home(req, res) {
    return res.render("home");
  }
  userAuth(req, res) {
      return res.render("userAuth");
  }
  chatbox(req, res) {
    // checking if session is set
    // console.log(req.session);
    if(req.session._id) {
      // if session is set then go to next page
      return res.render("chatbox", {session: req.session});
    }
    else {
      // if session not set the goto to login and register page
      return res.render("userAuth");
    }
  }
  contactlist(req, res) {
    return res.render("contactlist");
  }
  ownprofile(req, res) {
    return res.render("ownprofile");
  }

  otherprofile(req, res) {
    return res.render("otherprofile");
  }
  editprofile(req, res) {
    return res.render("editprofile");
  }
  
}

module.exports = ViewController;