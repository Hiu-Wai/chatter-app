const mockMessages = [
    {
        createdBy: "Charlotte Lo",
        createdOn: new Date('January 16, 2023 17:24:00'),
        channel: "pc2z0hhkyf",
        own: false,
        text: 'What is the weather like today?',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Alex Hung",
        createdOn: new Date('October 01, 2021 17:24:00'),
        channel: "pc2z0hhkyf",
        own: false,
        text: 'A bit cloudy :(',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Sophie Lam",
        createdOn: new Date('September 30, 2021 19:47:06'),
        own: false,
        channel: "achndt7tst",
        text: 'Any recommendations for songs??',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Simon Smith",
        createdOn: new Date('October 01, 2021 17:24:00'),
        channel: "achndt7tst",
        own: false,
        text: 'EXO - First SNow>.<',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    }
]