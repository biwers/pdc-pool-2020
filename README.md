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
1. Add penalty box to standings page
2. Add email to team submission page
3. Add tie equal rank to tied teams on standings page
4. Move menu to beside the logo and shrink logo size to gain vertical space
5. Add eliminated tag to each player on a team so the player image can be updated with "Hosed" stamp
6. Add images to errors div on team submission page
7. Sort player stats based on header click
8. Style soundcloud page
9. Add team dropdown on click for each team on the standings page
10. Fix player and team update errors to reduce database calls
11. Add rink display for each team either in a horixontal gallery and/or on the team submission 
12. Last and most importantly add Easter eggs all over the site

## Database Setup
Create a .env file in the root directory and add your mongoDB connection string.
```
DATABASE_CONNECTION_STRING = 'your_connection_string'
```
