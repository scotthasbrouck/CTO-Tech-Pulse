# CTO Tech Pulse

### Motivation
During the very early stages of a company, there are typically a small handful of close founders that sort of organically develop an in-the-moment communication process... usually distributed over Slack/Hipchat, text, in person, FB Messenger, random phone calls, and the ocasional expletive. Wonderful. That works for about 8 seconds once you add a board of investors and advisors, and start hiring people. __Communication can make or break a startup__.

*Do I have your attention???* Okay, let's continue.

One of the first communication channels to break down, really fail to get started properly in the first place, is the one that flows between the CTO and the CEO/board. So out popped this little nugget from my brain one day: wouldn't it make sense to have a simple template that could be hosted on S3 or a DigitalOcean droplet, and mostly updated automatically? Then you could just send the link with a short recap every week to your list of X's. X being board member, advisor, angel investor, or even that "seasoned" COO the investors insisted you hire.

### How it's built
There's not much to it, honestly. It makes use of BootStrap and Chart.js. All of the graphed data is generated from a series of object literals in `js/TechPulse.js`.

### Future Direction
Ideally, `js/TechPulse.js` would be modified to pull data on the fly from a series of APIs. For example, the bug fix data and the code base pulse could come from weekly Github milestones. The response time, error rates, and up time could come from NewRelic. And the feature milestone pulse and action items could come from Asana.

Besides API integration, my intent is to write a simple backend that I can CURL every monday that:
1. POST my weekly CTO synoposis (no way to automate that puppy)
2. Upon recieving the CTO synopsis as a POST request, it caches a datetime stamped cache in a database
3. Finally, Sends a request to Mailchimp or Mad Mimi to email the report to a mailing list of our X's

**End result is turning what could be something that makes you want to rip your hair out and run into oncoming traffic, into CURLing a simple POST request**

...so someday, hopefully soon, I'll be at the point of needing this and will finish what I just described. And if someone beats me to it and submits a PR with all that, well, I owe them a steak and a few beers.

The code in this repo is under a [CC BY License](https://creativecommons.org/licenses/by/3.0/us/).
You are free to share and adapdt this code, even for commercial purposes, but just mention me somewhere, OK?

### THANKS GUYS!