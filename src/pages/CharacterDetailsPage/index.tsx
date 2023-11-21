import { FC } from 'react';
import { useParams } from 'react-router';
import { useGetCharacterDetailsByIdQuery } from 'src/store/api/characters';

const CharacterDetailPage: FC = (): JSX.Element => {
  const { id } = useParams()
  const { data, isLoading, error } = useGetCharacterDetailsByIdQuery(
    Number(id) || null,
  );

  if (isLoading) return <h1>Загрузка...</h1>;

  if (error) return <h1>Не удалось получить данные</h1>;

  if (!data) return <h1>Empty data</h1>;

  return (
    <div>
      <img src={data.image} alt={data.name} />
      <div>{data.name}</div>
      <div>{data.gender}</div>
      <div>{data.species}</div>
    </div>
  )
};

export default CharacterDetailPage;
