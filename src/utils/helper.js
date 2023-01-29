export const filterData = ({ searchText, searchKey }, ArrayList) => {
  return ArrayList.filter((item) =>
    item.data[searchKey].toLowerCase().includes(searchText.toLowerCase())
  );
};
