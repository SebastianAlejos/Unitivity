# Unitivity
Mobile App Design Project

## Core Ideas and Scope of the App

The app will enable college students to quickly find entertainment, restaurants, or college-sponsored activities near them. They will be able to filter by restaurant or club or type of entertainment or distance from the college, so that way college students can stay integrated into the campus community.

This app makes the task of finding things to do on a college campus much easier. Sometimes the events email is lost among others in the inbox, and students are oftentimes new to the area they go to college at, so this app can streamline that process. We had an idea to make a vacation activity finder and refined it by limiting the audience to college students and including events from their respective college.

## User Story / Text Narrative

Users can load the app, hit a button, and immediately get things to do, locations, and dates. They would use the app when looking for things to do in their free time and they would accomplish a more satisfying social life.

## Target Market / User Groups

We are targeting college students specifically, both male and female, they have money to be able to go to college and they own a phone. They are either looking for people to make friends or they have friends and are looking for new things to do.

## Revenue Model

We can offer event sponsorships, so restaurants, clubs, or other establishments can pay us to put their offering at the top of the search list in hopes of attracting more college students. Also, we could sell data since we will be able to see activities and events users attend.

## Target OS and Devices

Our app will be optimized for both iOS and Android since we are working in React Native. We decided this because in our age range, 58% use iPhones, and 42% use Android. Two people in our group have iPhones and one has Android, so that way we can all use this app on our devices.

## Platform or SDK

We are using React Native so that we gain experience using an industry standard, as well as being able to use a language we are familiar with (JavaScript) and being able to compile to both iOS and Android.

## Technology Stack

There would need to be information stored in a server somewhere about events, including dates, times, locations, type of activity, whether or not it’s associated with a college, and so on. You could also enable push notifications for events that you plan on attending. We will also integrate Yelp data for restaurants and activities in the area that have info on that app, so we need an API to interact with it.

## Internal Documentation

- “Search everything” feature (includes restaurants, club events, activities in the area)
- Filter search (by distance, type, etc.)
- User profile, which includes your college and pre-filters like preferred activity distance
- Reviews section with info about restaurants and activities
- Ability to add events for your college
- Create private events and invite other users by email
- Report events (if they are spam or don’t exist)
- Sponsored activities
- User verification with college email
- Use API to integrate Yelp data [DOCUMENTATION](https://www.yelp.com/dataset/documentation/main)
- Use API to integrate Google maps data [DOCUMENTATION](https://developers.google.com/maps/documentation)
- Light Mode / Dark Mode
- Tags for events for filtering purposes

## Customer Support

We can provide customer support by our company help email and offering the ability to report an event, which we as a company will regularly check and confirm.

# Functional Requirements

## Login Screen

It will require a login screen when you first boot up the app and ask you to select your college and confirm your college email (2-step verification) and select a password, then after that it should remember who you are. You can still log out if you need to.

## Push Notifications

Push notifications can be enabled by the user, and they can use them to remind them about events they plan on going to with a set start time. They will notify users a set amount of time before the event (which you can adjust)

## Payment Gateway Integration

Our app will not offer in-app purchases, but it will offer the ability for a business or event creator to sponsor their activity by paying a fee, either for one day, a week, or multiple weeks.

## Geolocation

We will track the user’s location, and we will use their college’s location to find activities. You can also manually update your location if you want to find activities near a different college.

## Project Timeline

- Sprint 1: Finish Design for all the screens, learn React Native, Login Screen
- Sprint 2: Map Screen, Event Screen, Add Event
- Sprint 3: Profile, Event Details, Preferences
- Sprint 4: Finish everything that’s not finished, polish and make it work

## Time Budget

We will budget our time so that each person contributes about 4 hours per week. If someone is over 4 hours per week, those who are under should help them complete their work.
