import {useState, useEffect} from 'react';

const Voting = () => {
    
    const [voteA, setVoteA] = useState(() => {
       return parseInt(localStorage.getItem('VOTEA')) || 0;
    });
    const [voteB, setVoteB] = useState(() => {
        return parseInt(localStorage.getItem('VOTEB')) || 0;
    });

    useEffect(() => {
        localStorage.setItem('VOTEA', voteA);
        localStorage.setItem('VOTEB', voteB);
    }, [voteA, voteB])

    const VOTE_A = () => {
        setVoteA(prev => prev + 1)
    }
    const VOTE_B = () => {
        setVoteB(prev => prev + 1)
    }

    const RESET_VOTES = () => {
        setVoteA(0);
        setVoteB(0);
        localStorage.removeItem('VOTEA');
        localStorage.removeItem('VOTEB');
    }

    const totalVotes = voteA + voteB;
    const percentA = totalVotes === 0 ? 0 : ((voteA / totalVotes) * 100).toFixed(1)
    const percentB = totalVotes === 0 ? 0 : ((voteB / totalVotes) * 100).toFixed(1);

    return (

        <>
        <button onClick={VOTE_A}>Option A</button>
        <button onClick={VOTE_B}>Option B</button>
        <button onClick={RESET_VOTES}>Reset votes</button>
        <p>Option A: {voteA} Votes {percentA}</p>
        <p>Option B: {voteB} Votes {percentB}</p> 

        </>
    )
}

export default Voting; 