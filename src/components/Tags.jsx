import React from 'react';

const tagData = [
  { title: '10K', content: 'Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry' },
  { title: '2K', content: 'Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry' },
  { title: '98%', content: 'Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry' },
  { title: '10k', content: 'Lorem Ipsum is simply dummy text of <br/> the printing and typesetting industry' },
];

export default function Tags() {
  return (
    <div className='row d-flex justify-content-center align-items-center' style={{ backgroundColor: '#141515' }}>
      {tagData.map((tag, index) => (
        <div key={index} className='col-12 justify-content-center align-items-center col-lg-3 d-flex flex-column p-2 text-white border-bottom'>
          <h1 className="tag_heading">{tag.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: tag.content }} />
        </div>
      ))}
    </div>
  );
}
