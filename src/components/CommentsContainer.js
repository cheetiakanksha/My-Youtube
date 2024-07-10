import React from 'react';

const commentsData = [
    {
        name: "Akanksha Cheeti",
        text: "dcjdgccg",
        replies: [
            {
                name: "Akanksha Cheeti",
                text: "dcjdgccg",
            },
            {
                name: "Akanksha Cheeti",
                text: "dcjdgccg",
                replies: [
                    {
                        name: "Akanksha Cheeti",
                        text: "dcjdgccg",
                    },
                ]
            }
        ]
    },
    {
        name: "Akanksha Cheeti",
        text: "dcjdgccg",
        replies: [
            {
                name: "Akanksha Cheeti",
                text: "dcjdgccg",
            },
            {
                name: "Akanksha Cheeti",
                text: "dcjdgccg",
            }
        ]
    },
];

const Comment = ({ data }) => {
    const { name, text, replies = [] } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className="w-12 h-12" alt="user" src="https://static.thenounproject.com/png/642902-200.png" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments = [] }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            {comment.replies?.length > 0 && (
                <div className='pl-5 border border-l-black ml-5'>
                    <CommentsList comments={comment.replies} />
                </div>
            )}
        </div>
    ));
};

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    );
}

export default CommentsContainer;
