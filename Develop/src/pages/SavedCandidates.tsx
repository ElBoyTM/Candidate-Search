import { useEffect, useState } from 'react';
import type Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setCandidates(savedCandidates);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      {candidates.length > 0 ? (
        <ul>
          {candidates.map((candidates, index) => (
            <li key={index}>
              <img src={candidates.avatar_url} alt={`${candidates.name}'s avatar`} />
              <p>Name: {candidates.name}</p>
              <p>Username: {candidates.login}</p>
              <p>Location: {candidates.location}</p>
              <p>Email: {candidates.email}</p>
              <p>Company: {candidates.company}</p>
              <a href={candidates.html_url}>Profile</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates have been accepted.</p>
      )}
    </>
  );
};

export default SavedCandidates;
