function fetchNextElement(array) {
  let idx = 0;
  function next() {
    if (idx == array.length) {
      return undefined;
    }
    const nextElement = array[idx];
    idx++;
    return nextElement;
  }
  return {next};
}

const automaticFetcher = fetchNextElement([99, 43, 54, 24, 23, 4, 3, 2, 10]); //inside automatic fetcher variable we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
