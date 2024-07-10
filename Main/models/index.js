const User = require('./User');
const Project = require('./Project');
const Comment = require('./comment')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = { User, Project, Comment };
