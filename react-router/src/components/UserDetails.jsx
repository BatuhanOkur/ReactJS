import { useParams } from "react-router-dom"

function UserDetails() {
  // const params = useParams();
  // const userid = params.userId;
  const {userId} = useParams();
  return (
    <div>UserDetails {userId}</div>
  )
}

export default UserDetails