import React from 'react';

export default function AppComp08() {
  const movie1 = {
    title: '스즈메의 문단속',
    source: 'https://t1.daumcdn.net/movie/3a684ccaeb7aeac8e3f060ffe7249f7fe039443a',
    actor: '스즈메, 소타, 다이진',
  };

  const movie2 = {
    title: '너의 이름은',
    source: 'https://t1.daumcdn.net/movie/267f4aed284629f637f266497e739697a567550e',
    actor: '타키, 미츠하',
  };

  const movie3 = {
    title: '날씨의 아이',
    source: 'https://t1.daumcdn.net/movie/dfae27c930b8506252f6e4051e05363761c22b3c',
    actor: '호다카, 히나',
  };
  const movie4 = {
    title: '초속 5센티미터',
    source: 'https://upload.wikimedia.org/wikipedia/ko/0/03/초속_5센티미터.jpg',
    actor: '타카키, 아카리',
  };

  return (
    <div>
      <Movie data={movie1} />
      <Movie data={movie2} />
      <Movie data={movie3} />
      <Movie data={movie4} />
    </div>
  );
}

function Movie({ data }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={data.source} style={{ width: 200, borderRadius: '10%' }} />
      <div style={{ color: 'orange' }}>{data.title}</div>
      <div>출연배우 : {data.actor}</div>
    </div>
  );
}
