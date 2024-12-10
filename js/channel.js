const mockChannels = [
{
    id: "pc2z0hhkyf",
    name: "Weather forecast",
    favorite: false,
    messages: [],
    latestMessage () {
        if (!!this.messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date().getDate() - latest.getDate() > 1) {
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        }
    }
},
{
    id: "achndt7tst",
    name: "Music",
    favorite: false,
    messages: [],
    latestMessage () {
        if (!!this.messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date().getDate() - latest.getDate() > 1) {
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        }
    }
}
];
