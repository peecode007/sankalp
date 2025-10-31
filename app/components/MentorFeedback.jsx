export default function MentorFeedback() {
  const comments = [
    {
      mentor: 'Tushar Yadav',
      comment: 'Ensure input sanitization before NLP parsing to meet NFR-SEC-02 compliance.',
    },
    {
      mentor: 'Jasspreet',
      comment: 'Please benchmark latency on both local and cloud environments before final submission.',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        💬 Mentor Feedback & Comments
      </h3>
      <div className="space-y-3 text-sm text-gray-700">
        {comments.map((item, index) => (
          <p key={index}>
            <span className="font-semibold text-indigo-700">{item.mentor}:</span>{' '}
            {item.comment}
          </p>
        ))}
      </div>
    </div>
  );
}