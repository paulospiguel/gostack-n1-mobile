import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**

Conexão do dispositivo com o localhost

* ios com emulador: localhost
* ios com físico: IP da maquina
* Android com Emulador: localhost (adb reverse tcp:#### tcp:####) 
* Android com Emulador: 10.0.2.2 (Android Studio)
* Android com Emulador: 10.0.3.2 (Genymotion)
* Android com Físico: IP da maquina

*/
