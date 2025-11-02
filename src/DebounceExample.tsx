import React, { useEffect, useRef, useState } from 'react';
import { DATA } from './data';
const useDebounce = (value, delay) => {
  const [state, setState] = useState(value);
  const ref = useRef();
  console.count('Render');
  // const debounceFn = (f, timer) => {
  //   let id;

  //   return (...args) => {
  //     clearInterval(id);
  //     id = setTimeout(() => {
  //       f(...args);
  //     }, timer);
  //   };
  // };

  // const fn = debounceFn((val) => {
  //   setState(val);
  // }, delay);
  useEffect(() => {
    console.count('Effect called');
    const timer = setTimeout(() => {
      setState(value);
    }, delay);
    // setState(val);
    return () => {
      console.count('Cleanup');
      clearInterval(timer);
    };
  }, [value, delay]);

  return state;
};

function searchHackerNews(term) {
  if (!term) return DATA;
  return DATA.filter((d) => d.title.includes(term));
}

function DebounceExample() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 3000);
  // console.log(debouncedSearchTerm, 'term');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSearchTerm(formData.get('search'));
    e.target.reset();
    e.target.focus();
  };

  React.useEffect(() => {
    const searchHN = async () => {
      // setIsSearching(true);
      let results = [];
      const data = await searchHackerNews(debouncedSearchTerm);
      results = data || [];

      // setIsSearching(false);
      setResults(results);
    };

    searchHN();
  }, [debouncedSearchTerm]);
  return (
    <section>
      <header>
        <h1>useDebounce</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Search HN"
            style={{ background: 'var(--charcoal)' }}
            onChange={handleChange}
          />
          <button className="primary" disabled={isSearching} type="submit">
            {isSearching ? '...' : 'Search'}
          </button>
        </form>
      </header>
      <div>
        {results.map((r) => {
          return <p key={r.id}>{r.title}</p>;
        })}
      </div>
    </section>
  );
}

export default DebounceExample;
