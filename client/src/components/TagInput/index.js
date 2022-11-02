/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { askTagsAction } from '../../redux';
import { TagsInput } from './style';

function TagInput({ initialTags = [] }) {
  const dispatch = useDispatch();
  const [tags, setTags] = useState(initialTags);

  const removeTags = (indexToRemove) => {
    let newTags = tags.slice();
    newTags.splice(indexToRemove, 1);
    dispatch(askTagsAction(newTags));
    setTags(newTags);
  };

  const addTags = (event) => {
    if (
      !tags.includes(event.target.value.trim()) &&
      event.target.value !== ''
    ) {
      let newTags = tags.slice();
      newTags.push(event.target.value.trim());
      dispatch(askTagsAction(newTags));
      setTags(newTags);
      event.target.value = '';
    }
  };

  return (
    <TagsInput>
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span
              className="tag-close-icon"
              onClick={() => {
                removeTags(index);
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
      <input
        className="tag-input"
        type="text"
        onKeyUp={(event) => {
          {
            if (event.key === 'Enter' || event.key === ' ') addTags(event);
          }
        }}
        placeholder="e.g (excel string regex)"
      />
    </TagsInput>
  );
}

export default TagInput;
