const content = [
  {
    tab: "section 1",
    content: "I'm the content of section 1"
  },
  {
    tab: "section 2",
    content: "I'm the content of section 2"
  }
];

export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};