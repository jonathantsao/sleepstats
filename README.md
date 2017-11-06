# SleepStats

SleepStats is a web application that is built using Ruby on Rails, PostgreSQL, and React.js with a Redux framework whose UI is inspired by Eight's mobile app.

## Summary

JSON files stored on Amazon Web Services (S3) are accessed via the backend whenever the user clicks on a different user or sleep interval. An AJAX call is made to the database, retrieving only the necessary information for rendering on the frontend. SleepStats allows users to view visualized data gathered through Eight's special mattress censors.

## Preview

![Main Page](/docs/sleepstats_1.png)
![With List of Intervals](/docs/sleepstats_2.png)
![Full Page](/docs/sleepstats_3.png)
![Timelines](/docs/sleepstats_4.png)
![Stat Bubbles](/docs/sleepstats_5.png)

## Setup
<!-- 1. Clone the repository to your machine
2. Make sure you have Ruby on Rails installed; if not, run "gem install rails in your terminal"
3. cd into the directory "SleepStats" that you cloned
4. run the following commands in the terminal:
..* "bundle exec bundle install"
..* "bundle exec rake db:setup"
5. Then open up two tabs in your terminal and run these two different commands in each separate tab:
..* "webpack --watch"
..* "rails server"
6. Open up Google Chrome to localhost:3000 -->
