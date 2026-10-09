import './App.css'
import RemedyCard from './components/RemedyCard'

function App() {
  return (
    <>
      <RemedyCard remedy={{
        name: 'Aloe Vera',
        description: 'Aloe vera is a succulent plant species of the genus Aloe. It grows wild in tropical climates around the world and is cultivated for agricultural and medicinal uses.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Aloe_vera_flower.jpg/800px-Aloe_vera_flower.jpg'
      }} />
    </>
  )
}

export default App
