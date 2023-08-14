const form = document.querySelector('form');
const candidateSelect = document.querySelector('#candidate');
const partySelect = document.querySelector('#party');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const selectedCandidate = candidateSelect.value;
    const selectedParty = partySelect.value;

    alert(`You voted for ${selectedCandidate} from ${selectedParty}. Thank you for voting!`);
});
