import './App.css';
import {TwitterFollowCard} from './TwitterFollowCard'

const users = [
  {
    userName: 'Wilmer',
    name: 'Wilmer Peñafiel Cruz',
    isFollowing: true
  },
  {
    userName: 'Josue',
    name: 'Josue Lalama Cruz',
    isFollowing: true
  },
  {
    userName: 'Carla',
    name: 'Carla Fernandez',
    isFollowing: false
  },
  {
    userName: 'Alberto15',
    name: 'Alberto Contreras',
    isFollowing: false
  }
]

function App() {
  return (
    <>
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
    </>
  );
}

export default App;
