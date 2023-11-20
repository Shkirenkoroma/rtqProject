import { FC } from 'react';
import CharacterCard from 'src/components/CharacterCard';
import {
  useGetAllcharactersQuery,
} from 'src/store/api/characters';

const HomePage: FC = (): JSX.Element => {
  const { data: allCharacters, isLoading, error } = useGetAllcharactersQuery()

  if (isLoading) return <h1>Загрузка...</h1>
  if (error) return <h1>Не удалось получить данные</h1>
  return (
    <div>
      {allCharacters?.results.map((characterData) => (
        <CharacterCard key={characterData.id} data={characterData} />
      ))}
    </div>
  )
};

export default HomePage;
