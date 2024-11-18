import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const result = await searchGithub();
      setCandidates(result);
      if (result.length > 0) {
        setCurrentCandidate(result[0]);
      }
    };
    fetchCandidates();
  }, []);

  const fetchCandidateDetails = async (candidate: Candidate) => {
    const detailedCandidate = await searchGithubUser(candidate.login);
    setCurrentCandidate(detailedCandidate);
  };

  const handleNextCandidate = () => {
    if (index < candidates.length - 1) {
      const newIndex = index + 1;
      setIndex(newIndex);
      fetchCandidateDetails(candidates[newIndex]);
    }
  };

  const handleSaveCandidate = () => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));

    handleNextCandidate();
  };

  return (
    <div>
      {currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={currentCandidate.name} />
          <h2>{currentCandidate.name}</h2>
          <p>{currentCandidate.login}</p>
          <p>{currentCandidate.location}</p>
          <p>{currentCandidate.email}</p>
          <a href={currentCandidate.html_url}>Profile</a>
          <p>{currentCandidate.company}</p>
          <button onClick={handleSaveCandidate}>+</button>
          <button onClick={handleNextCandidate}>-</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
