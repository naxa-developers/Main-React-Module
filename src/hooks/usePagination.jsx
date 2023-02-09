/* eslint-disable no-nested-ternary */
import sortByKey from '@Utils/sortFn';
import { useEffect, useState } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAssending, setSortAssending] = useState(true);
  const [headerToSort, setHeaderToSort] = useState('');
  const maxPage = Math.ceil(data?.length / itemsPerPage);
  const begin = (currentPage - 1) * itemsPerPage;
  const end = begin + itemsPerPage;

  function currentData() {
    return allData && allData.slice(begin, end);
  }
  const currentList = currentData();

  function next() {
    setCurrentPage((current) => Math.min(current + 1, maxPage));
  }

  function prev() {
    setCurrentPage((current) => Math.max(current - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  useEffect(() => {
    setAllData(data);
  }, [data]);

  const handleSorting = (title) => {
    let newList = [];
    if (title === headerToSort) {
      if (sortAssending) {
        newList = sortByKey(data, title, 'descending');
        setAllData(newList);
      } else {
        newList = sortByKey(data, title, 'ascending');
        setAllData(newList);
      }
      setSortAssending((prevState) => !prevState);
    } else {
      newList = sortByKey(data, title, 'ascending');
      setAllData(newList);
      setHeaderToSort(title);
      setSortAssending(true);
    }
  };

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
    begin,
    end,
    currentList,
    handleSorting,
  };
};

export default usePagination;
