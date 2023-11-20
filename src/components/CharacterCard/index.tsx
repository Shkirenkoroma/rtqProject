import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from 'src/types';

interface IProps {
  data: ICharacter
};

const CharacterCard: FC<IProps> = ({ data }): JSX.Element => {
  return (
    <Link to={`/character/${data.id}`}>
      <div>
        <img src={data.image} alt={data.name} />
        <div>{data.name}</div>
        <div>{data.gender}</div>
      </div>
    </Link>
  )
};

export default CharacterCard;
