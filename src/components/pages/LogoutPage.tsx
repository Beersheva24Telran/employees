import { Navigate } from 'react-router-dom';
import { useUserDataStore } from '../../state-management/store'
import Logout from '../Logout';

const LogoutPage = () => {
    const logout = useUserDataStore(s => s.resetUserData);
    const userData = useUserDataStore(s => s.userData)
  return (
    <>
    {userData ? <Logout submitter={() => logout()}/> : <Navigate to='/login'></Navigate>}
    </>
    
  )
}

export default LogoutPage
