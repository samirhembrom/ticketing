import axios from 'axios';

const LandingPage = ({ currentUser }) => {
    console.log(currentUser);
    axios.get('/api/users/currentuser').catch((err) => {
        console.log(err.message);
    });
    return <h1>Home</h1>
}

// export async function getServerSideProps() {
//     const reponse = await axios.get('/api/users/currentuser');

//     return reponse.data;
// }

export default LandingPage