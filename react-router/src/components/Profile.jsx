import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
  return (
    <>
    <div>Profile</div>
    <button onClick={() => navigate('/')}>Geri Dön</button>
    </>
  )
}

export default Profile