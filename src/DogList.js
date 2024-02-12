import {useLoaderData,Link} from 'react-router-dom'
export default function DogList() {
  const dogList = useLoaderData()
  return <div className="dog-list">
    <h1>List of Dogs</h1>
    {dogList.map(dog => <div key={dog.name} className="dog-item">
      <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
    </div>)}
  </div>
}