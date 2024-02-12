import {useLoaderData} from 'react-router-dom';

export default function DogDetail() {
  const dog = useLoaderData()
  return <div className="dog-item">
  <h3>{dog.name}</h3>
  <img src={`/${dog.src}.jpg`} alt={dog.name}/>
</div>
}