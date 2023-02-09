import { createSelector } from 'reselect';

const topicsSelector = (state) => state.topic.topics;

export const totalTopicsSelector = createSelector(topicsSelector, (topics) => topics.length);

export const selectedTopicsSelector = createSelector(
  topicsSelector,
  (topics) => topics.filter((item) => item.checked).length,
);

export const percentOfSelectionSelector = createSelector(
  [totalTopicsSelector, selectedTopicsSelector],
  (totalTopic, selectedTopic) => ((selectedTopic / totalTopic) * 100).toFixed(1),
);
