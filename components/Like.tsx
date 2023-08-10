import { useState } from 'react';

interface LikeProps {
  likes_atuais: number;
}

export default function Like(props: LikeProps) {
  const [likes, setLikes] = useState(props.likes_atuais);

  function dar_like() {
    if (pode_likar) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  }

  const pode_likar = props.likes_atuais > likes;

  return (
    <div>
      <h1 onClick={dar_like}>
        {pode_likar ? '❤️' : '♡'} {likes}
      </h1>
    </div>
  );
}
