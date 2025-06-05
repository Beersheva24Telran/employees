import { Navigate } from 'react-router-dom';
import { useUserDataStore } from '../../state-management/store'
import Logout from '../Logout';

const LogoutPage = () => {
    const logout = useUserDataStore(s => s.resetUserData);
    const userData = useUserDataStore(s => s.userData);
    const submitter = () => {
        localStorage.removeItem("token")
        logout();
    }
  return (
    <>
    {userData ? <Logout submitter={submitter}/> : <Navigate to='/login'></Navigate>}
    </>
    
  )
}

export default LogoutPage
