import React, { useState, useEffect } from 'react';

function CommentComponent() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Load comments from localStorage on initial render
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');

      // Update localStorage with the updated comments
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);

    // Update localStorage with the updated comments
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div>
      <div className="mt-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full px-4 py-2 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600"
        >
          Add Comment
        </button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="p-4 my-4 rounded-md bg-gray-200">
            <ul className='flex justify-between'>
              <li>
                <p>{comment}</p>
              </li>
              <li className='bg-gray-300 px-2 hover:bg-gray-400'>
                <button onClick={() => handleDeleteComment(index)}>
                  X
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentComponent;
