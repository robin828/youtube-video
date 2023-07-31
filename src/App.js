import './App.css';
import axios from 'axios';
function App() {
  const handleClick = () => {

    axios.post('https://accounts.google.com/o/oauth2/v2/auth', {
        "client_id": "809358982466-20nathtulih1fcreju627tthrma3mban.apps.googleusercontent.com",
            "redirect_uri": "https://gan.'ai",
                        "response_type": "token",
                        "scope": "https://www.googleapis.com/auth/youtube.upload",
                        "include_granted_scopes": "true",
                        "state": "pass-through value",
                        "grant_type": "authorization_code",
                        "code": "pp"
           }).then(res=>console.log(res))


//     axios.post(`https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDIHZFvfVuM3oBm6bEMb3rDO8ETXu78yjw`, 
//     {headers: {
//       'Authorization': 'Bearer [YOUR_ACCESS_TOKEN]',
// 'Accept': 'application/json',
// 'Content-Type':'application/json'

    // }})
  }
  return (
    <div className="App">
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
