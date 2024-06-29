console.log("Service worker loaded")

self.addEventListener('push',e=>{
    console.log("enterd into final")
    const data = e.data.json()

    self.registration.showNotification(data.title,{
     'body':'Hello from MSD',
    })

    self.ServiceWorkerRegistration.
    console.log("Everything finished")
})

