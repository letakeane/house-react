export const getStories = () => {
  return fetch('http://localhost:3001/stories/').then(response => response.json());
}