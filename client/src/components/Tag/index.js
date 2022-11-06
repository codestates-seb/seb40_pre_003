// redux 만들면 상태로 가져올 것임
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchTagAction } from '../../redux';
import { Button } from './style';
function Tag({ name }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchTag = () => {
    dispatch(searchTagAction(name));
    navigate('/searchtag');
  };

  return <Button onClick={handleSearchTag}>{name}</Button>;
}

export default Tag;
