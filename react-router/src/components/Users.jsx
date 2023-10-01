import { useSearchParams } from "react-router-dom"

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get('filter') === 'active';
  return (
    <>
      <div>Users</div>
      <button onClick={() => setSearchParams({filter:'active'})}>Aktif Uyeler</button>
      <button onClick={() => setSearchParams()}>Tüm Uyeler</button>
      {isActive ? <h2>Aktif üyeler</h2> : <h2>Tüm Üyeler</h2>}
    </>
  )
}

export default Users