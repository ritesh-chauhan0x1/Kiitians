# Kiitian Finder 😋
(v1) Find a kiit student `Name`, `Email` and `Student Number` using his/her roll number only.
(v2) Now you can find staff `Email`, `Social Profiles` and `Institution Mail`.

This can be helpful if you need to find some staff or student in case of emergencies OR you are creating a database that includes staff and student details.

# How to run? 🤨

Make sure you have <a href="https://nodejs.org/en">nodeJS</a> installed. And this requires an active internet connection.

Paste this into your favourite terminal.
```bash
git clone https://github.com/erucix/kiitian-finder
cd kiitian-finder
node kiit.js 220XXXXX # <--this is your kiit roll number
```

# How to find faculties now? 🤨

For getting faculties you need to install some extra modules. Paste this code intor your Commmand Prompt or Terminal to do all in once.
```bash
git clone https://github.com/erucix/kiitian-finder
cd kiitian-finder
npm install jsdom got
node faculty.js  # <---- Saves output in faculty.json file.
```
**Note**: Running faculty search will cost you some time since we are fetching every staff details from the site. 

⚠️ **Desclaimer**: This is only for recreational and educational purpose and I am in no way responsible for the misconduct done with the use of this program.
