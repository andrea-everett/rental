import Directory from './components/directory/directory.component';
import './components/directory/directory.styles.scss';

const App = () => {
const Cabins = [
        {
          id: 1,
          title: 'CabinImg1',
          imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.adventure-journal.com%2Fwp-content%2Fuploads%2F2021%2F04%2FScreen-Shot-2021-04-15-at-8.36.36-PM.png&imgrefurl=https%3A%2F%2Fwww.adventure-journal.com%2F2021%2F04%2Fin-this-swedish-cabin-japanese-and-scandinavian-minimalism-meet%2F&tbnid=DpOORLa-6ETfLM&vet=12ahUKEwiktpnChpn4AhXBg1MKHQ5FA2IQMygHegUIARCDAw..i&docid=wpH4XtwqOkLdpM&w=1100&h=751&q=cabin%20images%20scandinavian&client=safari&ved=2ahUKEwiktpnChpn4AhXBg1MKHQ5FA2IQMygHegUIARCDAw'
        },
      {
        id: 2,
        title: 'CabinImg2',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcumminsarchitecture.com%2Fblog%2Fscandinavian-cabins-10%2F3%2F2017&psig=AOvVaw0VDAME7nX7Jy7tzaslNrng&ust=1654612631076000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCqssSGmfgCFQAAAAAdAAAAABAR'
      },
  ];

    return (
      <Directory Cabins={Cabins} />
      
    )
}

export default App;
