function pageCount(n, p) {
  const pagesCount = Math.floor(parseInt(n, 10)/2);
  console.log('pagesCount',pagesCount);
  const pageForGo = Math.floor(parseInt(p, 10)/2);
  console.log('pageForGo',pageForGo);



  return Math.min(pageForGo, pagesCount - pageForGo);
}

console.log(pageCount(6, 2))
