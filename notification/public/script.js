const checkPermission =()=>{
    if(!('serviceWorker' in navigator)){
        throw new Error("No Support")
    }
    if(!('Notification' in window)){
        throw new Error("No support for notification")
    }
}

const registerSW = async()=>{
    const registration = await navigator.serviceWorker.register('sw.js')
        return registration
    
}

const requestNotification = async()=>{
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log("Hello World");
            new Notification("Hello World");
        } else {
            console.log("Notification permission denied");
        }
    } catch (error) {
        console.error("Error requesting notification permission:", error);
    }
}


checkPermission()
registerSW()
requestNotification()