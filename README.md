# Mo's Top Hoser's 2020 Hockey Pool
> SPA built using MVEN stack
## Quick Start

```bash
# Install Server Dependencies
npm install

# Start Express Server: http://localhost:5000
npm run dev

# Install Frontend Dependencies
cd client
npm install 

# Start Vue DevServer: http://localhost:8080
npm run serve
```

## TODO
- [ ] Add penalty box to standings page
- [ ] Add email to team submission page
- [x] Add equal rank to tied teams on standings page
- [ ] Move menu to beside the logo and shrink logo size to gain vertical space
- [x] Add a point total on upper card for team page
- [ ] Add eliminated tag to each player on a team so the player image can be updated with "Hosed" stamp
- [ ] Add images to errors div on team submission page
- [x] Sort player stats based on header click
- [ ] Add heading highlight on sort for players page
- [ ] Style soundcloud page
- [ ] Add team dropdown on click for each team on the standings page
- [ ] Fix player and team update errors to reduce database calls
- [ ] Add rink display for each team either in a horixontal gallery and/or on the team submission
- [ ] Add winning team from previous years top ho's and record books
- [ ] Last and most importantly add Easter eggs all over the site

## Database Setup
Create a .env file in the root directory and add your mongoDB connection string.
```
DATABASE_CONNECTION_STRING = 'your_connection_string'
```
