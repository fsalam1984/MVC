const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/comment', withAuth, async (req, res) => {
//   try {
//     const newProject = await Comment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//       comment: req.session.comment
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// const id = window.location.href.split("/")[4];

router.post(`/`, withAuth, async (req, res) => {

    // const commentData = await Comment.create(req.body);

    try {
      const newComment = await Comment.create({
        ...req.body,
        userId: req.session.user_id,
        //  name: req.body.comment
      });
  
      res.status(200).json(newComment);
      // res.render('project')
    } catch (err) {
      res.status(500).json(err);
    }
  }
)


module.exports = router;
