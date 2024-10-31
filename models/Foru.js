const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { 
    type: Date, 
    default: () => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}/${month}/${year}`; // Format: dd/mm/yyyy
} }
},{ collection: 'forum' });

const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum
