import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  id: number | string;
}

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailers(id);
  const first = data?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  return first ? (
    <video width="100%" src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
