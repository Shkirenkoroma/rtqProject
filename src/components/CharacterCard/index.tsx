import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from 'src/types';
import * as S from "./index.styles";

interface IProps {
  data: ICharacter
};

const CharacterCard: FC<IProps> = ({ data }): JSX.Element => {
  return (
    <Link to={`/character/${data.id}`}>
      <S.Container>
        <img src={data.image} alt={data.name} />
        <div>{data.name}</div>
        <div>{data.gender}</div>
      </S.Container>
    </Link>
  )
};

export default CharacterCard;
