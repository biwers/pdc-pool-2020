# Script to get all current NHL player data
import requests
import json
import csv

team_ids = []
teams = requests.get('https://statsapi.web.nhl.com/api/v1/teams')
teams = teams.json()
for team in teams['teams']:
    team_ids.append(team['id'])

print(len(team_ids))
player_ids = []

for team_id in team_ids:
    roster = requests.get('https://statsapi.web.nhl.com/api/v1/teams/' + str(team_id) + '/roster')
    roster = roster.json()
    for player in roster['roster']:
        player_ids.append(player['person']['id'])

print(len(player_ids))
players = []
for p_id in player_ids:
    player = requests.get('https://statsapi.web.nhl.com/api/v1/people/'+ str(p_id))
    player = player.json()
    pos = "F"
    pv = 1
    if(player['people'][0]['primaryPosition']['type'] == 'Defenseman'):
        pos = "D"
    if(player['people'][0]['primaryPosition']['type'] == 'Goalie'):
        pos = "G"

    stats = requests.get('https://statsapi.web.nhl.com/api/v1/people/' + str(p_id) + '/stats?stats=statsSingleSeason&season=20182019')
    stats = stats.json()
    if(stats['stats'][0]['splits']):
        stats = stats['stats'][0]['splits'][0]['stat']
        if(pos == "F"):
            pv = round(((2*stats['goals'] + stats['assists'])/stats['games']+1)*2)
        elif(pos == "D"):
            pv = round(((2*stats['goals'] + stats['assists'])/stats['games']+1)*3)
    if(pv > 4):
        pv = 4
    if(pv < 1):
        pv = 1
    players.append({"name":str(player['people'][0]['fullName']),
                    "p_id":p_id,
                    "pos":pos,
                    "team":str(player['people'][0]['currentTeam']['name']),
                    "points":0,
                    "pv":pv})

from operator import itemgetter
sorted_players = sorted(players, key=itemgetter('team', 'pos')) 

with open('data.json', 'w') as outfile:
    for player in sorted_players:
        outfile.write(str(player)+'\n')
outfile.close()
