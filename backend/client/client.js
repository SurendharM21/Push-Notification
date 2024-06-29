

const publicKey = 'BG9xUnx2-uEpG_Fz9SuBKkzXciEoysyPHrS-NFb_fPOjbjQMqKY3yg0piqF_e0Z6jiZa0IqPR_aFWXqVKrZtTVs'

if('serviceWorker' in navigator)
    {
        send().catch(err=> console.error(err))
    }
else{
    console.log("no Service Worker")
}

    async function send()
    {
     const register= await   navigator.serviceWorker.register('/worker.js',{scope:'/'})

  

     console.log("service worker registered")

     const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
      }
      )

      await fetch("/subscribe",{method:'POST',body: JSON.stringify(subscription),headers:{
        'content-type' : 'application/json'
      }})
      console.log("Push Sent")
    }
    function urlBase64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
    
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
    
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }